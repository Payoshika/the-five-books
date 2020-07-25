import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Story = () => {

  const content =
  <div id="about" className="story d-flex flex-column align-items-center justify-content-center">
    <p>
      The Five Booksは、「古典の読書をより容易で、豊かな体験にする」ことを目指す、人文社会科学分野の専門性を持つ講師による、各分野の古典を題材にした対話型のオンラインライブ講義サービスです。<br/>本サービスを通じ、自分の人生に欠かせない5冊に出会って欲しい、という思いでThe Five Booksという名前を付けました。<br/>
      企画者の大石は、これまでNHK「100分de名著」や哲学・倫理学分野の学術入門書から、各分野の古典著作に関心を持ち、これまで20冊程を読んできました。<br/>「自由論」、「道徳形而上学原論」、「二コマコス倫理学」 等の読書からは、視界が急に開けるような鋭い示唆に考えが改まり、これまで自分のなかでモヤモヤしていた感覚を言い当てる表現に感心し、現代でも重要さを全く失わない問題定義に考えさせられることが多々ありました。<br/>そして、何よりも読むことが自分の思索の起点になり、著者の主張を現代のイシューに適応したり、個人的なイシューについて著者の主張を踏まえた考察を行うことができ、その結果自分の思考が変化していくことに、古典の読書の価値があると考えるようになりました。
    </p>
  </div>

  return(
    <Container fluid>
      <Row>
        <Col>
          <h4 className="text-center"><u>The Five Booksが求めるもの</u></h4>
          {content}
        </Col>
      </Row>
    </Container>
  )
}


export default Story
