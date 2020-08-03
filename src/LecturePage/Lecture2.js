import React, {useState} from "react"
import {useParams, Link} from "react-router-dom";
import {Lecture2Info} from "./index"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import bookImg from "./img/Theaitetos.jpg"
import lecturer_yamano_hiroki from "./img/lecturer_yamano_hiroki.jpg"
import Calendar from 'react-calendar'
import './styles/calender.css';

const Lecture1 = () => {
  const [value, onChange] = useState(new Date(2020, 9, 1));

  const lecturePeriod = {
    startDate: Lecture2Info.lecture.lectureStartDate,
    endDate: Lecture2Info.lecture.lectureEndDate,
    lectureDurationClass : "lecture-duration",
    lectureDate : {
      date: Lecture2Info.lecture.liveLectureDate,
      text: `講義 ${Lecture2Info.lecture.lectureTime}`,
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

  const content =
    <div className="top-lecture d-flex justify-content-center align-items-center flex-wrap">
      <div className="book-img-container">
        <Image src={bookImg} fluid />
      </div>
      <div className="lecturer-info d-flex justify-content-center align-items-center flex-nowrap">
        <div className="lecturer-photo">
          <Image src={lecturer_yamano_hiroki} fluid roundedCircle/>
        </div>
        <div className="lecturer-info">
            <p>講師: {Lecture2Info["lecturer"]["name"]}</p>
            <p>専門: {Lecture2Info["lecturer"]["expertise"]}</p>
            <p>学位: {Lecture2Info["lecturer"]["degree"]}</p>
            <p>所属: {Lecture2Info["lecturer"]["affiliation"]}</p>
            <p>経歴： <a href={Lecture2Info["lecturer"]["profile-link"]}><u>researchmap</u>を見る</a></p>
            <p>講義書籍: {Lecture2Info["lecturer"]["lecturableBooks"].join(", ")}</p>
        </div>
      </div>
    </div>

  const lectureDetail =
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

  return(
    <Container fluid>
      <Row>
        <Col xs={12}>
          <h4 className="text-center"><b>{Lecture2Info.book.name} : {Lecture2Info.book.author}著</b></h4>
          <h4 className="text-center"><b>10月開講予定</b>
          </h4>
        </Col>
        <Col xs={12}>
          {content}
        </Col>
        <Col xs={12}>
          <h4 className="text-center">講義スケジュール</h4>
            {schedule}
        </Col>
        <Col xs={12} className="d-none">
          <h4 className="text-center">講義概要</h4>
            {lectureDetail}
        </Col>
      </Row>
    </Container>
  )

}

export default Lecture1
