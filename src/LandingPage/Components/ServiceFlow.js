import React from "react"
import Service_flow from './img/Service_flow.jpeg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const ServiceFlow = () => {
  const content =
  <div className="service-flow-img d-flex flex-column align-items-center justify-content-center">
    <p>
      The Five Booksは、「古典の読書をより容易で、豊かな体験にする」ことを目指す、人文社会科学分野の専門性を持つ講師による、各分野の古典を題材にした対話型のオンラインライブ講義サービスです。<br/>本サービスを通じ、自分の人生に欠かせない5冊に出会って欲しい、という思いでThe Five Booksという名前を付けました。
    </p>
    <div>
      <Image src={Service_flow} rounded fluid alt="サービスの流れ"/>
    </div>
  </div>

  return(
    <Container fluid>
      <Row>
        <Col>
          <h4 className="text-center"><u>サービスの流れ</u></h4>
          {content}
        </Col>
      </Row>
    </Container>
  )
}


export default ServiceFlow
