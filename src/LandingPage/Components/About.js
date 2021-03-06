import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import founder_photo from "./img/founder_photo.jpg"

const About = () => {
  const content =
  <div className="about d-flex align-contents-center justify-content-center ">
    <div className="leader-info d-none d-md-flex flex-column align-items-center justify-content-center">
      <Image src={founder_photo}
        width="200" height="200" roundedCircle fluid alt="profile-photo"/>
      <h5>Founder：大石 航平</h5>
    </div>
    <div className="leader-info d-flex flex-column align-items-center justify-content-center">
      <Image src={founder_photo}
        width="200" height="200" className="d-block d-md-none" fluid roundedCircle alt="profile-photo"/>
      <h5 className="d-md-none">Founder：大石 航平</h5>
      <p>大学卒業後スタートアップで海外市場開拓・営業に従事し、インド・フィリピンに赴任。その後、国際協力機構(JICA)で国際協力に携わり、アジア・東欧・中米の低所得者向け家計管理・金融サービス利用向上プロジェクトを実施。<br/>JICAを退職し、香港のプログラミングコース「Altcademy」を修了、The Five Booksを立ち上げる。愛読する古典は『生物から見た世界』、『道徳感情論』。
      </p>
    </div>
  </div>

  return(
    <Container fluid>　
      <Row>
        <Col>
          <h4 className="text-center"><u>The Five Booksについて</u></h4>
          {content}
        </Col>
      </Row>
    </Container>
  )
}


export default About
