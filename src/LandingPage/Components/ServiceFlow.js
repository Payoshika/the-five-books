import React from "react"
import Service_flow from './img/Service_flow.jpeg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const ServiceFlow = () => {
  const content =
  <div className="service-flow-img d-flex flex-column align-items-center">
    <h4>サービスの流れ</h4>
    <Image src={Service_flow} rounded fluid alt="サービスの流れ"/>
  </div>

  return(
    <Container fluid>
      <Row>
        <Col>
          {content}
        </Col>
      </Row>
    </Container>
  )
}


export default ServiceFlow
