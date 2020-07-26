import React, {useState, useEffect} from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'
import axios from "axios"

const BookRequest = () => {
  const [input, setInput] = useState("")
  const [searchResult, setSearchResult] = useState("")

  const searchArea =
  <div className="d-flex justify-content-center">
    <InputGroup className="register">
      <Form.Control
        type="text"
        placeholder="書籍名を記入"
        value={input}
        onChange={(event)=>setInput(event.target.value)}/>
      <InputGroup.Prepend>
        <Button
          variant="outline-secondary"
          onClick={()=>searchBook()}
          >探す</Button>
      </InputGroup.Prepend>
    </InputGroup>
  </div>

  const searchBook = () => {
    if (input && input.length >= 2){
      let searchUrl = encodeURI(`https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?applicationId=1025599016601623375&title=${input}`)
      axios.get(searchUrl)
      .then(response => setSearchResult(response.data["Items"]))
    }
  }

  const searchResultDisplay = () => {
    if (searchResult){
      return(
        <div className="d-flex justify-content-center">
          <ListGroup>
            {searchResult.slice(0,8).map(books => { return(
              <ListGroup.Item
              key={books["Item"]["title"]}
              className="searched-items d-flex justify-content-start flex-nowrap"
              >
              <div className="book-name">「{books["Item"]["title"]}」</div>
              <div className="book-author"> 著者:{books["Item"]["author"]}</div>
              <div className="book-publisher">   {books["Item"]["publisherName"]}</div>
              <div className="book-img-url d-none">{books["Item"]["largeImageUrl"]}</div>
              <div className="book-url d-none">{books["Item"]["itemUrl"]}</div>
              <Button
                variant="outline-secondary"
                className="text-nowrap ml-auto"
                onClick={(event)　=> requestBook(event)}
                >リクエスト
              </Button>
            </ListGroup.Item>
            )}
          )}
          </ListGroup>
        </div>
        )
      }
      else {
        return (
          <div></div>
        )
      }
    }

  useEffect(() => {
    searchResultDisplay()
     }, [searchResult]);

  const requestBook = (event) => {
    // request sent to rails
    const apiUrl = "http://localhost:3001/book_request"
    axios.post(apiUrl, {
        book: {
          name: event.target.parentNode.querySelector(".book-name").innerHTML,
          author: event.target.parentNode.querySelector(".book-author").innerHTML,
          publisher: event.target.parentNode.querySelector(".book-publisher").innerHTML,
          img_url: event.target.parentNode.querySelector(".book-img-url").innerHTML,
          book_url: event.target.parentNode.querySelector(".book-url").innerHTML
        }
    })
    .then(
      response => console.log(response.data),
      event.target.parentNode.innerHTML = "リクエストしました。")
    .then(
      setTimeout((()=>{setSearchResult("")}), 1000))
  }

  return(
    <Container fluid>
      <Row>
        <Col className="d-flex flex-column justify-content-center align-contents-center">
          <h4 className="text-center">講義を受けたい古典をリクエストする</h4>
          {searchArea}
          {searchResultDisplay()}
        </Col>
      </Row>
    </Container>
  )

}

export default BookRequest
