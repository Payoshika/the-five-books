import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from "axios"
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
import bookImg18 from "./img/哲学原理.jpg"
import bookImg19 from "./img/Theaitetos.jpg"
import bookImg20 from "./img/詩学.jpg"
import bookImg21 from "./img/精神のエネルギー.jpg"
import bookImg22 from "./img/思考と動き.jpg"
import bookImg23 from "./img/道徳形而上学原論.jpg"
import bookImg24 from "./img/プロレゴメナ.jpg"
import bookImg25 from "./img/社会学の根本問題.jpg"
import bookImg26 from "./img/まなざしの地獄.jpg"
import bookImg27 from "./img/タクシーダンス・ホール.jpg"


const FutureLectures = () => {

  const requestBook = (event) => {
    let name = event.target.parentNode.querySelector(".description").childNodes[0].lastChild.innerText
    let author = event.target.parentNode.querySelector(".description").childNodes[1].lastChild.innerText
    console.log(name, author);
    event.preventDefault();
    const apiURL = process.env.REACT_APP_API_URL
    let book  = {
          name: name,
          author: author,
        }
    axios.post(`${apiURL}/book_create`, {book: book})
    .then(
      response => console.log(response.data),
      event.target.innerText = "リクエストしました。",
    )
    .catch(error => console.log(error))
  }

  const content =
  <div className="coming-lectures d-flex flex-column flex-lg-row align-items-center justify-content-center flex-lg-wrap">
    <div className="coming-lecture-list d-flex flex-row flex-lg-column">
      <img src={bookImg19} className="img-fluid" alt=""/>
      <div className="description">
        <p><span className="book-title">テアイテトス </span></p>
        <p>著者：<span className="book-author">プラトン</span></p>
      </div>
      <Button
        variant="outline-secondary"
        onClick={(event)=>requestBook(event)}
        >この書籍をリクエスト
      </Button>
    </div>
    <div className="coming-lecture-list d-flex flex-row flex-lg-column">
      <img src={bookImg27} className="img-fluid" alt=""/>
      <div className="description">
        <p><span className="book-title">タクシーダンス・ホール </span></p>
        <p>著者：<span className="book-author">ポール・G・クレッシー</span></p>
      </div>
      <Button
        variant="outline-secondary"
        onClick={(event)=>requestBook(event)}
        >この書籍をリクエスト
      </Button>
    </div>
    <div className="coming-lecture-list d-flex flex-row flex-lg-column">
      <img src={bookImg20} className="img-fluid" alt=""/>
      <div className="description">
        <p><span className="book-title">詩学 </span></p>
        <p>著者：<span className="book-author">アリストテレス</span></p>
      </div>
      <Button
        variant="outline-secondary"
        onClick={(event)=>requestBook(event)}
        >この書籍をリクエスト
      </Button>
    </div>
    <div className="coming-lecture-list d-flex flex-row flex-lg-column">
      <img src={bookImg22} className="img-fluid" alt=""/>
      <div className="description">
        <p><span className="book-title">思考と動き</span></p>
        <p>著者：<span className="book-author">H.ベルクソン</span></p>
      </div>
      <Button
        variant="outline-secondary"
        onClick={(event)=>requestBook(event)}
        >この書籍をリクエスト
      </Button>
    </div>
    <div className="coming-lecture-list d-flex flex-row flex-lg-column">
      <img src={bookImg1} className="img-fluid" alt=""/>
      <div className="description">
        <p><span className="book-title">幸福について</span></p>
        <p>著者：<span className="book-author">ショーペンハウエル</span></p>
      </div>
      <Button
        variant="outline-secondary"
        onClick={(event)=>requestBook(event)}
        >この書籍をリクエスト
      </Button>
    </div>
    <div className="coming-lecture-list d-flex flex-row flex-lg-column">
      <img src={bookImg21} className="img-fluid" alt=""/>
      <div className="description">
        <p><span className="book-title">精神のエネルギー</span></p>
        <p>著者：<span className="book-author">H.ベルクソン</span></p>
      </div>
      <Button
        variant="outline-secondary"
        onClick={(event)=>requestBook(event)}
        >この書籍をリクエスト
      </Button>
    </div>
    <div className="coming-lecture-list  d-flex flex-row flex-lg-column">
      <img src={bookImg18}  className="img-fluid" alt=""/>
      <div className="description">
        <p><span className="book-title">哲学原理</span></p>
        <p>著者：<span className="book-author">デカルト</span></p>
      </div>
      <Button
        variant="outline-secondary"
        onClick={(event)=>requestBook(event)}
        >この書籍をリクエスト
      </Button>
    </div>
    <div className="coming-lecture-list d-flex flex-row flex-lg-column">
      <img src={bookImg23} className="img-fluid" alt=""/>
      <div className="description">
        <p><span className="book-title">道徳形而上学の基礎づけ</span></p>
        <p>著者：<span className="book-author">カント</span></p>
      </div>
      <Button
        variant="outline-secondary"
        onClick={(event)=>requestBook(event)}
        >この書籍をリクエスト
      </Button>
    </div>
    <div className="coming-lecture-list d-flex flex-row flex-lg-column">
      <img src={bookImg2}  className="img-fluid" alt=""/>
      <div className="description">
        <p><span className="book-title">知性について</span></p>
        <p>著者：<span className="book-author">ショーペンハウエル</span></p>
      </div>
      <Button
        variant="outline-secondary"
onClick={(event)=>requestBook(event)}
        >この書籍をリクエスト
      </Button>
    </div>
    <div className="coming-lecture-list d-flex flex-row flex-lg-column">
      <img src={bookImg24} className="img-fluid" alt=""/>
      <div className="description">
        <p><span className="book-title">プロレゴメナ</span></p>
        <p>著者：<span className="book-author">カント</span></p>
      </div>
      <Button
        variant="outline-secondary"
        onClick={(event)=>requestBook(event)}
        >この書籍をリクエスト
      </Button>
    </div>
    <div className="coming-lecture-list  d-flex flex-row flex-lg-column">
      <img src={bookImg3} className="img-fluid"  alt=""/>
      <div className="description">
        <p><span className="book-title">自殺について</span></p>
        <p>著者：<span className="book-author">ショーペンハウエル</span></p>
      </div>
      <Button
        variant="outline-secondary"
        onClick={(event)=>requestBook(event)}
        >この書籍をリクエスト
      </Button>
    </div>
    <div className="coming-lecture-list d-flex flex-row flex-lg-column">
      <img src={bookImg26} className="img-fluid" alt=""/>
      <div className="description">
        <p><span className="book-title">まなざしの地獄</span></p>
        <p>著者：<span className="book-author">見田宗介</span></p>
      </div>
      <Button
        variant="outline-secondary"
        onClick={(event)=>requestBook(event)}
        >この書籍をリクエスト
      </Button>
    </div>
    <div className="coming-lecture-list  d-flex flex-row flex-lg-column">
      <img src={bookImg4} className="img-fluid" alt=""/>
      <div className="description">
        <p><span className="book-title">メノン</span></p>
        <p>著者：<span className="book-author">プラトン</span></p>
      </div>
      <Button
        variant="outline-secondary"
        onClick={(event)=>requestBook(event)}
        >この書籍をリクエスト
      </Button>
    </div>
    <div className="coming-lecture-list  d-flex flex-row flex-lg-column">
      <img src={bookImg5}  className="img-fluid" alt=""/>
      <div className="description">
        <p><span className="book-title">饗宴</span></p>
        <p>著者：<span className="book-author">プラトン</span></p>
      </div>
      <Button
        variant="outline-secondary"
        onClick={(event)=>requestBook(event)}
        >この書籍をリクエスト
      </Button>
    </div>
    <div className="coming-lecture-list  d-flex flex-row flex-lg-column">
      <img src={bookImg6}  className="img-fluid" alt=""/>
      <div className="description">
        <p><span className="book-title">国家</span></p>
        <p>著者：<span className="book-author">プラトン</span></p>
      </div>
      <Button
        variant="outline-secondary"
        onClick={(event)=>requestBook(event)}
        >この書籍をリクエスト
      </Button>
    </div>
    <div className="coming-lecture-list  d-flex flex-row flex-lg-column">
      <img src={bookImg13} className="img-fluid"  alt=""/>
      <div className="description">
        <p><span className="book-title">二コマコス倫理学</span></p>
        <p>著者：<span className="book-author">アリストテレス</span></p>
      </div>
      <Button
        variant="outline-secondary"
        onClick={(event)=>requestBook(event)}
        >この書籍をリクエスト
      </Button>
    </div>

  </div>

  return(
    <Container fluid>
      <Row>
        <Col>
          <h4 className="text-center">今後講義予定の古典</h4>
          <p className="text-center mt-3">以下の古典については、皆様からのリクエストに応じ順次開講を予定しています。開講希望の古典がありましたら、以下よりリクエストをお送りください。</p>
          <div>
            {content}
          </div>
        </Col>
      </Row>
    </Container>
  )
}


export default FutureLectures
