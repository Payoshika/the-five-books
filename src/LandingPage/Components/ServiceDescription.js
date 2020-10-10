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
    <div className="d-flex flex-column flex-nowrap justify-content-start align-items-center mt-md-5 bottom-border">
      <div className="d-flex flex-column flex-md-row justify-between align-items-center mx-md-4 mb-md-4">
        <Image className="description-img order-md-0" src={read} rounded/>
        <div className="description-text d-flex order-md-1 flex-column justify-content-center align-items-center">
          <h5><b>読む</b></h5>
          <p>いつもより、時間をかけて一冊を読む。<br/>読みながら考え、考えた後にまた読む。読書を消費にするのではなく、自分で考えるきっかけにする。</p>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-between align-items-center mx-md-4">
        <Image className="description-img order-md-1" src={lecture} rounded/>
        <div className="description-text d-flex flex-column justify-content-center align-items-center mb-md-4 order-md-0">
          <h5><b>学ぶ</b></h5>
          <p>専門家による、週に一度のオンライン講義を受ける。<br/>読書の過程で疑問に思った点や、理解が足りない点を明らかにすると共に、書籍の歴史背景や専門家の解釈を聞くことで理解を深める。</p>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-between align-items-center mx-md-4 mb-md-4">
        <Image className="description-img order-md-0" src={discussion} rounded/>
        <div className="description-text d-flex flex-column justify-content-center align-items-center order-md-1">
          <h5><b>対話する</b></h5>
          <p>開講期間中、チャットツールを用い、他の読者や講師と対話する。<br/>読者同士が自分の考えについて発信し、疑問点を共有しあうことで、多様な読み方を知り、自分の考えをアップデートするきっかけにする。
          </p>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-between align-items-center mx-md-4 mb-md-4">
        <Image className="description-img order-md-1" src={output} rounded/>
        <div className="description-text order-md-0 d-flex flex-column justify-content-center align-items-center">
          <h5><b>言葉にする</b></h5>
          <p>講師から提示される書籍に関する「問いかけ」について、考えを整理し、自らの言葉に落としてみる。
          </p>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-between align-items-center mx-md-4 mb-md-4">
        <Image className="description-img order-md-0" src={understand} rounded/>
        <div className="description-text d-flex order-md-1 flex-column justify-content-center align-items-center">
          <h5><b>根付く</b></h5>
          <p>読む⇔学ぶ、言葉にする⇔対話する、を繰り返すことで、読者の中で考えが生まれ、形を変え、深まっていく。 </p>
        </div>
      </div>
    </div>

  return(
      <Container fluid>
        <Row>
          <Col>
            <h4 className="text-center"><u>講義の特徴</u></h4>
            {content}
            <hr/>
          </Col>
        </Row>
      </Container>
  )
}

export default ServiceDescription
