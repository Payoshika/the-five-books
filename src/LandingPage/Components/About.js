import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import leaderphoto from "./img/leaderphoto.jpg"

const About = () => {
  const content =
  <div className="about d-flex align-contents-center justify-content-center ">
    <div className="leader-info d-none d-md-flex flex-column align-items-center justify-content-center">
      <Image src={leaderphoto} roundedCircle fluid alt="profile-photo"/>
      <h4>Founder：大石 航平</h4>
    </div>
    <div className="leader-info d-flex flex-column align-items-center justify-content-center">
      <Image src={leaderphoto} className="d-block d-md-none" fluid roundedCircle alt="profile-photo"/>
      <h4 className="d-md-none">Founder：大石 航平</h4>
      <p>日系スタートアップ企業で海外事業開発・営業に従事し、インド及びフィリピンで。<br/>その後、国際協力機構(JICA)で政府開発援助に携わり、アジア・アフリカの貧困層の家計管理・金融サービス利用向上に関わるプロジェクトを実施。<br/>JICAを退職し、香港のオンラインプログラミングコース「Altcademy」を修了後、The Five Booksを立ち上げ。<br/>好きな古典は「生物から見た世界」、「道徳感情論」。
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
