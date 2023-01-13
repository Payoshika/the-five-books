import React, {useState, useEffect} from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from "axios"
import ListGroupItem from "react-bootstrap";

const LectureSchedule = (props) => {
  const [resultData, setResultData] =  useState(<div></div>); //　講義データ
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
      })
    }
    listLectures()
  }, []);





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
        </Container>
      )
}

export default LectureSchedule
