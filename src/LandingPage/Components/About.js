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
      <h4>事業責任者：大石 航平</h4>
    </div>
    <div className="leader-info d-flex flex-column align-items-center justify-content-center">
      <Image src={leaderphoto} className="d-block d-md-none" fluid roundedCircle alt="profile-photo"/>
      <h4 className="d-md-none">事業責任者：大石 航平</h4>
      <p>日系スタートアップ企業で4年間、途上国向け新規事業開発・営業に従事し、インド及びフィリピンでの駐在を経験。<br/>その後国際協力機構(JICA)で3年間政府開発援助に携わり、途上国の貧困層の家計管理・金融サービス利用向上に関わるプロジェクトを実施。<br/>JICAを退職し、香港のオンラインプログラミングコースを修了後、The Five Booksを創業。<br/>愛読書は「自由論」, 「生物から見た世界」、「道徳感情論」、「二コマコス倫理学」、「コーダの世界」。
      神戸大学卒(2014年)
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
