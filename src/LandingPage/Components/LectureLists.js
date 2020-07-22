import React from "react"
import { Link } from "react-router-dom";
import {Lecture1, Lecture2} from "../../LecturePage/index"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from "react-bootstrap/Carousel"

const LectureLists = () => {

  const smartPhoneDisplay =
  <Carousel className="smart-phone-view d-block d-md-none">
   <Carousel.Item>
     <Lecture1 />
   </Carousel.Item>
   <Carousel.Item>
     <Lecture2 />
   </Carousel.Item>
  </Carousel>

  const desktopDisplay =
    <div className="d-none d-md-flex flex-nowrap flex-start">
      <Lecture1 />
      <Lecture2 />
    </div>

  return(
    <Container>
      <Row>
        <Col>
          {smartPhoneDisplay}
          {desktopDisplay}
        </Col>
      </Row>
    </Container>
  )
}


export default LectureLists
