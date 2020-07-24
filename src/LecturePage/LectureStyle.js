import React, {useState} from "react"
import {useParams, Link} from "react-router-dom";
import {Lecture1Info, Lecture2} from "./index"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import bookImg from "./img/読書について.jpg"
import lecturerPhoto from "./img/sample-lecturer-photo.png"
import Calendar from 'react-calendar'
import './styles/calender.css';

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
      text: "講義 10:00-11:30",
      className: "lecuture-date"
    }
  }

  const getFormatDate = (value) => {
   return `${value.getFullYear()}${('0' + (value.getMonth() + 1)).slice(-2)}${('0' + value.getDate()).slice(-2)}`;
 }

  const getTileContent = (value) => {
    const day = getFormatDate(value);
    return(
      <p className="text-break">
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
  <div className="schedule d-flex justify-content-center">
    <Calendar
      onChange={onChange}
      value={value}
      tileContent = {(value)=>getTileContent(value.date)}
      tileClassName = {(value)=>getTileClassName(value.date)}
    />
  </div>

  if(parseInt(id) === 1){
    content =
    <div className="top-lecture d-flex justify-content-center align-items-center flex-wrap">
      <div className="book-img-container">
        <Image src={bookImg} fluid />
      </div>
      <div className="lecturer-info d-flex justify-content-center align-items-center flex-nowrap">
        <div className="lecturer-photo">
          <Image src={lecturerPhoto} fluid roundedCircle/>
        </div>
        <div className="lecturer-info">
            <p>講師: {Lecture1Info["lecturer"]["name"]}</p>
            <p>専門分野: {Lecture1Info["lecturer"]["expertise"]}</p>
            <p>学位: {Lecture1Info["lecturer"]["degree"]}</p>
            <p>所属機関: {Lecture1Info["lecturer"]["affiliation"]}</p>
            <p>講師プロフィール： {Lecture1Info["lecturer"]["profile-link"]}</p>
            <p>講義書籍: {Lecture1Info["lecturer"]["lecturableBooks"].join(", ")}</p>
        </div>
      </div>
    </div>

    lectureDetail =
    <div>
      <div className="lecture-detail d-flex flex-column">
        <p>講義の内容</p>
        <p>講義の流れ</p>
        <p>参加条件</p>
        <p>参加料金</p>
        <p>注意事項</p>
      </div>
      <div className="attend-lecture">
        <p>講義に参加する</p>
      </div>
    </div>
  }

  return(
    <Container fluid>
      <Row>
        <Col>
          <h4 className="text-center">{Lecture1Info.book.name} : {Lecture1Info.book.author}著</h4>
          <h4 className="text-center">{Lecture1Info.lecture.lectureStartDate}開講 <br/>
          {Lecture1Info.lecture.lectureEndDate}閉講
          </h4>
            {content}
          <h4 className="text-center">講義スケジュール</h4>
            {schedule}
          <h4 className="text-center">講義概要</h4>
            {lectureDetail}
        </Col>
      </Row>
    </Container>
  )
}


export default LectureStyle
