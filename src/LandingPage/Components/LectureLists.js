import React from "react"
import { Link } from "react-router-dom";
import {Lecture1, Lecture2} from "../../LecturePage/index"
import Lecture1Info from "../../LecturePage/Lecture1Info"
import Lecture2Info from "../../LecturePage/Lecture2Info"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from "react-bootstrap/Carousel"
import Image from 'react-bootstrap/Image'

const LectureLists = () => {

  const content1 =
  <Link to="/lecture/1">
    <Image src={Lecture1Info.lecturer.lecturerPhoto} fluid />
  </Link>
  const content2 =
  <Link to="/lecture/2">
    <Image src={Lecture1Info.lecturer.lecturerPhoto} fluid />
  </Link>
  const content3 =
  <Link to="/lecture/2">
    <Image src={Lecture1Info.lecturer.lecturerPhoto} fluid />
  </Link>
  const content4 =
  <Link to="/lecture/2">
    <Image src={Lecture1Info.lecturer.lecturerPhoto} fluid />
  </Link>
  const content5 =
  <Link to="/lecture/2">
    <Image src={Lecture1Info.lecturer.lecturerPhoto} fluid />
  </Link>
  const content6 =
  <Link to="/lecture/2">
    <Image src={Lecture1Info.lecturer.lecturerPhoto} fluid />
  </Link>
  const content7 =
  <Link to="/lecture/2">
    <Image src={Lecture1Info.lecturer.lecturerPhoto} fluid />
  </Link>


  const smartPhoneDisplay =
  <Carousel className="smart-phone-view d-flex flex-column align-items-center justify-content-center flex-nowrap d-md-none">
   <Carousel.Item>
     {content1}
   </Carousel.Item>
   <Carousel.Item>
     {content2}
   </Carousel.Item>
   <Carousel.Item>
     {content3}
   </Carousel.Item>
   <Carousel.Item>
     {content4}
   </Carousel.Item>
   <Carousel.Item>
     {content5}
   </Carousel.Item>
   <Carousel.Item>
     {content6}
   </Carousel.Item>
   <Carousel.Item>
     {content7}
   </Carousel.Item>
  </Carousel>

  const desktopDisplay =
    <div className="desktopDisplay d-none d-md-flex flex-nowrap flex-start">
      {content1}
      {content2}
      {content3}
      {content4}
      {content5}
      {content6}
      {content7}
    </div>

  return(
    <Container fluid>
      <Row>
        <Col>
          <h4 className="text-center">開講予定の古典</h4>
          {smartPhoneDisplay}
          {desktopDisplay}
        </Col>
      </Row>
    </Container>
  )
}


export default LectureLists
