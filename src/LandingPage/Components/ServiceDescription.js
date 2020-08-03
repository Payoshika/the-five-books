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
    <div className="d-flex flex-column flex-nowrap justify-content-start align-items-center mt-md-5">
      <div className="d-flex flex-column flex-md-row justify-between align-items-center mx-md-4 mb-md-4">
        <Image className="description-img order-md-1" src={read} rounded/>
        <div className="description-text d-flex order-md-0 flex-column justify-content-center align-items-center">
          <h5><u>読む</u></h5>
          <p>いつもより、時間をかけて一冊を読む。<br/>2~4週間をかけて一冊を読み続けていく中で、読みながら考え、考えた後にまた読む。<br/>本を消費するのではなく、自分の思考を生み出す起点にする。</p>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-between align-items-center mx-md-4">
        <Image className="description-img" src={lecture} rounded/>
        <div className="description-text d-flex flex-column justify-content-center align-items-center mb-md-4">
          <h5><u>理解する</u></h5>
          <p>その分野の専門家による、週に一度のオンラインライブ講義を受ける。<br/>読書の過程で疑問に思った点や、理解が足りない点を明らかにすると共に、その書籍の歴史背景や専門家の解釈を聞くことで理解を深める。</p>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-between align-items-center mx-md-4 mb-md-4">
        <Image className="description-img order-md-1" src={output} rounded/>
        <div className="description-text order-md-0 d-flex flex-column justify-content-center align-items-center">
          <h5><u>言葉にする</u></h5>
          <p>講師から提示される書籍に関する問いかけについて、考えを整理し、自らの言葉で表現する。
          </p>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-between align-items-center mx-md-4 mb-md-4">
        <Image className="description-img" src={discussion} rounded/>
        <div className="description-text d-flex flex-column justify-content-center align-items-center">
          <h5><u>対話する</u></h5>
          <p>講座期間中、チャットツールを用い、他の読者や講師と対話する。<br/>読者同士で疑問点を共有しあい、自分の考えについて発信・議論することで、多様な読み方を知り、自らの思考をアップデートするきっかけにする。
          </p>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-between align-items-center mx-md-4 mb-md-4">
        <Image className="description-img order-md-1" src={understand} rounded/>
        <div className="description-text d-flex order-md-0 flex-column justify-content-center align-items-center">
          <h5><u>根付く</u></h5>
          <p>読書⇔講義、思考⇔対話を繰り返すことで、読者の中で考えが生まれ、形を変え、深まっていく。 </p>
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
