import React, {useState} from "react"
import {useParams, Link} from "react-router-dom";
import {Lecture1Info, Lecture2} from "./index"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const LectureStyle = () => {
  const [value, onChange] = useState(new Date(2020, 8, 1));
  let {id} = useParams()
  let content = <div></div>
  let lectureDetail = <div></div>
  let lectureDescription = <div></div>

  const lecturePeriod = {
    startDate: 20200905,
    endDate: 20200926,
    lectureDurationClass : "lecture-duration",
    lectureDate : {
      date: ["20200905", "20200912", "20200919", "20200926"],
      text: "講義",
      className: "lecuture-date"
    }
  }

  const getFormatDate = (value) => {
   return `${value.getFullYear()}${('0' + (value.getMonth() + 1)).slice(-2)}${('0' + value.getDate()).slice(-2)}`;
 }

  const getTileContent = (value) => {
    const day = getFormatDate(value);
    return(
      <p>
        {(lecturePeriod.lectureDate.date.includes(day))?
        lecturePeriod.lectureDate.text : ""}
      </p>
    )
 }

   const getTileClassName = (value) => {
     const day = getFormatDate(value)
     return(
       (lecturePeriod.startDate <= parseInt(day) && parseInt(day) <= lecturePeriod.endDate)?
       (lecturePeriod.lectureDate.date.includes(day))?
       lecturePeriod.lectureDate.className : lecturePeriod.lectureDurationClass
        : ""
     )
  }

  let schedule =
  <div>
    <Calendar
      onChange={onChange}
      value={value}
      tileContent = {(value)=>getTileContent(value.date)}
      tileClassName = {(value)=>getTileClassName(value.date)}
    />
  </div>

  if(parseInt(id) === 1){
    content =
    <div className="d-flex justify-content-center flex-nowrap">
      <div>
        <img src={Lecture1Info["book"]["image"]} alt={Lecture1Info["book"]["title"]}/>
      </div>
      <div className="d-flex flex-column align-contents-center flex-nowrap">
        <div>
          <img src={Lecture1Info["lecturer"]["lecturerPhoto"]} alt={Lecture1Info["lecturer"]["name"]}/>
        </div>
        <div className="">
            <p>講師: {Lecture1Info["lecturer"]["name"]}</p>
            <p>専門分野: {Lecture1Info["lecturer"]["expertise"]}</p>
            <p>学位: {Lecture1Info["lecturer"]["degree"]}</p>
            <p>所属機関: {Lecture1Info["lecturer"]["affiliation"]}</p>
            <p>講義書籍: {Lecture1Info["lecturer"]["lecturableBooks"]}</p>
        </div>
      </div>
    </div>

    lectureDetail =
    <div>説明が入る</div>
  }

  return(
    <Container>
      <Row>
        <Col>
          {content}
          {lectureDetail}
          {schedule}
        </Col>
        <Col>
          <Link to="/">to Home</Link>
        </Col>
      </Row>
    </Container>
  )
}


export default LectureStyle
