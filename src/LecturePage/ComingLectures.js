import React from "react"
import {Link} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import {LecturesInfo} from "./index.js"

const ComingLectures = () => {

  const getFormatDate = (value) => {
   return `${value.getFullYear()}${('0' + (value.getMonth() + 1)).slice(-2)}${('0' + value.getDate()).slice(-2)}`;
 }

  const allContent =
  <Col>
    <h4 className="text-center">開講予定の講座</h4>
    <div className="d-flex flex-column justify-content-center my-3">
      {LecturesInfo.map((eachLecture, index) => {
        return (
          (eachLecture.lecture.lectureStartDate > new Date())?
          <Link to= {`/lecture/${index+1}`}>
            <div className="coming-lectures top-lecture d-flex flex-column flex-md-row justify-content-center align-items-center">
              <div className="book-img-container d-flex  justify-content-center align-contents-center">
                <Image src={require(`${eachLecture.book.image}`)} fluid />
              </div>
              <div className="lecturer-info d-flex flex-row justify-content-center align-items-center flex-nowrap">
                <div className="lecturer-info">
                    <p>書籍：{eachLecture.book.name}</p>
                    <p>著者：{eachLecture.book.author}</p>
                    <p>講師：{eachLecture.lecturer.name}( {eachLecture.lecturer.affiliation})</p>
                    <p><b>開講期間：&nbsp;{getFormatDate(eachLecture.lecture.lectureStartDate).slice(4,6)}月{getFormatDate(eachLecture.lecture.lectureStartDate).slice(6,9)}日&nbsp;~&nbsp;
                    {getFormatDate(eachLecture.lecture.lectureEndDate).slice(4,6)}月{getFormatDate(eachLecture.lecture.lectureEndDate).slice(6,9)}日</b></p>
                </div>
              </div>
            </div>
          </Link>
          :""
        )
      }
      )}
      <hr/>
    </div>
    <h4 className="text-center">開講中の講座</h4>
    <div className="d-flex flex-column justify-content-center my-3">
      {LecturesInfo.map((eachLecture, index) => {
        return (
          (eachLecture.lecture.lectureStartDate <= new Date() && eachLecture.lecture.lectureEndDate >= new Date())?
          <Link to= {`/lecture/${index+1}`}>
            <div className="coming-lectures top-lecture d-flex flex-column flex-md-row justify-content-center align-items-center">
              <div className="book-img-container d-flex  justify-content-center align-contents-center">
                <Image src={require(`${eachLecture.book.image}`)} fluid />
              </div>
              <div className="lecturer-info d-flex flex-row justify-content-center align-items-center flex-nowrap">
                <div className="lecturer-info">
                    <p>書籍：{eachLecture.book.name}</p>
                    <p>著者：{eachLecture.book.author}</p>
                    <p>講師：{eachLecture.lecturer.name}( {eachLecture.lecturer.affiliation})</p>
                    <p><b>開講期間：&nbsp;{getFormatDate(eachLecture.lecture.lectureStartDate).slice(4,6)}月{getFormatDate(eachLecture.lecture.lectureStartDate).slice(6,9)}日&nbsp;~&nbsp;
                    {getFormatDate(eachLecture.lecture.lectureEndDate).slice(4,6)}月{getFormatDate(eachLecture.lecture.lectureEndDate).slice(6,9)}日</b></p>
                </div>
              </div>
            </div>
          </Link>
          :""
        )
      }
      )}
      <hr/>
    </div>
    <h4 className="text-center">過去の講座</h4>
    <div className="d-flex flex-column justify-content-center">
      {LecturesInfo.map((eachLecture, index) => {
        return (
          (eachLecture.lecture.lectureEndDate < new Date())?
          <Link to= {`/lecture/${index+1}`}>
            <div className="coming-lectures top-lecture d-flex flex-column flex-md-row justify-content-center align-items-center">
              <div className="lecturer-info d-flex flex-row justify-content-center align-items-center flex-nowrap">
                <div className="lecturer-info">
                    <p>書籍：{eachLecture.book.name}</p>
                    <p>著者：{eachLecture.book.author}</p>
                    <p>講師：{eachLecture.lecturer.name}( {eachLecture.lecturer.affiliation})</p>
                    <p><b>開講期間：&nbsp;{getFormatDate(eachLecture.lecture.lectureStartDate).slice(4,6)}月{getFormatDate(eachLecture.lecture.lectureStartDate).slice(6,9)}日&nbsp;~&nbsp;
                    {getFormatDate(eachLecture.lecture.lectureEndDate).slice(4,6)}月{getFormatDate(eachLecture.lecture.lectureEndDate).slice(6,9)}日</b></p>
                </div>
              </div>
            </div>
          </Link>
          :
          ""
        )
      }
      )}
    </div>
  </Col>

  return(
    <Container fluid>
      <Row>
        {allContent}
      </Row>
    </Container>
  )
}


export default ComingLectures
