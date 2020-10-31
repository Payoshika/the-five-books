import React from "react"
import {Link} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import bookImg1 from "./img/読書について.jpg"
import bookImg2 from "./img/Theaitetos.jpg"
import bookImg3 from "./img/taxidancehall.jpg"
import bookImg4 from "./img/精神のエネルギー.jpg"
import {Lecture1Info, Lecture2Info, Lecture3Info, Lecture4Info} from "./index.js"

const ComingLectures = () => {

  const content1 =
    <Link to="/lecture/1">
      <div className="coming-lectures top-lecture d-flex flex-column flex-md-row justify-content-center align-items-center">
        <div className="book-img-container d-flex  justify-content-center align-contents-center">
          <Image src={bookImg1} fluid />
        </div>
        <div className="lecturer-info d-flex flex-row justify-content-center align-items-center flex-nowrap">
          <div className="lecturer-info">
              <p>書籍：{Lecture1Info["book"]["name"]}</p>
              <p>著者：{Lecture1Info["book"]["author"]}</p>
              <p>講師：{Lecture1Info["lecturer"]["name"]}( {Lecture1Info["lecturer"]["affiliation"]})</p>
              <p><b>開講期間：&nbsp;{Lecture1Info.lecture.lectureStartDate.slice(4,6)}月{Lecture1Info.lecture.lectureStartDate.slice(6,9)}日&nbsp;~&nbsp;
              {Lecture1Info.lecture.lectureEndDate.slice(4,6)}月{Lecture1Info.lecture.lectureEndDate.slice(6,9)}日</b></p>
          </div>
        </div>
      </div>
    </Link>

    const content2 =
      <Link to="/lecture/2">
        <div className="coming-lectures top-lecture d-flex flex-column flex-md-row justify-content-center align-items-center">
          <div className="book-img-container d-flex  justify-content-center align-contents-center">
            <Image src={bookImg2} fluid />
          </div>
          <div className="lecturer-info d-flex flex-row justify-content-center align-items-center flex-nowrap">
            <div className="lecturer-info">
                <p>書籍：{Lecture2Info["book"]["name"]}</p>
                <p>著者：{Lecture2Info["book"]["author"]}</p>
                <p>講師：{Lecture2Info["lecturer"]["name"]}( {Lecture2Info["lecturer"]["affiliation"]})</p>
                <p><b>開講期間：&nbsp;{Lecture2Info.lecture.lectureStartDate.slice(4,6)}月{Lecture2Info.lecture.lectureStartDate.slice(6,9)}日&nbsp;~&nbsp;
                {Lecture2Info.lecture.lectureEndDate.slice(4,6)}月{Lecture2Info.lecture.lectureEndDate.slice(6,9)}日</b></p>
            </div>
          </div>
        </div>
      </Link>

      const content3 =
        <Link to="/lecture/3">
          <div className="coming-lectures top-lecture d-flex flex-column flex-md-row justify-content-center align-items-center">
            <div className="book-img-container d-flex  justify-content-center align-contents-center">
              <Image src={bookImg3} fluid />
            </div>
            <div className="lecturer-info d-flex flex-row justify-content-center align-items-center flex-nowrap">
              <div className="lecturer-info">
                  <p>書籍：{Lecture3Info["book"]["name"]}</p>
                  <p>著者：{Lecture3Info["book"]["author"]}</p>
                  <p>講師：{Lecture3Info["lecturer"]["name"]}( {Lecture3Info["lecturer"]["affiliation"]})</p>
                  <p><b>開講期間：&nbsp;{Lecture3Info.lecture.lectureStartDate.slice(4,6)}月{Lecture3Info.lecture.lectureStartDate.slice(6,9)}日&nbsp;~&nbsp;
                  {Lecture3Info.lecture.lectureEndDate.slice(4,6)}月{Lecture3Info.lecture.lectureEndDate.slice(6,9)}日</b></p>
              </div>
            </div>
          </div>
        </Link>

      const content4 =
        <Link to="/lecture/4">
          <div className="coming-lectures top-lecture d-flex flex-column flex-md-row justify-content-center align-items-center">
            <div className="book-img-container d-flex justify-content-center align-contents-center">
              <Image src={bookImg4} fluid />
            </div>
            <div className="lecturer-info d-flex flex-row justify-content-center align-items-center flex-nowrap">
              <div className="lecturer-info">
                  <p>書籍：{Lecture4Info["book"]["name"]}</p>
                  <p>著者：{Lecture4Info["book"]["author"]}</p>
                  <p>講師：{Lecture4Info["lecturer"]["name"]}( {Lecture4Info["lecturer"]["affiliation"]})</p>
                  <p><b>開講期間：&nbsp;{Lecture4Info.lecture.lectureStartDate.slice(4,6)}月{Lecture4Info.lecture.lectureStartDate.slice(6,9)}日&nbsp;~&nbsp;
                  {Lecture4Info.lecture.lectureEndDate.slice(4,6)}月{Lecture4Info.lecture.lectureEndDate.slice(6,9)}日</b></p>
              </div>
            </div>
          </div>
        </Link>

  return(
    <Container fluid>
      <Row>
        <Col>
          <h4 className="text-center">開講予定の講座</h4>
          <div className="d-flex flex-column justify-content-center my-3">
            {content3}
            {content4}
            <hr/>
          </div>
          <h4 className="text-center">開講中の講座</h4>
          <div className="d-flex flex-column justify-content-center my-3">
            {content2}
            <hr/>
          </div>
          <h4 className="text-center">過去の講座</h4>
          <div className="d-flex flex-column justify-content-center">
            {content1}
          </div>
        </Col>
      </Row>
    </Container>
  )
}


export default ComingLectures
