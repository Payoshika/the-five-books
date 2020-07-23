import React from "react"
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  const content =
  <div className="footer">
    <span> &copy; The Five Books</span>
  </div>

  return(
    <Container>
      <Row>
        <Col>
          {content}
        </Col>
      </Row>
    </Container>
  )
}
export default Footer
