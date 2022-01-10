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
      初回講義では、講師から書籍の概略・背景について解説を行い、参加者は読み進める上で有益な前提情報を学び、講義の狙いや各講義の位置付けを理解します。その後、其々のペースで書籍を読み進めながら、週に一度のオンライン講義に参加します。
    </p>
    <p>
      開講期間中は、参加者をSlackの期間限定の読者グループへ招待します。他の参加者と疑問点を共有したり、講師からの問いについて講師・参加者同士で考えを共有・議論しながら、読みながら考え、考えてまた読んでいきます。毎週の講義はそれまでの読書グループに投稿された疑問や関心を踏まえた内容に随時更新されていきます。
    </p>
    <p>
      各講義には、質疑の時間があり、読者はチャットまたは音声で質問することができます。読者と講師が十分に対話できるよう、講義の参加者は一度に最大40名としております。
    </p>
    <div>
      <span className="d-block text-center mt-0">講義の流れ</span>
      <Image src={Service_flow} rounded fluid alt="講義の流れ"/>
    </div>
  </div>

  return(
    <Container fluid>
      <Row>
        <Col>
          <h4 className="text-center"><u>講義の流れ</u></h4>
          {content}
          <hr/>
        </Col>
      </Row>
    </Container>
  )
}


export default ServiceFlow
