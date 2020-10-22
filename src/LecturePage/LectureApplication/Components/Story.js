import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Story = () => {
  const content =
  <div id="" className="story d-flex flex-column align-items-center justify-content-center bottom-border">
    <p>
      The Five Booksは、 NHK「100分de名著」や学術系入門書を読み、原著の古典に関心を持ち手に取ったものの、難しくて読みきれない、歴史・文化背景が理解できておらず読んでもなかなか腑に落ちない、という体験を何度も経験したことから生まれたサービスです。
    </p>
    <p>
      講義を聞き学び、読みながら考え、他の読者や講師と対話し、学びと考えを重ね更新していく中で一冊を自分なりに消化できるようになる、そのような読書体験が提供される場を作りたいと考えております。
    </p>
    <p>
      専門分野は問いません。研究活動の中で読み込んだ古典について、今から読み始める読者のガイドとなっていただける方を募集しております。
    </p>
  </div>

  return(
    <Container fluid>
      <Row>
        <Col>
          <h4 className="text-center"><u>講師を募集しています</u></h4>
          {content}
          <hr />
        </Col>
      </Row>
    </Container>
  )
}


export default Story
