import React, {useState} from "react"
import {LectureProfile, MyCourse} from "./index"
import Database from "./Database"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from "axios"

const LectureMyPage = (props) =>{
  const {name, expertise, affiliation, profileLink, lecturerPhoto, lectures} = Database
  const getFormatDate = (value) => {
   return `${value.getFullYear()}${('0' + (value.getMonth() + 1)).slice(-2)}${('0' + value.getDate()).slice(-2)}`;
   }

  const now_taking =
  <div className="w-100 d-flex flex-column justify-content-center align-items-start">
    <div className="d-flex justify-content-center align-items-center my-3">
      <Image className="mr-3"src={"https://via.placeholder.com/150"} width="130" height="180"/>
      <div>
        <p>書籍：『読書について』</p>
        <p>著者：ショーペンハウエル</p>
        <p>期間：20年9月5日 ~ 20年9月26日</p>
        <p>講師：山野弘樹(哲学者)</p>
      </div>
    </div>
    <div className="d-flex justify-content-center align-items-center my-3">
      <Image className="mr-3"src={"https://via.placeholder.com/150"} width="130" height="180"/>
      <div>
        <p>書籍：『読書について』</p>
        <p>著者：ショーペンハウエル</p>
        <p>期間：20年9月5日 ~ 20年9月26日</p>
        <p>講師：山野弘樹(哲学者)</p>
      </div>
    </div>
    <div className="d-flex justify-content-center align-items-center my-3">
      <Image className="mr-3"src={"https://via.placeholder.com/150"} width="130" height="180"/>
      <div>
        <p>書籍：『読書について』</p>
        <p>著者：ショーペンハウエル</p>
        <p>期間：20年9月5日 ~ 20年9月26日</p>
        <p>講師：山野弘樹(哲学者)</p>
      </div>
    </div>
  </div>

  return(
    <Container fluid>
      <Row>
        <Col sm={12}>
          <h4 className="text-center">Profile</h4>
          <LectureProfile
            name = {name}
            affiliation = {affiliation}
            expertise = {expertise}
            profileLink = {profileLink}
            lecturerPhoto = {lecturerPhoto}
          />
        </Col>
        <div className="w-100 my-3">
        </div>
        <Col sm={12}>
          <MyCourse
            lectures = {lectures}
            getFormatDate = {getFormatDate}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default LectureMyPage
