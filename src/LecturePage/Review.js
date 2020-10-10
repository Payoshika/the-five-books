import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from "react-bootstrap/Carousel"
import Image from 'react-bootstrap/Image'
import user1 from "./img/user1.jpeg"
import user2 from "./img/user2.jpeg"
import user3 from "./img/user3.jpeg"
import user4 from "./img/user4.jpeg"

const Review = () => {

  const review1 =
  <div className="review-content d-flex justify-content-center align-items-center">
    <Image src={user1} width="100" height="100" fluid/>
    <div className="review-content d-flex flex-column justify-content-center align-items-center ml-3">
      <p className="lecturer-message">たぶん一人では読まない本を、専門家とともに読み進めていくことは貴重な経験でした。本を読んで、講義を聞いて、Slackで他の受講生の方のコメントを読んで、多くの刺激をもらいました。</p>
    </div>
  </div>

  const review2 =
  <div className="review-content d-flex justify-content-center align-items-center">
    <Image src={user2} width="100" height="100" fluid/>
    <div className="review-content d-flex flex-column justify-content-center align-items-center ml-3">
      <p className="lecturer-message">おそい読書体験、とても実りの多い時間でした。自分ひとりで読んだだけでは思いつかないような視点を発見したり、先生や他の参加者のコメントに深く考えさせられたりしますので、ぜひ他の方にもお勧めしたいです。</p>
    </div>
  </div>

  const review3 =
  <div className="review-content d-flex justify-content-center align-items-center">
    <Image src={user3} width="100" height="100" fluid/>
    <div className="review-content d-flex flex-column justify-content-center align-items-center ml-3">
      <p className="lecturer-message">1作の著述、しかも哲学書をこれだけ読み込むことは一人ではとてもできないので、とても面白かったです。</p>
    </div>
  </div>

  const review4 =
  <div className="review-content d-flex justify-content-center align-items-center">
    <Image src={user4} width="100" height="100" fluid/>
    <div className="review-content d-flex flex-column justify-content-center align-items-center ml-3">
      <p className="lecturer-message">とても内容が濃く、テンポもよかった。受講生の議論に対する講師のフィードバックもクリアで充実していた。最終講義を終えたとき、手元に読み終わった本があり、その中に思考した記憶が一緒に残っているのを感じて、自分の中に本が「根を下ろしていく」体験の端緒を見た気がした。</p>
    </div>
  </div>

  const content =
  <Carousel>
    <Carousel.Item>
      {review1}
    </Carousel.Item>
    <Carousel.Item>
      {review2}
    </Carousel.Item>
    <Carousel.Item>
      {review3}
    </Carousel.Item>
    <Carousel.Item>
      {review4}
    </Carousel.Item>
  </Carousel>

  return(
    <div className="reviews d-flex flex-column align-items-center justify-content-center">
      {content}
    </div>
  )
}


export default Review
