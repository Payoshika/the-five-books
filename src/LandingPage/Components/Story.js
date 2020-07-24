import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Story = () => {
  const content = <div>Insert Story</div>
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


export default Story
