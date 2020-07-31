import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import lecture from "./img/lecture.png"
import discussion from "./img/discussion.png"
import output from "./img/output.png"
import read from "./img/read.png"
import understand from "./img/understand.png"

const ServiceDescription = () => {
  const content =
    <div className="d-flex flex-column flex-nowrap justify-content-center align-items-center">
      <div className="d-flex justify-between align-items-center mx-md-4 my-5">
        <Image className="description-img order-1" src={read} rounded/>
        <div className="description-text d-flex order-0 flex-column justify-content-center align-items-center">
          <h5>読む</h5>
          <p>いつもより、時間をかけて一冊を読む。<br/>2~3週間をかけて一冊を読み続けていく中で、読みながら考え、考えた後にまた読む。<br/>本を消費するのではなく、本を起点に自分の思考を生み出していく。</p>
        </div>
      </div>
      <div className="d-flex justify-between align-items-center mx-md-4 my-5">
        <Image className="description-img" src={lecture} rounded/>
        <div className="description-text d-flex flex-column justify-content-center align-items-center">
          <h5>理解する</h5>
          <p>当該分野の専門家による、週に一度のオンラインライブ講義を受ける。<br/>読書の過程で疑問に思った点や、理解が足りない点を明らかにすると共に、著書の歴史背景や専門家の解釈を聞くことで、著作について理解を深める。</p>
        </div>
      </div>
      <div className="d-flex justify-between align-items-center  mx-md-4 my-3">
        <Image className="description-img order-1" src={output} rounded/>
        <div className="description-text order-0 d-flex flex-column justify-content-center align-items-center">
          <h5>言葉にする</h5>
          <p>講師から提示される著作に関する議題について、考えを整理し、自らの言葉としてアウトプットすることを通じ、著作について自分なりに消化する。</p>
        </div>
      </div>
      <div className="d-flex justify-between align-items-center  mx-md-4 my-3">
        <Image className="description-img" src={discussion} rounded/>
        <div className="description-text d-flex flex-column justify-content-center align-items-center">
          <h5>対話する</h5>
          <p>講座期間中、チャットツールを用い、他の読者や講師と著作について対話する。<br/>互いに疑問点を共有しあうことや、自分の考えについて発信し・議論することで、自分とは異なる他の読み方を知り、自らの思考を更新する。</p>
        </div>
      </div>
      <div className="d-flex justify-between align-items-center  mx-md-4 my-3">
        <Image className="description-img order-1" src={understand} rounded/>
        <div className="description-text d-flex order-0 flex-column justify-content-center align-items-center">
          <h5>根付く</h5>
          <p>読書と講義、思考と対話を繰り返すことで、言葉が生まれ・変形し・更新されていく。<br/>著作の全てを理解するのは難しいが、一部であっても自分の言葉で消化し、自分の中に根付かせていく。</p>
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
