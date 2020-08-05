import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Story = () => {

  const content =
  <div id="about" className="story d-flex flex-column align-items-center justify-content-center bottom-border">
    <p>
      長く読み継がれている古典には、視界を開かされる鋭い視点が提示されていることや、読者の琴線に触れる言葉が散りばめられていること、現代でも重要さを全く失わない問題が提起されていることがあります。当たり前だと思っていたことをもう一度考え直すきっかけになったり、新たな考えが生まれたりすることも多いのではないでしょうか。
    </p>
    <p>
      一方で、古典には、用語や文脈・歴史背景の理解が不足していると理解できない箇所があることや、言い回しや論理構造の難解な箇所も多く、読み解くのに苦労することが多いのも確かです。<br/>また、周りに同じ本を読んでいる人を見つけるのが難しく、どうしても一人でその本と格闘することになってしまいます。
    </p>
    <p>
      The Five Booksは、専門家の講義を受け、古典をより深く理解すること、他の読者や自分自身と対話しながらじっくりと読みこみ、古典の読書をより豊かな体験に変えていくことを目指しています。
    </p>
    <p>本サービスを通じ、「人生に欠かせない5冊に出会って欲しい」という想いが、サービス名"The Five Books"に込められています。</p>
  </div>

  return(
    <Container fluid>
      <Row>
        <Col>
          <h4 className="text-center"><u>The Five Booksとは</u></h4>
          {content}
          <hr />
        </Col>
      </Row>
    </Container>
  )
}


export default Story
