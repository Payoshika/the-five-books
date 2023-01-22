import React, {useState, useEffect} from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from "axios"
import ListGroupItem from "react-bootstrap";
import Calendar from 'react-calendar'

const LectureSchedule = (props) => {
  const [resultData, setResultData] =  useState(<div></div>); //　講義データ
  const [value, onChange] = useState(new Date());
  const [tileContentValue, setTileContentValue] = useState();
  const [tileStyleValue, setTileStyleValue] = useState();
  const [calendarItSelf, setCalendarItSelf] = useState(<div></div>);

  useEffect(() => {
    let apiUrl = (`https://script.google.com/macros/s/AKfycbwRCEJ-o9FZ5urBq1Y6KvmgsK7m0QVZOwPQMN-cK0SYMHXXTN-SvqchtpQx7HzJsShGUQ/exec`)
    let monthList
    let eachMonthList
    let lectureNum
  
    const listLectures = () => {
      axios.get(apiUrl).then(response =>  {
        let lectureList = response.data
        monthList = Object.keys(lectureList)
        eachMonthList = monthList.map(month => lectureList[month])
        lectureNum = eachMonthList.length -1
        console.log(monthList)
        console.log(eachMonthList)  
        console.log(lectureNum)
        // 取り出したデータから[[日程,{講義詳細}]]のarray in arrayを作成
        const lectureCalList = []
        eachMonthList.forEach(month => {
          const lectureNames = Object.keys(month)
          lectureNames.forEach(name => {
            month[name]["lectureDates"].forEach(dates=>{
              lectureCalList.push(getFormatDate(new Date(dates)), month[name])
            })
          })
        })
        console.log(lectureCalList)

        // 月間講義リストに反映
        setResultData(
          <div>
            {eachMonthList.map((month,index) => {
              return(
              <div>
                <h4>{monthList[index]}月</h4>
                <ListGroup>
                    {Object.keys(month).map(name=>{
                      return(
                      <ListGroup.Item>
                        『{month[name]["lectureName"]}』講師:{month[name]["lecturerName"]} 期間:{month[name]["lectureDuration"]}
                      </ListGroup.Item>
                      )
                    })}
                </ListGroup>
              </div>
            )})}
          </div>
        )

        // カレンダーにも反映
        console.log(eachMonthList[0])
        setTileContentValue(lectureCalList)
      })
    }
    listLectures()
  }, []);

  useEffect(() => {
    /* 第1引数には実行させたい副作用関数を記述*/
    setCalendarItSelf(
      <div className="schedule d-none d-md-flex justify-content-center">
      <Calendar
        onChange={onChange}
        value={value}
        tileContent = {(value)=>getTileContent(value, tileContentValue)}
        tileClassName = {tileStyleValue}
      />
    </div>
    )
  },[tileContentValue]) // 第2引数には副作用関数の実行タイミングを制御する依存データを記述

const getFormatDate = (value) => {
  return `${value.getFullYear()}${('0' + (value.getMonth() + 1)).slice(-2)}${('0' + value.getDate()).slice(-2)}`;
}

const getTileContent = (value, tileContentValue) => {
  // 各日の日付
  const day = getFormatDate(value.date)
  // titleContentValueの日程
  if (tileContentValue != undefined){
    return(
      <p className="text-break">
        {tileContentValue.includes(day)?
          `『${tileContentValue[(tileContentValue.indexOf(day)+1)]["lectureName"]}』\n講師:${tileContentValue[(tileContentValue.indexOf(day)+1)]["lecturerName"]}\n${tileContentValue[(tileContentValue.indexOf(day)+1)]["lectureTime"]}`: `  \n  \n  \n`
        }
      </p>
      )
  }
  }

 const getTileClassName = (value) => {
   return("test")
}
  

      return(
        <Container fluid>
          <Row>
          <Col className="d-flex flex-column align-items-center justify-content-center mt-3">
            <h4 className="text-center"><u><b>今後の講義予定</b></u></h4>
            <ListGroup>
              {resultData}
            </ListGroup>
          </Col>
          </Row>
          <Row>
            <Col>
            {calendarItSelf}
            </Col>
          </Row>
        </Container>
      )
}

export default LectureSchedule
