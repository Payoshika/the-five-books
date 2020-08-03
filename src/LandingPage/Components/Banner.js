import React from "react"
import {Register} from "./index.js";
import {Link} from "react-router-dom"
import Lecture1Info from "../../LecturePage/Lecture1Info"
import bookImg from "../../LecturePage/img/読書について.jpg"
import bookImg2 from "../../LecturePage/img/Theaitetos.jpg"
import lecturer_yamano_hiroki from "../../LecturePage/img/lecturer_yamano_hiroki.jpg"
import Lecture2Info from "../../LecturePage/Lecture2Info"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Carousel from "react-bootstrap/Carousel"

const Banner = () => {
  const message =
  <div className="banner-message d-flex flex-column align-items-center justify-content-center flex-nowrap">
    <h2>古典の読書を容易に、<br/>より豊かな体験に。</h2>
    <p>様々な分野の古典作品を、2~3週間かけて専門家のライブ講義を受けながらじっくりと学ぶ、"おそい" 読書体験。</p>
    <p>関心はあったのに難しくて途中で止めてしまった、一通り読んだものの曖昧な理解に留まっている、何度も読み返す程気に入っているが周りにはなかなか理解者がいない。そんな本はないでしょうか。</p>
    <p>The Five Booksは、古典について &nbsp;1)&nbsp;深く理解する、2)&nbsp;自分の言葉にする、3)&nbsp;他者と対話する、ことを通して読書の体験をより豊かにするサービスです。</p>
  </div>

  const content1 =
  <Link to="/lecture/1">
    <div className="top-lecture d-flex flex-column flex-lg-row justify-content-center align-items-center">
      <div className="book-img-container d-flex align-contents-center">
        <Image src={bookImg} fluid />
      </div>
      <div className="lecturer-info d-flex flex-column flex-md-row justify-content-center align-items-center flex-nowrap">
        <div className="lecturer-info order-md-1">
            <p>講師: {Lecture1Info["lecturer"]["name"]}</p>
            <p>専門: {Lecture1Info["lecturer"]["expertise"]}</p>
            <p>学位: {Lecture1Info["lecturer"]["degree"]}</p>
            <p>所属: {Lecture1Info["lecturer"]["affiliation"]}</p>
            <p>参加人数: 最大30名</p>
            <p><b>受講期間: 9月5日~9月26日</b></p>
        </div>
        <div className="lecturer-photo order-md-0">
          <Image src={lecturer_yamano_hiroki} fluid roundedCircle/>
        </div>
      </div>
    </div>
  </Link>

  const content2 =
  <Link to="/lecture/2">
    <div className="top-lecture d-flex flex-column flex-lg-row justify-content-center align-items-center">
      <div className="book-img-container d-flex align-contents-center">
        <Image src={bookImg2} fluid />
      </div>
      <div className="lecturer-info d-flex flex-column flex-md-row justify-content-center align-items-center flex-nowrap">
        <div className="lecturer-info order-md-1">
          <p>講師: {Lecture2Info["lecturer"]["name"]}</p>
          <p>専門: {Lecture2Info["lecturer"]["expertise"]}</p>
          <p>学位: {Lecture2Info["lecturer"]["degree"]}</p>
          <p>所属: {Lecture2Info["lecturer"]["affiliation"]}</p>
          <p>参加人数: 最大25名</p>
          <p><b>開講期間: 10月初旬~</b></p>
        </div>
        <div className="lecturer-photo order-md-0">
          <Image src={lecturer_yamano_hiroki} fluid roundedCircle/>
        </div>
      </div>
    </div>
  </Link>

  return(
    <Container fluid>
      <Row>
        <Col lg={6}
          className="banner-margin d-flex justify-content-center mb-5">
          {message}
        </Col>
        <Col lg={6} className="d-flex flex-column justify-content-center align-items-center">
          <Carousel>
           <Carousel.Item>
             <h4 className="banner-margin text-center">9月開講予定の古典</h4>
             {content1}
           </Carousel.Item>
           <Carousel.Item>
             <h4 className="banner-margin text-center">10月開講予定の古典</h4>
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
