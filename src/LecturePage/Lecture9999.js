import React, {useState, useEffect} from "react"
import {LecturesInfo, Review} from "./index"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import bookImg from "./img/読書について.jpg"
import lecturer_yamano_hiroki from "./img/lecturer_yamano_hiroki.jpg"
import Calendar from 'react-calendar'
import './styles/calender.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import axios from "axios"

const Lecture9999 = () => {
  const [value, onChange] = useState(new Date(2020, 8, 1));
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)
  const [input, setInput] = useState("")
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(5)

  const lectureVideos =
  <div className="video-outer my-3">
    <p>第一回講義</p>
    <iframe
      title="test"
      src="https://player.vimeo.com/video/469189176"
        width="100%" height="360"
        className="video"
       frameborder="0"
       allow="autoplay; fullscreen" allowfullscreen>
    </iframe>
  </div>

  const comingLecture =
  <div className="video-outer my-3">
    <p>第四回講義</p>
    <p>・・・第四回講義後に更新されます。</p>
  </div>

  const lectureTabs =
  <div className="w-100 d-flex flex-column align-items-center">
    <Tabs
      defaultActiveKey="lecture_detail"
      id="uncontrolled-tab-example"
      >
      <Tab
        eventKey="lecture_detail"
        title="講義概要"
        className="w-100"
        >
        <h4 className="text-center my-3">講義スケジュール</h4>
      </Tab>
      <Tab
        className="w-100"
        eventKey="lecture_videos"
        title="講義動画">
        {lectureVideos}
        {lectureVideos}
        {lectureVideos}
        {lectureVideos}
        {comingLecture}
      </Tab>
      <Tab
        className="w-100"
        eventKey="lecture_reviews"
        title="講義レビュー">
          <Review />
      </Tab>
    </Tabs>
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
        <ul className="review-result list-group my-4">
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

  return(
    <Container fluid>
      <Row>
        <Col xs={12}>
          <h4 className="text-center"><b>『書名』</b><br/>
          </h4>
        </Col>
        <Col xs={12}>
        </Col>
        <Col xs={12} className="d-flex flex-column align-items-center justify-content-center mt-3">
          {lectureTabs}
        </Col>
        <Col xs={12} className="d-flex flex-column align-items-center justify-content-center my-3">
          <h4 className="text-center">過去参加者のレビュー</h4>
          {reviewResult}
          {pageNation(postsPerPage, posts.length)}
        </Col>

        <Col>
          <div className="buy-button d-flex justify-content-center mt-3">
            <a href="https://the-five-books-schopenhauer.peatix.com/" className="text-white">  <Button variant="dark" size="lg" block>申込受付を終了しました。<br/>(クリックでpeatixイベントページに遷移します)  </Button></a>
          </div>
        </Col>
      </Row>
    </Container>
  )

}

export default Lecture9999
