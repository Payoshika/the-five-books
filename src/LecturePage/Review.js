import React, {useState, useEffect} from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from "react-bootstrap/Carousel"
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import axios from "axios"

import user1 from "./img/user1.jpeg"
import user2 from "./img/user2.jpeg"
import user3 from "./img/user3.jpeg"
import user4 from "./img/user4.jpeg"

const Review = () => {

  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)
  const [input, setInput] = useState("")

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(5)

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

  const ratingArea =
  <div className="my-3">
    {[...Array(5)].map((star, i) => {
      const ratingValue = i + 1
      return (
        <label>
          <input
            type="radio"
            name="rating"
            value={ratingValue}
            onClick ={() => setRating(ratingValue)}
            />
          <FontAwesomeIcon
            className="star"
            icon={faStar}
            size={"2x"}
            color={ratingValue <= (hover ||rating) ? "#ffc107": "#e4e3e3" }
            onMouseEnter ={() => setHover(ratingValue)}
            onMouseLeave ={() => setHover(null)}
            />
        </label>
      )
      })}
      <span className="mx-3 rating-number">
        {rating}/5
      </span>
    </div>

    const reviewArea =
    <div>
      <Form className="w-100 form-input">
        <p className="my-3">あなたの満足度を教えてください。</p>
        {ratingArea}
        <Form.Group controlId="input-content" className="my-3">
          <Form.Label>レビューコメントをご記入ください</Form.Label>
          <Form.Control
            as="textarea"
            rows="4"
            name="inquiry"
            value={input}
            onChange={(event)=>setInput(event.target.value)}
             />
        </Form.Group>
        <Form.Group className="d-flex justify-content-center">
          <Button
            variant="outline-secondary"
            >レビューを保存
          </Button>
        </Form.Group>
      </Form>
    </div>

    const reviewDone =
    <div>
      <Form className="w-100 form-input">
        <p className="my-3">本講義のあなたの満足度</p>
        {ratingArea}
        <div>
          <p>レビュー内容</p>
          <p>とても面白かった。また受けたい。今度は詩学も受けてみたい。とても面白かった。また受けたい。今度は詩学も受けてみたい。</p>
        </div>
        <Form.Group className="d-flex justify-content-center">
          <Button
            variant="outline-secondary"
            >レビューを修正
          </Button>
        </Form.Group>
      </Form>
    </div>

    const reviewEdit =
    <div>
      <Form className="w-100 form-input">
        <p className="my-3">あなたの満足度を教えてください。</p>
        {ratingArea}
        <Form.Group controlId="input-content" className="my-3">
          <Form.Label>レビューコメントをご記入ください</Form.Label>
          <Form.Control
            as="textarea"
            rows="4"
            name="inquiry"
            value={input}
            onChange={(event)=>setInput(event.target.value)}
             />
        </Form.Group>
        <Form.Group className="d-flex justify-content-center">
          <Button
            variant="outline-secondary"
            >レビューを修正
          </Button>
        </Form.Group>
      </Form>
    </div>

  useEffect(()=>{
    const fetchPosts = async () => {
      setLoading(true)
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setPosts(response.data.slice(0,50))
      setLoading(false)
    }
    fetchPosts()
  },[])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  let reviewResult =
    <div><p>loading...</p></div>

  if (posts.length > 1){
    reviewResult =
      <ul className="list-group mb-4">
        {currentPosts.map(post => {
          return(
            <li key={post.id} className="list-group-item">
              <p>〇〇さん</p>
              <p>{post.body}</p>
              <p>コメント日:10月1日</p>
            </li>
        )})
        }
      </ul>
  }

  const pageNation = (postPerPage, totalPosts) => {
    const pageNumbers = []
     for(let i = 1; i<=Math.ceil(totalPosts / postsPerPage); i++){
       pageNumbers.push(i)
     }
     return(
       <nav className="pagination">
         {pageNumbers.map(number => {
           return(
             <li key={number} className="page-item">
               <span
                 onClick={()=>setCurrentPage(number)}
                 className="page-link">
                 {number}
               </span>
             </li>
           )
         })}
       </nav>
     )
  }

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
      {reviewArea}
      {reviewDone}
      {reviewEdit}
      {content}
      {reviewResult}
      {pageNation(postsPerPage, posts.length)}
    </div>
  )
}


export default Review
