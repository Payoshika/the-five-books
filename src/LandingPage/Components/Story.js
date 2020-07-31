import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Story = () => {

  const content =
  <div id="about" className="story d-flex flex-column align-items-center justify-content-center">
    <p>
      長く読み継がれている古典には、視界を急に開くような鋭い視点が提示されていたり、読者の琴線に触れる言葉が散りばめられていたり、現代でも重要さを全く失わない問題が提議されています。古典を読むことで、当たり前だと思っていたことをもう一度考え直すきっかけになることや、新たな考えが生まれることが多いのではないでしょうか。
      <br/>
      一方で、古典には、用語や文脈・歴史背景の理解が不足していると理解できない箇所があることや、言い回しや論理構造の難解さから腑に落ちないような箇所も多く、読書に苦労を要することが多いのも確かです。また、周りで同じ本を読んでいる人を見つけるのが難しいこともあり、どうしても一人でその本と格闘することになりがちです。<br/>
    </p>
    <p>The Five Booksは、専門性を持って古典を読み解いてきた専門家の講義を受けることで古典を読書に伴う理解の壁を乗り越えること、他の読者・自分自身と対話しながらじっくりと読書することで、古典をより読み易く、そしてその読書をより豊かな体験に変えていくことを目指しています。
    </p>
  </div>

  return(
    <Container fluid>
      <Row>
        <Col>
          <h4 className="text-center"><u>The Five Booksとは</u></h4>
          {content}
        </Col>
      </Row>
    </Container>
  )
}


export default Story
