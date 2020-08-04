import React, {useState} from "react"
import {Link} from "react-router-dom";
import {Lecture1Info} from "./index"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import bookImg from "./img/読書について.jpg"
import lecturer_yamano_hiroki from "./img/lecturer_yamano_hiroki.jpg"
import Calendar from 'react-calendar'
import './styles/calender.css';

const Lecture1 = () => {
  const [value, onChange] = useState(new Date(2020, 8, 1));

  const lecturePeriod = {
    startDate: Lecture1Info.lecture.lectureStartDate,
    endDate: Lecture1Info.lecture.lectureEndDate,
    lectureDurationClass : "lecture-duration",
    lectureDate : {
      date: Lecture1Info.lecture.liveLectureDate,
      text: `講義 ${Lecture1Info.lecture.lectureTime}`,
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
      <div className="lecturer-info d-flex flex-column flex-md-row justify-content-center align-items-center flex-nowrap">
        <div className="lecturer-photo">
          <Image src={lecturer_yamano_hiroki} fluid roundedCircle/>
        </div>
        <div className="lecturer-info">
            <p>講師: {Lecture1Info["lecturer"]["name"]}</p>
            <p>専門: {Lecture1Info["lecturer"]["expertise"]}</p>
            <p>学位: {Lecture1Info["lecturer"]["degree"]}</p>
            <p>所属: {Lecture1Info["lecturer"]["affiliation"]}</p>
            <p>経歴： <a href={Lecture1Info["lecturer"]["profile-link"]}><u>researchmap</u>を見る</a></p>
            <p>講義書籍: {Lecture1Info["lecturer"]["lecturableBooks"].join(", ")}</p>
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

  const disclaimer =
  <div className="lecture-detail d-flex flex-column">
    <p>
    ・書籍は参加者各自でご用意いただきますようお願いいたします。<br/>
    ・「読書について」は <a href="https://www.kotensinyaku.jp/books/book169/">光文社</a>、<a href="https://www.iwanami.co.jp/book/b246769.html">岩波書店</a>より刊行されていますが、どちらの書籍を読んでいただいても構いません。<br/>
    ・第一回講義で講師より書籍の概要や背景、講義の狙いをご説明しますので、この時点で書籍を通読している必須はありません。
    </p>
    <p>
    ・講義にはWeb会議サービスの<a href="https://zoom.us/jp-jp/meetings.html"><u>Zoom</u></a>を使用いたします。<br/>
    ・講義では、受講者の方に質問や受講者同士の対話を強要することはありません。講義中のご質問は、Zoomのチャットまたは音声で行うことができます。<br/>
    ・各講義は、録画のうえ参加者へ講義後に共有いたします。
    </p>
    <p>
    ・受講期間の対話ツールには、<a href="https://slack.com/intl/ja-jp/"><u>Slack</u></a>を使用いたします。<br/>
  ・Zoom, Slack共に、本名またはニックネームご参加いただけます。
    </p>
    <p>
    ・参加登録、お支払いは、以下peatixページにて行っていただきますようお願い申し上げます。<br/>
    ・その他のお問い合わせについては、トップページのお問い合わせ欄よりご連絡いただきますようお願い致します。
    </p>
  </div>

  return(
    <Container fluid>
      <Row>
        <Col xs={12}>
          <h4 className="text-center"><b>「{Lecture1Info.book.name} 」<br/> {Lecture1Info.book.author}&nbsp;著</b></h4>
          <h4 className="text-center">
          <b>講座期間:&nbsp;{Lecture1Info.lecture.lectureStartDate.slice(5,6)}月{Lecture1Info.lecture.lectureStartDate.slice(7,9)}日&nbsp;~&nbsp;
          {Lecture1Info.lecture.lectureEndDate.slice(5,6)}月{Lecture1Info.lecture.lectureEndDate.slice(6,9)}日
          </b>
          </h4>
        </Col>
        <Col xs={12}>
          {content}
        </Col>
        <Col xs={12}>
          <h4 className="text-center">講義スケジュール</h4>
            {schedule}
        </Col>
        <Col xs={12} className="d-flex flex-column align-items-center justify-content-center mt-3">
          <h4 className="text-center">講義概要</h4>
            {lectureDetail}
        </Col>
        <Col xs={12} className="d-flex flex-column align-items-center justify-content-center mt-3">
          <h4 className="text-center">注意事項</h4>
            {disclaimer}
        </Col>
        <Col>
          <div className="buy-button d-flex justify-content-center mt-3">
            <Button variant="dark" size="lg" block>
            <a href="#" className="text-white">参加する<br/>(peatixページに遷移します)</a>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )

}

export default Lecture1
