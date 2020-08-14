import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from "react-bootstrap/Carousel"

const Review = () => {

  const review1 =
  <div className="review-content d-flex flex-column justify-content-center align-items-center">
    <p>講義のわかりやすさ、他の受講者とのディスカッション、考える時間の捻出、これまでにない読書体験が得られてよかった。</p>
    <p>名前 名前</p>
    <p>受講講座：「読書について」(9月5日 ~ 9月26日 講師：山野弘樹)</p>
  </div>

  const review2 =
  <div className="review-content d-flex flex-column justify-content-center align-items-center">
    <p>講義のわかりやすさ、他の受講者とのディスカッション、考える時間の捻出、これまでにない読書体験が得られてよかった。講義のわかりやすさ、他の受講者とのディスカッション、考える時間の捻出、これまでにない読書体験が得られてよかった。</p>
    <p>お名前 太郎</p>
    <p>受講講座：「読書について」(9月5日 ~ 9月26日 講師：山野弘樹)</p>
  </div>

  const content =
  <Carousel>
    <Carousel.Item>
      {review1}
    </Carousel.Item>
    <Carousel.Item>
      {review2}
    </Carousel.Item>
  </Carousel>

  return(
    <Container fluid>
      <Row>
        <Col className="reviews d-flex flex-column align-items-center justify-content-center">
          <h4 className="mb-3">参加者の声</h4>
          {content}
        </Col>
      </Row>
    </Container>
  )
}


export default Review
