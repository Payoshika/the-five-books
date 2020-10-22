import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Banner = () => {
  return(
    <Container fluid>
      <Row>
        <Col
          className="book_guide_banner position-relative">
          <h3>研究者の<br/>皆様へ</h3>
        </Col>
      </Row>
    </Container>
  )
}


export default Banner
