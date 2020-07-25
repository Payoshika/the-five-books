import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import lecture from "./img/lecture.png"
import discussion from "./img/discussion.png"
import output from "./img/output.png"
import read from "./img/read.png"

const ServiceDescription = () => {
  const content =
    <div className="d-flex flex-column flex-nowrap justify-content-center align-items-center">
      <div className="d-flex justify-between align-items-center mx-md-4 my-5">
        <Image className="description-img" src={lecture} rounded/>
        <div className="description-text d-flex flex-column justify-content-center align-items-center">
          <h5>理解する</h5>
          <p>当該分野の専門家による、プレゼンテーション資料を用いた、オンラインlive講義を受けられることで、書籍の理解がすすむ。</p>
        </div>
      </div>
      <div className="d-flex justify-between align-items-center  mx-md-4 my-3">
        <Image className="description-img order-1" src={output} rounded/>
        <div className="description-text order-0 d-flex flex-column justify-content-center align-items-center">
          <h5>考える</h5>
          <p>講師と読者・読者同士が書籍に関する疑問点や講師から出された議題について対話することで、読書がよりインタラクティブな体験となる。そして考えることができる。</p>
        </div>
      </div>
      <div className="d-flex justify-between align-items-center  mx-md-4 my-3">
        <Image className="description-img" src={discussion} rounded/>
        <div className="description-text d-flex flex-column justify-content-center align-items-center">
          <h5>共有する</h5>
          <p>講義の中で、自分の考えを整理し、講師・読者に共有し、フィードバックを得ることができる。</p>
        </div>
      </div>
      <div className="d-flex justify-between align-items-center  mx-md-4 my-3">
        <Image className="description-img order-1" src={discussion} rounded/>
        <div className="description-text d-flex order-0 flex-column justify-content-center align-items-center">
          <h5>身に付く</h5>
          <p>自分の考えが対話と講義を通じ、生まれ・更新され・変形されることで、書籍の内容を自分なりの形で、身に付くようになる。</p>
        </div>
      </div>
    </div>

  return(
      <Container fluid>
        <Row>
          <Col>
            <h4 className="text-center"><u>サービスの特徴</u></h4>
            {content}
          </Col>
        </Row>
      </Container>
  )
}

export default ServiceDescription
