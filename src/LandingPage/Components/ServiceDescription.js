import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ServiceDescription = () => {
  const content =
    <div className="d-flex flex-column flex-md-row flex-nowrap">
      <div className="description1 d-flex justify-between align-items-center">
        <img src="https://via.placeholder.com/150" alt=""/>
        <div className="text">
          <h3>理解する</h3>
          <p>当該分野の専門家による、プレゼンテーション資料を用いた、オンラインlive講義を受けられることで、書籍の理解がすすむ。</p>
        </div>
      </div>
      <div className="description2  d-flex justify-between align-items-center">
        <img src="https://via.placeholder.com/150" alt=""/>
        <div className="text">
          <h3>考える</h3>
          <p>講師と読者・読者同士が書籍に関する疑問点や講師から出された議題について対話することで、読書がよりインタラクティブな体験となる。そして考えることができる。</p>
        </div>
      </div>
      <div className="description3  d-flex justify-between align-items-center">
        <img src="https://via.placeholder.com/150" alt=""/>
        <div className="text">
          <h3>共有する</h3>
          <p>講義の中で、自分の考えを整理し、講師・読者に共有し、フィードバックを得ることができる。</p>
        </div>
      </div>
    </div>

  return(
      <Container fluid>
        <Row>
          <Col>{content}</Col>
        </Row>
      </Container>
  )
}

export default ServiceDescription
