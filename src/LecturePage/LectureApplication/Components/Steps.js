import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import arrow_down from "../img/arrow_down.png"

const Steps = () => {
  const content =
  <div className="step-container d-flex flex-column justify-content-center align-items-center">
    <div className="d-flex flex-column justify-content-center align-items-center px-3 my-3">
      <h4><b>書籍の選定</b></h4>
      <p>The Five Booksの担当者と相談のうえ、講義書籍を選書します。<br/>
      原則一講義一冊となりますが、参考書籍を提示することも可能です。<br/>絶版の書籍については、残念ながら取り上げることができません。
      </p>
    </div>
    <Image src={arrow_down} width="25" height="25" rounded/>
    <div className="d-flex flex-column justify-content-center align-items-center px-3 my-3">
      <h4><b>講義の構成</b></h4>
      <p>スケジュール、講義時間、講義範囲などについて相談のうえ決定します。<br/>
      参加料金は講師が設定いたします。<br/>初回講義の際には、対面の打ち合わせを想定しております。
      </p>
    </div>
    <Image src={arrow_down} width="25" height="25" rounded/>
    <div className="d-flex flex-column justify-content-center align-items-center px-3 my-3">
      <h4><b>講義の準備</b></h4>
      <p>受講者用のシラバスを作成し、開講日4~3週間前に告知を始めます。<br/>講義内容を準備いただき、通信や運営面のテストを行います。<br/>講師のご希望があれば、テスト講義を行うこともできます。
      </p>
    </div>
  </div>

  return(
    <Container fluid>
      <Row>
        <Col>
          <h4 className="text-center"><u>講義までの流れ</u></h4>
          {content}
          <hr />
        </Col>
      </Row>
    </Container>
  )
}


export default Steps
