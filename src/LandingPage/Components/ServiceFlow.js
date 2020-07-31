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
      各々のペースで古典を読み進め、週に一度のライブ講義を受ける、というのが基本的な流れです。
      <br/>
      講義期間中は、Slackの期間限定の読者グループへ参加し、講義の間に、他の読者と疑問点を共有したり、講師の議題に対する回答を投稿したりします。
      <br/>

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
