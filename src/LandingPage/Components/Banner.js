import React from "react"
import {Register} from "./index.js";
import {Link} from "react-router-dom"
import {LecturesInfo} from "../../LecturePage/index.js"
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

  const getFormatDate = (value) => {
   return `${value.getFullYear()}${('0' + (value.getMonth() + 1)).slice(-2)}${('0' + value.getDate()).slice(-2)}`;
 }

    const allContent =
      LecturesInfo.map((eachLecture, index) => {
          return (
            (eachLecture.lecture.lectureStartDate > new Date())?
            <Carousel.Item>
              <h4 className="banner-margin text-center"><b>開講予定の講座</b></h4>
              <Link to= {`/lecture/${index+1}`}>
                <div className="top-lecture d-flex flex-column flex-xl-row justify-content-center align-items-center">
                  <div className="book-img-container d-flex align-contents-center">
                    <Image src={require(`../../LecturePage${eachLecture.book.image.slice(1)}`)}  fluid />
                  </div>
                  <div className="lecturer-info d-flex flex-column flex-xl-row justify-content-center align-items-center flex-nowrap">
                    <div className="lecturer-info order-xl-1">
                      <p>講師: {eachLecture.lecturer.name}</p>
                      <p>専門: {eachLecture.lecturer.expertise}</p>
                      <p>所属: {eachLecture.lecturer.affiliation}</p>
                      <p>参加人数: 最大30名</p>
                      <p><b>開講期間：&nbsp;{getFormatDate(eachLecture.lecture.lectureStartDate).slice(4,6)}月{getFormatDate(eachLecture.lecture.lectureStartDate).slice(6,9)}日&nbsp;~&nbsp;
                      {getFormatDate(eachLecture.lecture.lectureEndDate).slice(4,6)}月{getFormatDate(eachLecture.lecture.lectureEndDate).slice(6,9)}日</b></p>
                    </div>
                    <div className="lecturer-photo order-xl-0">
                      <Image src={require(`../../LecturePage${eachLecture.lecturer.lecturerPhoto.slice(1)}`)} fluid roundedCircle/>
                    </div>
                  </div>
                </div>
              </Link>
            </Carousel.Item>
            : ""
          )
        }
        )


  return(
    <Container fluid>
      <Row>
        <Col xl={6}
          className="banner-margin d-flex justify-content-center mb-5">
          {message}
        </Col>
        <Col xl={6} className="d-flex flex-column justify-content-center align-items-center">
          <Carousel interval={5000}>
            {allContent}
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
