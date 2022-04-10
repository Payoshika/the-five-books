import React, {ReactDOM, useState} from "react"
import {Link} from "react-router-dom"
import {LecturesInfo} from "./index.js"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
import ReactMarkdown from 'react-markdown'
import axios from "axios"

const PastLectures = (props) => {
  const {params} = props.match
  const pageId = parseInt(params.id)

  // 講義の重複を除いたarrayを作成
  let multipleArray = []
  let filteredLectures = []
  let multipleLectureOmitted = LecturesInfo.forEach((eachLecture, index) => {
      if(multipleArray.includes(eachLecture.book.name)){
      }
      else{
        multipleArray.push(eachLecture.book.name)
        filteredLectures.push(eachLecture)
      }
  })

  // LectureListをバラバラのランダムにする。
    // arrayをシャッフルするファンクション
  const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const randomeOrderLectures = shuffle(filteredLectures)


  // 書籍リクエストの機能をBookRequestから持ってくる。
  const requestBook = (event, targetBook) => {
    event.preventDefault();
    const apiURL = process.env.REACT_APP_API_URL
    let book  = {
          name: `${targetBook.name}`,
          author: `${targetBook.author}`,
          publisher: `${""}`,
          img_url: `${""}`,
          book_url: `${""}`
        }
    axios.post(`${apiURL}/book_create`, {book: book})
    .then(
      response => console.log(response.data),
      event.target.innerText = "リクエスト完了",
      event.target.className = "btn after-request")
    .catch(error => console.log(error))
  }


  // LecturesInfoより講義のリストを作成する。
  const lectureList =
  <div className="d-flex justify-content-center flex-wrap">
    {randomeOrderLectures.map((eachLecture, index) => {
      return (
        (eachLecture.lecture.lectureEndDate < new Date())?
          <div className="book-container d-flex flex-column justify-content-center align-items-center flex-wrap mb-3">
            <Link to= {`/lecture/${eachLecture.id}`}>
              <div className="book-img-container mb-2">
                <Image src={require(`${eachLecture.book.image}`)} fluid />
              </div>
            </Link>
            <div className="book-info mx-3">
              <div className="d-flex flex-column justify-content-center align-items-center flex-wrap">
                <div className="mt-1 mb-2"><span><b>『{eachLecture.book.name}』</b></span></div>
                <Link className="mb-2" to= {`/lecture/${eachLecture.id}`}>
                  <Button
                    variant=""
                    className="text-nowrap ml-auto"
                    ><span>講義概要を見る</span>
                  </Button>
                </Link>
                <div className="mb-2">
                  <a href={eachLecture.book.amazonAffiliateUrl}>
                    <Button
                      variant=""
                      className="text-nowrap ml-auto"
                      ><span>書籍を購入する</span>
                    </Button>
                  </a>
                </div>
                <div className="mb-2">
                  <Button
                    variant=""
                    className="text-nowrap ml-auto"
                    onClick={(event)　=> requestBook(event, eachLecture.book)}
                    >講義リクエスト
                  </Button>
                </div>
              </div>
            </div>
          </div>
      : "")
    })
    }
  </div>

    return(
      <Container fluid>
        <Row>
          <Col>
          <h4 className="text-center my-4">過去の講義一覧</h4>
          {lectureList}
          </Col>
        </Row>
      </Container>
    )
}

export default PastLectures
