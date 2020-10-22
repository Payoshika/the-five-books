import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import lecture from "../../../LandingPage/Components/img/lecture.png"
import femaleLecturer from "../img/femaleLecturer.png"
import teachingExperience from "../img/teachingExperience.png"

const Requirements = () => {
  const content =
    <div id="" className="d-flex flex-column flex-md-row align-items-center justify-content-center">
      <div className="requirements d-flex flex-column justify-content-center align-items-center my-3 mx-5">
        <Image className="description-img" src={femaleLecturer} width="100" height="100" rounded/>
        <div className="requirements-detail d-flex flex-column justify-content-start align-items-center">
          <h4><b>研究者である</b></h4>
          <p>博士課程の研究者、大学講師・教員、学外で研究活動を行う方など
          </p>
        </div>
      </div>
      <div className="requirements d-flex flex-column justify-content-center align-items-center my-3 mx-5">
        <Image className="description-img" src={teachingExperience} width="100" height="100" rounded/>
        <div className="requirements-detail d-flex flex-column justify-content-start align-items-center">
          <h4><b>講義経験を持つ</b></h4>
          <p>学内・学外での講義・講演の経験をお持ちの方。(高校での出張講義経験やオンラインでのイベントへの登壇なども含みます。)
          </p>
        </div>
      </div>
      <div className="requirements d-flex flex-column justify-content-center align-items-center my-3 mx-5">
        <Image className="description-img" src={lecture} width="100" height="100" rounded/>
        <div className="requirements-detail d-flex flex-column justify-content-start align-items-center my-3">
          <h4><b>機材と環境</b></h4>
          <p>PC、ウェブカメラ、マイクなどのデバイス及び通信環境を自身で用意でき、Zoom、Slackなどのサービスを利用したオンライン講義の運営に支障がない方。
          </p>
        </div>
      </div>
    </div>

  return(
    <Container fluid>
      <Row>
        <Col>
          <h4 className="text-center"><u>講師条件</u></h4>
          {content}
          <hr />
        </Col>
      </Row>
    </Container>
  )
}


export default Requirements
