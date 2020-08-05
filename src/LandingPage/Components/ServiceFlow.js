import React from "react"
import Service_flow from './img/Service_flow.jpeg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const ServiceFlow = () => {
  const content =
  <div className="service-flow-img d-flex flex-column align-items-center justify-content-center bottom-border">
    <p>
      各々のペースで古典を読み進め、週に一度のライブ講義を受ける、というのが基本的な流れになります。初回講義では、参加者は、講師から書籍の概略・背景について解説を受け、読み進める上で有益な前提情報を学び、講義の狙いや各講義の位置付けを理解します。
    </p>
    <p>
      開講期間中は、Slackの期間限定の読者グループへ招待します。参加者は、他の参加者と疑問点を共有したり、講師からの問いについて参加者同士で考えを共有・議論しながら、読みながら考え、考えてまた読んでいきます。講師は、参加者の疑問や関心を踏まえた講義を行います。
    </p>
    <p>
      各講義には、質疑の時間があり、読者はチャットまたは音声で質問することができます。読者と講師が十分に対話できるよう、講義の参加者は一度に最大30名としております。
    </p>
    <div>
      <span className="d-block text-center mt-0">サービスの流れ</span>
      <Image src={Service_flow} rounded fluid alt="サービスの流れ"/>
    </div>
  </div>

  return(
    <Container fluid>
      <Row>
        <Col>
          <h4 className="text-center"><u>サービスの流れ</u></h4>
          {content}
          <hr/>
        </Col>
      </Row>
    </Container>
  )
}


export default ServiceFlow
