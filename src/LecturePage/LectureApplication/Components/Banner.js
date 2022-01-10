import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Banner = () => {
  return(
    <Container fluid>
      <Row className="w-100 d-flex flex-row justify-content-center align-item-center">
        <Col className="requirements d-flex justify-content-center">
            <h3>研究者の皆様へ</h3>
        </Col>
      </Row>
    </Container>
  )
}


export default Banner
