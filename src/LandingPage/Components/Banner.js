import React from "react"
import {Register} from "./index.js";
import Lecture1Info from "../../LecturePage/Lecture1Info"
import Lecture2Info from "../../LecturePage/Lecture2Info"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Carousel from "react-bootstrap/Carousel"

const Banner = () => {
  const message =
  <div className="banner-message d-flex flex-column align-items-center justify-content-center flex-nowrap">
    <h2 className="te">古典の読書をより容易に、<br/>より豊かな体験に。</h2>
    <p>各分野の古典書籍について、週に1度、専門家である講師のLive講義で、著作の要点や背景を学ぶ新しいオンライン読書体験</p>
    <p>関心はあったのに「難しくて分からない」と途中で止めてしまった古典、読後もモヤモヤした理解を残したままになっている古典を、講師による分かりやすい講義と読者同士の議論を通じ、もう一度読み直してみませんか。</p>
  </div>

  const content1 =
  <div className="top-lecture d-flex justify-content-center align-items-center flex-wrap">
    <div className="book-img-container">
      <Image src={Lecture1Info.lecturer.lecturerPhoto} fluid />
    </div>
    <div className="lecturer-info d-flex justify-content-center align-items-center flex-nowrap">
      <div className="lecturer-photo">
        <Image src={Lecture1Info.lecturer.lecturerPhoto} fluid roundedCircle/>
      </div>
      <div className="lecturer-info">
          <p>講師: {Lecture1Info["lecturer"]["name"]}</p>
          <p>専門分野: {Lecture1Info["lecturer"]["expertise"]}</p>
          <p>学位: {Lecture1Info["lecturer"]["degree"]}</p>
          <p>所属機関: {Lecture1Info["lecturer"]["affiliation"]}</p>
          <p>講師プロフィール： <a href={Lecture1Info["lecturer"]["profile-link"]}>reseachmap Profile</a></p>
          <p>講義書籍: {Lecture1Info["lecturer"]["lecturableBooks"].join(", ")}</p>
      </div>
    </div>
  </div>

  const content2 =
  <div className="top-lecture d-flex justify-content-center align-items-center flex-wrap">
    <div className="book-img-container">
      <Image src={Lecture2Info.book.image} fluid />
    </div>
    <div className="lecturer-info d-flex justify-content-center align-items-center flex-nowrap">
      <div className="lecturer-photo">
        <Image src={Lecture2Info.lecturer.lecturerPhoto} fluid roundedCircle/>
      </div>
      <div className="lecturer-info">
          <p>講師: {Lecture2Info["lecturer"]["name"]}</p>
          <p>専門分野: {Lecture2Info["lecturer"]["expertise"]}</p>
          <p>学位: {Lecture2Info["lecturer"]["degree"]}</p>
          <p>所属機関: {Lecture2Info["lecturer"]["affiliation"]}</p>
          <p>講師プロフィール： <a href={Lecture2Info["lecturer"]["profile-link"]}>reseachmap Profile</a></p>
          <p>講義書籍: {Lecture2Info["lecturer"]["lecturableBooks"].join(", ")}</p>
      </div>
    </div>
  </div>

  return(
    <Container fluid>
      <Row>
        <Col md={6} className="d-flex justify-content-center">
          {message}
        </Col>
        <Col md={6}>
          <Carousel className="smart-phone-view d-flex flex-column align-items-center justify-content-center flex-nowrap d-md-none">
           <Carousel.Item>
             {content1}
           </Carousel.Item>
           <Carousel.Item>
             {content2}
           </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col>
          <Register />
        </Col>
      </Row>
    </Container>
  )
}


export default Banner
