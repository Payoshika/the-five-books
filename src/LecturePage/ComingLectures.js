import React from "react"
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from "react-bootstrap/Carousel"
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import bookImg1 from "./img/幸福について.jpg"
import bookImg2 from "./img/知性について.jpg"
import bookImg3 from "./img/自殺について.jpg"
import bookImg4 from "./img/メノン.jpg"
import bookImg5 from "./img/饗宴.jpg"
import bookImg6 from "./img/国家.jpg"
import bookImg7 from "./img/プロタゴラス.jpg"
import bookImg8 from "./img/ソクラテスの弁明クリトン.jpg"
import bookImg9 from "./img/ゴルギアス.jpg"
import bookImg10 from "./img/法律.jpg"
import bookImg11 from "./img/パイドン.jpg"
import bookImg12 from "./img/パイドロス.jpg"
import bookImg13 from "./img/二コマコス倫理学.jpg"
import bookImg14 from "./img/形而上学.jpg"
import bookImg15 from "./img/政治学.jpg"
import bookImg16 from "./img/弁論術.jpg"
import bookImg17 from "./img/アテナイ人の国制.jpg"

const ComingLectures = () => {
  const content =
  <div className="coming-lectures d-flex flex-column flex-lg-row align-items-center justify-content-center flex-lg-wrap">
    <div className="coming-lecture-list d-flex flex-row flex-lg-column">
      <img src={bookImg1} className="img-fluid" alt=""/>
      <div className="description">
        <p>著作：幸福について</p>
        <p>著者：ショーペンハウエル</p>
      </div>
      <Button
        variant="outline-secondary"
        >この書籍をリクエスト
      </Button>
    </div>
    <div className="coming-lecture-list d-flex flex-row flex-lg-column">
      <img src={bookImg2}  className="img-fluid" alt=""/>
      <div className="description">
        <p>著作：知性について</p>
        <p>著者：ショーペンハウエル</p>
      </div>
      <Button
        variant="outline-secondary"
        >この書籍をリクエスト
      </Button>
    </div>
    <div className="coming-lecture-list  d-flex flex-row flex-lg-column">
      <img src={bookImg3} className="img-fluid"  alt=""/>
      <div className="description">
        <p>著作：自殺について</p>
        <p>著者：ショーペンハウエル</p>
      </div>
      <Button
        variant="outline-secondary"
        >この書籍をリクエスト
      </Button>
    </div>
    <div className="coming-lecture-list  d-flex flex-row flex-lg-column">
      <img src={bookImg4} className="img-fluid" alt=""/>
      <div className="description">
        <p>著作：メノン</p>
        <p>著者：プラトン</p>
      </div>
      <Button
        variant="outline-secondary"
        >この書籍をリクエスト
      </Button>
    </div>
    <div className="coming-lecture-list  d-flex flex-row flex-lg-column">
      <img src={bookImg5}  className="img-fluid" alt=""/>
      <div className="description">
        <p>著作：饗宴</p>
        <p>著者：プラトン</p>
      </div>
      <Button
        variant="outline-secondary"
        >この書籍をリクエスト
      </Button>
    </div>
    <div className="coming-lecture-list  d-flex flex-row flex-lg-column">
      <img src={bookImg6}  className="img-fluid" alt=""/>
      <div className="description">
        <p>著作：国家</p>
        <p>著者：プラトン</p>
      </div>
      <Button
        variant="outline-secondary"
        >この書籍をリクエスト
      </Button>
    </div>
    <div className="coming-lecture-list  d-flex flex-row flex-lg-column">
      <img src={bookImg7}  className="img-fluid" alt=""/>
      <div className="description">
        <p>著作：プロタゴラス</p>
        <p>著者：プラトン</p>
      </div>
      <Button
        variant="outline-secondary"
        >この書籍をリクエスト
      </Button>
    </div>
    <div className="coming-lecture-list  d-flex flex-row flex-lg-column">
      <img src={bookImg8}  className="img-fluid" alt=""/>
      <div className="description">
        <p>著作：ソクラテスの弁明・クリトン</p>
        <p>著者：プラトン</p>
      </div>
      <Button
        variant="outline-secondary"
        >この書籍をリクエスト
      </Button>
    </div>
    <div className="coming-lecture-list  d-flex flex-row flex-lg-column">
      <img src={bookImg9} className="img-fluid"  alt=""/>
      <div className="description">
        <p>著作：ゴルギアス</p>
        <p>著者：プラトン</p>
      </div>
      <Button
        variant="outline-secondary"
        >この書籍をリクエスト
      </Button>
    </div>
    <div className="coming-lecture-list  d-flex flex-row flex-lg-column">
      <img src={bookImg10}  className="img-fluid" alt=""/>
      <div className="description">
        <p>著作：法律</p>
        <p>著者：プラトン</p>
      </div>
      <Button
        variant="outline-secondary"
        >この書籍をリクエスト
      </Button>
    </div>
    <div className="coming-lecture-list  d-flex flex-row flex-lg-column">
      <img src={bookImg11}  className="img-fluid" alt=""/>
      <div className="description">
        <p>著作：パイドン</p>
        <p>著者：プラトン</p>
      </div>
      <Button
        variant="outline-secondary"
        >この書籍をリクエスト
      </Button>
    </div>
    <div className="coming-lecture-list  d-flex flex-row flex-lg-column">
      <img src={bookImg12}  className="img-fluid" alt=""/>
      <div className="description">
        <p>著作：パイドロス</p>
        <p>著者：プラトン</p>
      </div>
      <Button
        variant="outline-secondary"
        >この書籍をリクエスト
      </Button>
    </div>
    <div className="coming-lecture-list  d-flex flex-row flex-lg-column">
      <img src={bookImg13} className="img-fluid"  alt=""/>
      <div className="description">
        <p>著作：二コマコス倫理学</p>
        <p>著者：アリストテレス</p>
      </div>
      <Button
        variant="outline-secondary"
        >この書籍をリクエスト
      </Button>
    </div>
    <div className="coming-lecture-list  d-flex flex-row flex-lg-column">
      <img src={bookImg14}  className="img-fluid" alt=""/>
      <div className="description">
        <p>著作：形而上学</p>
        <p>著者：アリストテレス</p>
      </div>
      <Button
        variant="outline-secondary"
        >この書籍をリクエスト
      </Button>
    </div>
    <div className="coming-lecture-list  d-flex flex-row flex-lg-column">
      <img src={bookImg15}  className="img-fluid" alt=""/>
      <div className="description">
        <p>著作：政治学</p>
        <p>著者：アリストテレス</p>
      </div>
      <Button
        variant="outline-secondary"
        >この書籍をリクエスト
      </Button>
    </div>
    <div className="coming-lecture-list  d-flex flex-row flex-lg-column">
      <img src={bookImg16}  className="img-fluid" alt=""/>
      <div className="description">
        <p>著作：弁論術</p>
        <p>著者：アリストテレス</p>
      </div>
      <Button
        variant="outline-secondary"
        >この書籍をリクエスト
      </Button>
    </div>
    <div className="coming-lecture-list  d-flex flex-row flex-lg-column">
      <img src={bookImg17} className="img-fluid"  alt=""/>
      <div className="description">
        <p>著作：アテナイ人の国政</p>
        <p>著者：アリストテレス</p>
      </div>
      <Button
        variant="outline-secondary"
        >この書籍をリクエスト
      </Button>
    </div>

  </div>

  return(
    <Container fluid>
      <Row>
        <Col>
          <h4 className="text-center">今後講義予定の古典</h4>
          <div>
            {content}
          </div>
        </Col>
      </Row>
    </Container>
  )
}


export default ComingLectures
