import React, {useState ,useEffect} from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import {Pagination, PastLecture} from "../index"

const MyCourse = (props) => {
  const {lectures, getFormatDate} = props
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(4)
  const insertPost = []
  const [posts, setPosts] = useState([])
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const pastLectureMap = () =>{
    Object.keys(lectures).map(
        (keys, index) => {
          if ((lectures[`${keys}`].lectureEndDate < new Date())){
            insertPost.push(lectures[`${keys}`])
          }
          return (
            setPosts(insertPost)
          )
        }
      )
  }

  useEffect(() => {
    pastLectureMap()
 },[])

  const paginate = (event) => {
    const number = Number(event.target.firstChild.textContent)
    setCurrentPage(number)
  }

  const futureLecture =
  <div className="d-flex flex-column justify-content-center align-items-center">
    {Object.keys(lectures).map(
      (keys) => {
        return (
          (lectures[`${keys}`].lectureStartDate > new Date())?
          <div className="d-flex justify-content-start align-items-center my-3 pb-4 border-bottom w-100">
            <div className="book-img-container d-flex justify-content-center align-contents-center">
              <Image src="https://via.placeholder.com/150" fluid />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <p>書籍：{lectures[`${keys}`].book.name}</p>
              <p>著者：{lectures[`${keys}`].book.author}</p>
              <p>開講期間：&nbsp;{getFormatDate(lectures[`${keys}`].lectureStartDate).slice(4,6)}月{getFormatDate(lectures[`${keys}`].lectureStartDate).slice(6,9)}日&nbsp;~&nbsp;
              {getFormatDate(lectures[`${keys}`].lectureEndDate).slice(4,6)}月{getFormatDate(lectures[`${keys}`].lectureEndDate).slice(6,9)}日</p>
            </div>
            <div class="status d-flex flex-column justify-content-center align-items-center">
              <p>参加人数：10名</p>
              <Button></Button>
            </div>
          </div>
          :""
        )
      }
    )}
  </div>

  const ongoingLecture =
  <div className="d-flex flex-column justify-content-center align-items-center">
    {Object.keys(lectures).map(
      (keys, index) => {
        return (
          (lectures[`${keys}`].lectureStartDate <= new Date() && lectures[`${keys}`].lectureEndDate >= new Date())?
          <div className="d-flex justify-content-start align-items-center my-3 pb-4 border-bottom w-100">
            <div className="book-img-container d-flex justify-content-center align-contents-center">
              <Image src="https://via.placeholder.com/150" fluid />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <p>書籍：{lectures[`${keys}`].book.name}</p>
              <p>著者：{lectures[`${keys}`].book.author}</p>
              <p>開講期間：&nbsp;{getFormatDate(lectures[`${keys}`].lectureStartDate).slice(4,6)}月{getFormatDate(lectures[`${keys}`].lectureStartDate).slice(6,9)}日&nbsp;~&nbsp;
              {getFormatDate(lectures[`${keys}`].lectureEndDate).slice(4,6)}月{getFormatDate(lectures[`${keys}`].lectureEndDate).slice(6,9)}日</p>
            </div>
          </div>
          :""
        )
      }
    )}
  </div>

  const pastLecture =
  <div className="d-flex flex-column justify-content-center align-items-center">
    {Object.keys(lectures).map(
      (keys) => {
        return (
          (lectures[`${keys}`].lectureEndDate < new Date())?
          <div className="d-flex justify-content-start align-items-center my-3 pb-4 border-bottom w-100">
            <div className="book-img-container d-flex justify-content-center align-contents-center">
              <Image src="https://via.placeholder.com/150" fluid />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <p>書籍：{lectures[`${keys}`].book.name}</p>
              <p>著者：{lectures[`${keys}`].book.author}</p>
              <p>開講期間：&nbsp;{getFormatDate(lectures[`${keys}`].lectureStartDate).slice(4,6)}月{getFormatDate(lectures[`${keys}`].lectureStartDate).slice(6,9)}日&nbsp;~&nbsp;
              {getFormatDate(lectures[`${keys}`].lectureEndDate).slice(4,6)}月{getFormatDate(lectures[`${keys}`].lectureEndDate).slice(6,9)}日</p>
            </div>
          </div>
          :""
        )
      }
    )}
  </div>

  const lecrureDisplay =
  <div>
    <Tabs
      defaultActiveKey="now_taking"
      id="uncontrolled-tab-example"
      className="justify-content-center"
      >
      <Tab eventKey="now_taking" title=" 新規 ">
        {futureLecture}
      </Tab>
      <Tab eventKey="will_take" title=" 実施中 ">
        {ongoingLecture}
      </Tab>
      <Tab eventKey="has_taken" title=" 実施済 ">
        <PastLecture
          currentPosts = {currentPosts}
          getFormatDate = {getFormatDate}
          currentPage = {currentPage}
          />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate = {paginate}
          />
      </Tab>
    </Tabs>
  </div>

  return(
    <Container fluid>
      <Row>
        <Col>
          {lecrureDisplay}
        </Col>
      </Row>
    </Container>
  )
}

export default MyCourse
