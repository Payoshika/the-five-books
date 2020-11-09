import React from "react"
import {Register} from "./index.js";
import {Link} from "react-router-dom"
import Lecture1Info from "../../LecturePage/Lecture1Info"
import Lecture2Info from "../../LecturePage/Lecture2Info"
import Lecture3Info from "../../LecturePage/Lecture3Info"
import Lecture4Info from "../../LecturePage/Lecture4Info"
import Lecture5Info from "../../LecturePage/Lecture5Info"
import bookImg from "../../LecturePage/img/読書について.jpg"
import bookImg2 from "../../LecturePage/img/Theaitetos.jpg"
import bookImg3 from "../../LecturePage/img/taxidancehall.jpg"
import bookImg4 from "../../LecturePage/img/精神のエネルギー.jpg"
import bookImg5 from "../../LecturePage/img/詩学.jpg"
import lecturer_yamano_hiroki from "../../LecturePage/img/lecturer_yamano_hiroki.jpg"
import lecturer_seki_shumpei from "../../LecturePage/img/lecturer_seki_shumpei.jpg"
import lecturer_hamada_tomoro from "../../LecturePage/img/lecturer_hamada_tomoro.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Carousel from "react-bootstrap/Carousel"

const Banner = () => {
  const message =
  <div className="banner-message d-flex flex-column align-items-center justify-content-center flex-nowrap">
    <h2>古典の読書を<br/>より身近に、<br/>より豊かに。</h2>
    <p>多様な分野の古典を、専門家のオンライン講義を受けながら、30人の読者と共に2~4週間かけてじっくりと読む、"おそい" 読書体験。</p>
    <p>一人ではなかなか手が出ない、関心はあったのに難しくて途中で止めてしまった、一通り読んだもののあまり腑に落ちていない、そんな本はないでしょうか。</p>
    <p>講師から学び、他の読者と一緒に考えながら読む。The Five Booksの講義を通じて、1冊の古典を自分なりに消化してみませんか。</p>
  </div>

  const content1 =
  <Link to="/lecture/1">
    <div className="top-lecture d-flex flex-column flex-xl-row justify-content-center align-items-center">
      <div className="book-img-container d-flex align-contents-center">
        <Image src={bookImg} fluid />
      </div>
      <div className="lecturer-info d-flex flex-column flex-xl-row justify-content-center align-items-center flex-nowrap">
        <div className="lecturer-info order-xl-1">
            <p>講師: {Lecture1Info["lecturer"]["name"]}</p>
            <p>専門: {Lecture1Info["lecturer"]["expertise"]}</p>
            <p>所属: {Lecture1Info["lecturer"]["degree"]}</p>
            <p>参加人数: 最大30名</p>
            <p><b>開講期間: 9月5日~9月26日</b></p>
        </div>
        <div className="lecturer-photo order-xl-0">
          <Image src={lecturer_yamano_hiroki} fluid roundedCircle/>
        </div>
      </div>
    </div>
  </Link>

  const content2 =
  <Link to="/lecture/2">
    <div className="top-lecture d-flex flex-column flex-xl-row justify-content-center align-items-center">
      <div className="book-img-container d-flex align-contents-center">
        <Image src={bookImg2} fluid />
      </div>
      <div className="lecturer-info d-flex flex-column flex-xl-row justify-content-center align-items-center flex-nowrap">
        <div className="lecturer-info order-xl-1">
          <p>講師: {Lecture2Info["lecturer"]["name"]}</p>
          <p>専門: {Lecture2Info["lecturer"]["expertise"]}</p>
          <p>所属: {Lecture2Info["lecturer"]["affiliation"]}</p>
          <p>参加人数: 最大30名</p>
          <p><b>開講期間: 10月10日~11月7日</b></p>
        </div>
        <div className="lecturer-photo order-xl-0">
          <Image src={lecturer_yamano_hiroki} fluid roundedCircle/>
        </div>
      </div>
    </div>
  </Link>

  const content3 =
  <Link to="/lecture/3">
    <div className="top-lecture d-flex flex-column flex-xl-row justify-content-center align-items-center">
      <div className="book-img-container d-flex align-contents-center">
        <Image src={bookImg3} fluid />
      </div>
      <div className="lecturer-info d-flex flex-column flex-xl-row justify-content-center align-items-center flex-nowrap">
        <div className="lecturer-info order-xl-1">
          <p>講師: {Lecture3Info["lecturer"]["name"]}</p>
          <p>専門: {Lecture3Info["lecturer"]["expertise"]}</p>
          <p>所属: {Lecture3Info["lecturer"]["affiliation"]}</p>
          <p>参加人数: 最大30名</p>
          <p><b>開講期間: 11月4日~11月25日</b></p>
        </div>
        <div className="lecturer-photo order-xl-0">
          <Image src={lecturer_seki_shumpei} fluid roundedCircle/>
        </div>
      </div>
    </div>
  </Link>

  const content4 =
  <Link to="/lecture/4">
    <div className="top-lecture d-flex flex-column flex-xl-row justify-content-center align-items-center">
      <div className="book-img-container d-flex align-contents-center">
        <Image src={bookImg4} fluid />
      </div>
      <div className="lecturer-info d-flex flex-column flex-xl-row justify-content-center align-items-center flex-nowrap">
        <div className="lecturer-info order-xl-1">
          <p>講師: {Lecture4Info["lecturer"]["name"]}</p>
          <p>専門: {Lecture4Info["lecturer"]["expertise"]}</p>
          <p>所属: {Lecture4Info["lecturer"]["affiliation"]}</p>
          <p>参加人数: 最大30名</p>
          <p><b>開講期間: 11月21日~12月21日</b></p>
        </div>
        <div className="lecturer-photo order-xl-0">
          <Image src={lecturer_hamada_tomoro} fluid roundedCircle/>
        </div>
      </div>
    </div>
  </Link>


    const content5 =
    <Link to="/lecture/5">
      <div className="top-lecture d-flex flex-column flex-xl-row justify-content-center align-items-center">
        <div className="book-img-container d-flex align-contents-center">
          <Image src={bookImg5} fluid />
        </div>
        <div className="lecturer-info d-flex flex-column flex-xl-row justify-content-center align-items-center flex-nowrap">
          <div className="lecturer-info order-xl-1">
            <p>講師: {Lecture5Info["lecturer"]["name"]}</p>
            <p>専門: {Lecture5Info["lecturer"]["expertise"]}</p>
            <p>所属: {Lecture5Info["lecturer"]["affiliation"]}</p>
            <p>参加人数: 最大30名</p>
            <p><b>開講期間: 11月29日~12月20日</b></p>
          </div>
          <div className="lecturer-photo order-xl-0">
            <Image src={lecturer_yamano_hiroki} fluid roundedCircle/>
          </div>
        </div>
      </div>
    </Link>


  return(
    <Container fluid>
      <Row>
        <Col xl={6}
          className="banner-margin d-flex justify-content-center mb-5">
          {message}
        </Col>
        <Col xl={6} className="d-flex flex-column justify-content-center align-items-center">
          <Carousel interval={5000}>
           <Carousel.Item>
             <h4 className="banner-margin text-center"><b>開講中の講座</b></h4>
             {content3}
           </Carousel.Item>
           <Carousel.Item>
             <h4 className="banner-margin text-center"><b>11月開講予定の講座</b></h4>
             {content4}
           </Carousel.Item>
           <Carousel.Item>
             <h4 className="banner-margin text-center"><b>11月開講予定の講座</b></h4>
             {content5}
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
