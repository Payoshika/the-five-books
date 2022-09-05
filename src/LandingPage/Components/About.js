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
      <p>大学卒業後スタートアップで海外市場開拓・営業に従事し、インド・フィリピンに赴任。その後、国際協力機構(JICA)で、アジア・東欧・中米の低所得者向け家計管理・金融サービス利用向上プロジェクトに携わる。<br/>2020年8月よりThe Five Booksを立ち上げる。好きな書籍は『生物から見た世界』(ユクスキュル著)、『道徳感情論』(アダム・スミス著)、『人倫の形而上学の基礎づけ』(イマニュエル・カント著)。
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
