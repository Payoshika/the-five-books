import React from "react"
import { Link } from "react-router-dom";
import bookImg1 from "../../LecturePage/img/幸福について.jpg"
import bookImg2 from "../../LecturePage/img/知性について.jpg"
import bookImg3 from "../../LecturePage/img/自殺について.jpg"
import bookImg4 from "../../LecturePage/img/メノン.jpg"
import bookImg5 from "../../LecturePage/img/饗宴.jpg"
import bookImg6 from "../../LecturePage/img/国家.jpg"
import bookImg7 from "../../LecturePage/img/プロタゴラス.jpg"
import bookImg8 from "../../LecturePage/img/ソクラテスの弁明クリトン.jpg"
import bookImg9 from "../../LecturePage/img/ゴルギアス.jpg"
import bookImg10 from "../../LecturePage/img/法律.jpg"
import bookImg11 from "../../LecturePage/img/パイドン.jpg"
import bookImg12 from "../../LecturePage/img/パイドロス.jpg"
import bookImg13 from "../../LecturePage/img/二コマコス倫理学.jpg"
import bookImg14 from "../../LecturePage/img/形而上学.jpg"
import bookImg15 from "../../LecturePage/img/政治学.jpg"
import bookImg16 from "../../LecturePage/img/弁論術.jpg"
import bookImg17 from "../../LecturePage/img/アテナイ人の国制.jpg"
import bookImg18 from "../../LecturePage/img/哲学原理.jpg"
import bookImg19 from "../../LecturePage/img/Theaitetos.jpg"
import bookImg20 from "../../LecturePage/img/詩学.jpg"



import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from "react-bootstrap/Carousel"
import Image from 'react-bootstrap/Image'

const LectureLists = () => {
  const content1 =
    <Link to="/coming_lectures" >
      <Image src={bookImg1} width="200" height="280"/>
    </Link>
  const content2 =
  <Link to="/coming_lectures" >
    <Image src={bookImg2} width="200" height="280"/>
  </Link>
  const content3 =
  <Link to="/coming_lectures" >
    <Image src={bookImg3} width="200" height="280"/>
  </Link>
  const content4 =
  <Link to="/coming_lectures" >
    <Image src={bookImg4} width="200" height="280"/>
  </Link>
  const content5 =
  <Link to="/coming_lectures" >
    <Image src={bookImg5} width="200" height="280" />
  </Link>
  const content6 =
  <Link to="/coming_lectures" >
    <Image src={bookImg6} width="200" height="280" />
  </Link>
  const content7 =
  <Link to="/coming_lectures" >
    <Image src={bookImg7} width="200" height="280" />
  </Link>
  const content8 =
  <Link to="/coming_lectures" >
    <Image src={bookImg8} width="200" height="280" />
  </Link>
  const content9 =
  <Link to="/coming_lectures" >
    <Image src={bookImg9} width="200" height="280" />
  </Link>
  const content10 =
  <Link to="/coming_lectures" >
    <Image src={bookImg10} width="200" height="280" />
  </Link>
  const content11 =
  <Link to="/coming_lectures" >
    <Image src={bookImg11} width="200" height="280" />
  </Link>
  const content12 =
  <Link to="/coming_lectures" >
    <Image src={bookImg12} width="200" height="280" />
  </Link>
  const content13 =
  <Link to="/coming_lectures" >
    <Image src={bookImg13} width="200" height="280" />
  </Link>
  const content14 =
  <Link to="/coming_lectures" >
    <Image src={bookImg14} width="200" height="280" />
  </Link>
  const content15 =
  <Link to="/coming_lectures" >
    <Image src={bookImg15} width="200" height="280" />
  </Link>
  const content16 =
  <Link to="/coming_lectures" >
    <Image src={bookImg16} width="200" height="280" />
  </Link>
  const content17 =
  <Link to="/coming_lectures" >
    <Image src={bookImg17} width="200" height="280" />
  </Link>
  const content18 =
  <Link to="/coming_lectures" >
    <Image src={bookImg18} width="200" height="280" />
  </Link>

  const content19 =
  <Link to="/coming_lectures" >
    <Image src={bookImg19} width="200" height="280" />
  </Link>

  const content20 =
  <Link to="/coming_lectures" >
    <Image src={bookImg20} width="200" height="280" />
  </Link>

  const smartPhoneDisplay =
  <Carousel className="smartPhoneDisplay d-md-none">
  <Carousel.Item>
    {content19}
  </Carousel.Item>
  <Carousel.Item>
    {content20}
  </Carousel.Item>
   <Carousel.Item>
     {content4}
   </Carousel.Item>
   <Carousel.Item>
     {content18}
   </Carousel.Item>
   <Carousel.Item>
     {content5}
   </Carousel.Item>
   <Carousel.Item>
     {content6}
   </Carousel.Item>
   <Carousel.Item >
     {content7}
   </Carousel.Item>
   <Carousel.Item >
     {content8}
   </Carousel.Item>
   <Carousel.Item >
     {content9}
   </Carousel.Item>
   <Carousel.Item >
     {content10}
   </Carousel.Item>
   <Carousel.Item >
     {content11}
   </Carousel.Item>
   <Carousel.Item >
     {content12}
   </Carousel.Item>
   <Carousel.Item >
     {content13}
   </Carousel.Item>
   <Carousel.Item >
     {content14}
   </Carousel.Item>
   <Carousel.Item >
     {content15}
   </Carousel.Item>
   <Carousel.Item >
     {content16}
   </Carousel.Item>
   <Carousel.Item >
     {content17}
   </Carousel.Item>
   <Carousel.Item>
     {content1}
   </Carousel.Item>
   <Carousel.Item >
     {content2}
   </Carousel.Item>
   <Carousel.Item >
     {content3}
   </Carousel.Item>
  </Carousel>

  const desktopDisplay =
    <div className="desktopDisplay d-none d-md-block">
      {content19}
      {content20}
      {content18}
      {content4}
      {content5}
      {content6}
      {content7}
      {content8}
      {content9}
      {content10}
      {content11}
      {content12}
      {content13}
      {content14}
      {content15}
      {content16}
      {content17}
      {content1}
      {content2}
      {content3}
    </div>

  return(
    <Container fluid>
      <Row>
        <Col className="bookLists d-flex flex-column align-items-center justify-content-center">
          <h4 className="mb-3">今後開講予定の古典</h4>
          {smartPhoneDisplay}
          {desktopDisplay}
        </Col>
      </Row>
    </Container>
  )
}


export default LectureLists
