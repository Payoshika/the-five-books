import React from "react"
import {Register} from "./index.js";
import {Lecture1, Lecture2} from "../../LecturePage/index"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Banner = () => {
  const message =
  <div className="banner-message">
    <h2>古典の読書をより容易で、より豊かな体験に。</h2>
    <p>各分野の古典書籍について、週に1度、専門家である講師のLive講義で、著作の要点や背景を学ぶ新しいオンライン読書体験</p>
    <p>関心はあったのに「難しくて分からない」と途中で止めてしまった古典、読後もモヤモヤした理解を残したままになっている古典を、講師による分かりやすい講義と読者同士の議論を通じ、もう一度読み直してみませんか。</p>
  </div>

  return(
    <Container fluid>
      <Row>
        <Col md={6}>
          {message}
        </Col>
        <Col md={6}>
          <Lecture1 />
        </Col>
      </Row>
      <Row>
        <Col>
          <Register />
        </Col>
      </Row>
    </Container>
  )
}


export default Banner
