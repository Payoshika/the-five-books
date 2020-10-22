import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import zoom from "../img/zoom.png"
import slack from "../img/slack.png"

const Features = () => {
  const content =
  <div id="" className="story d-flex flex-column flex-md-row align-items-center justify-content-center bottom-border">
    <div className="feature-contents d-flex flex-column align-items-center my-3 mb-md-0 mr-0 mr-md-3">
      <h4 className="mt-2"><b>"おそい"読書</b></h4>
      <p>1冊を2-4週間かけて読み進めます。<br/>講師には、毎週の購読範囲を設定し、週に一度の講義を行っていただきます。<br/>
      講義では、著者・書籍の背景や読解上の要点を解説いただく他、参加者が読みながら考えるための”問いかけ”を提示していただきます。
      開講期間中はオンラインの読者グループを構成し、問いかけへの考えや参加者の疑問点などについて参加者と講師で対話を重ねながら読み進めていきます。
      </p>
    </div>
    <div className="feature-contents d-flex flex-column align-items-center my-3 mb-md-0">
      <h4 className="mt-2"><b>オンライン運営</b></h4>
      <p>The Five Booksは完全オンラインで運営しております。講義はZoomを用い、対話ツールにはSlackを利用します。研究室や自宅から講義を行なっていただけますが、ウェブカメラやマイクをご用意いただく必要がございます。
      </p>
      <div className="d-flex justify-content-center">
        <Image className="description-img" src={zoom} width="75" height="75"/>
        <Image className="description-img" src={slack} width="75" height="75"/>
      </div>
    </div>
  </div>

  return(
    <Container fluid>
      <Row>
        <Col>
          <h4 className="text-center"><u>The Five Booksの特徴</u></h4>
          {content}
          <hr />
        </Col>
      </Row>
    </Container>
  )
}


export default Features
