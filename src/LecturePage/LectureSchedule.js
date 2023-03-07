import React, {useState, useEffect} from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from "axios"
import ListGroupItem from "react-bootstrap";
import Calendar from 'react-calendar'
import Form from 'react-bootstrap/Form'

const LectureSchedule = (props) => {
  const [resultData, setResultData] =  useState(<div></div>); //　講義データ
  const [value, onChange] = useState(new Date());
  const [tileContentValue, setTileContentValue] = useState();
  const [tileStyleValue, setTileStyleValue] = useState();
  const [calendarItSelf, setCalendarItSelf] = useState(<div></div>);
  const [name, setName] = useState("")
  const [title, setTitle] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [pastLecture, setPastLecture] =  useState(<div></div>); //　過去講義データ
  
  useEffect(() => {
    let apiUrl = (`https://script.google.com/macros/s/AKfycbwRCEJ-o9FZ5urBq1Y6KvmgsK7m0QVZOwPQMN-cK0SYMHXXTN-SvqchtpQx7HzJsShGUQ/exec`)
    let pastLectureApiUrl = ("https://script.google.com/macros/s/AKfycbwGxKz4MQ02-klhpXwAhKDJ5LxUgp8Nrcrx67bVDs_HTR7yFJTTYXriwabJDa6uMRTTfQ/exec")
    let monthList
    let eachMonthList
    let lectureNum
    let pastLectureList
  
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
              lectureCalList.push([getFormatDate(new Date(dates)), month[name]])
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
                        {`『${month[name]["lectureName"]}』講師:${month[name]["lecturerName"]} \n期間:${month[name]["lectureDuration"]}`}
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
    // 講義参加人数を追加するaxiosを再度使う。
    const getPastLectures=()=>{
      axios.get(pastLectureApiUrl).then(response =>  {
        pastLectureList = response.data
        console.log(pastLectureList)

      // 各講義をリストに並べる
      setPastLecture(
        <div>
              <div>
                <ListGroup>
                    {Object.keys(pastLectureList).map(lecture=>{
                      return(
                        <ListGroup.Item>
                        『{lecture}』講義:{pastLectureList[lecture]["次回想定参加者"]}人
                        </ListGroup.Item>
                      )
                    })
                    }
                </ListGroup>
              </div>
        </div>
      )
      })
    }
    getPastLectures()
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
    // console.log(tileContentValue)
    // その日の日付を含む講義をfilterで取り出す。
    let sameDayLecture = tileContentValue.filter(lecture => lecture[0] === day)
    // 講義が一つの場合
    if(sameDayLecture.length === 1){
      return(
        <p className="text-break">
          {`『${sameDayLecture[0][1]["lectureName"]}』\n講師:${sameDayLecture[0][1]["lecturerName"]}\n${sameDayLecture[0][1]["lectureTime"]}`}
      </p>
      )
    }
    // 講義が二つ以上ある場合
    else if(sameDayLecture.length >1){
      console.log(sameDayLecture)
      // 二つ以上講義がある場合は時間が先のものから表示するため、arrayの順番を講義時間でソート
      sameDayLecture.sort((lecture1,lecture2) => {
        return lecture1[1]["lectureTime"] > lecture2[1]["lectureTime"] ? 1: -1
      })
      console.log(sameDayLecture)
      let lectureDescription = ``
      sameDayLecture.forEach(lecture => {
        {lectureDescription += `『${lecture[1]["lectureName"]}』\n${lecture[1]["lectureTime"]}\n`
        }
      })
      return(
        <p className="text-break">
          {lectureDescription}
      </p>
      )
    }
    else{
      return(
      <p className="text-break">
      {`\n  \n  \n`}
      </p>
      )
    }
  }
  }

  const lectureRegister = (event) => {
    // document.querySelector(".contact").getElementsByTagName("button")["0"].innerText = "送信しています..."
    // const data = {user:{
    //   name: name,
    //   email: email,
    //   content: input,
    //   contact_genre: document.getElementById("contact-genre").value
    // }}
    // const apiURL = "https://script.google.com/macros/s/AKfycbyoSn2vON2Flfz8y_QRsPKYltT_IR8yTH8hiPUIOrLyLUrBziUPx77h3F5GCmkG0Y7x/exec"
    // var postparam =
    //   {
    //     "method"     : "POST",
    //     "mode"       : "no-cors",
    //     "Content-Type" : "application/x-www-form-urlencoded",
    //     "body" : JSON.stringify(data)
    //   };
    //   fetch(apiURL, postparam)
    //   .then(response => {
    //       if (response) {
    //         document.querySelector(".contact").getElementsByTagName("button")["0"].innerText = "お問い合わせを送信いたしました"
    //         setName("")
    //         setEmail("")
    //         setInput("")
    //       }
    //       else if (response.data.subscribed === false){
    //           document.querySelector(".register-text").innerHTML = `</p>${response.data.message}<p>`
    //       }
    //     }
    //   )
    //   .catch(error =>{
    //     console.log(error);
    //   })
      event.preventDefault()
      event.stopPropagation()
  }

  const attendeeEstimate = <div></div>

  const newLectureRegister = 
  <Form className="form-input">
    <Form.Group controlId="name" required>
      <Form.Label>お名前</Form.Label>
      <Form.Control
        type="text"
        name="name"
        value={name}
        placeholder="講師名"
        onChange={(event) => setName(event.target.value)}
        />
    </Form.Group>
    <Form.Group controlId="name" required>
      <Form.Label>書籍タイトル</Form.Label>
      <Form.Control
        type="text"
        name="title"
        value={title}
        placeholder="書籍名をご記入ください。選定中の場合は選定中とご記入ください。"
        onChange={(event) => setTitle(event.target.value)}
        />
    </Form.Group>
    <Form.Group controlId="startDate" required>
      <Form.Label>講義開始予定日</Form.Label>
      <Form.Control
        type="date"
        name="startDate"
        value={startDate}
        onChange={(event) => setStartDate(event.target.value)}
        />
    </Form.Group>
    <Form.Group controlId="endDate" required>
      <Form.Label>講義終了予定日</Form.Label>
      <Form.Control
        type="date"
        name="endDate"
        value={endDate}
        onChange={(event) => setEndDate(event.target.value)}
        />
    </Form.Group>
    <Form.Group className="d-flex justify-content-center">
      <Button
        variant="outline-secondary"
        onClick={(event)=>lectureRegister(event)}
        >送信
      </Button>
    </Form.Group>
  </Form>

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
            <h4 className="text-center"><u><b>講義カレンダー</b></u></h4>
            {calendarItSelf}
            </Col>
          </Row>
          <Row>
            <Col>
            <h4 className="text-center"><u><b>過去講義リスト</b></u></h4>
            {pastLecture}
            </Col>
          </Row>
          <Row>
            <Col id="contact" className="contact d-flex flex-column align-items-center justify-content-center">
            <h4 className="text-center"><u><b>新規講義登録申請</b></u></h4>
            <p className="text-center">講義書籍と予定日をご記入いただき、送信してください。開講可能である場合、一両日以内に運営よりご連絡いたします。</p>
            {newLectureRegister}
            </Col>
          </Row>
        </Container>
      )
}

export default LectureSchedule
