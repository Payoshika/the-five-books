import React, {useState} from "react"
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
  const [searchResult, setSearchResult] = useState(<div></div>)

  const searchArea =
  <div className="d-flex justify-content-center">
    <InputGroup className="register">
      <Form.Control
        type="text"
        placeholder="書籍名を記入"
        value={input}
        onChange={(event)=>setInput(event.target.value)}
        onKeyPress= {(event)=>checkEnter(event)}
        />
      <InputGroup.Prepend>
        <Button
          variant="outline-secondary"
          onClick={()=>searchBook()}
          >探す</Button>
      </InputGroup.Prepend>
    </InputGroup>
  </div>

  const checkEnter = (event) => {
    event.preventDefault()
    event.stopPropagation()
    console.log("checking", event);
    if (event.keyCode === 13 ){
      searchBook()
    }
  }

  const searchBook = () => {
    if (input && input.length >= 2){
      let searchUrl = encodeURI(`https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?applicationId=1025599016601623375&title=${input}`)
      axios.get(searchUrl)
      .then(response => setSearchResult(
        response.data["Items"].slice(0,8).map(books => { return(
          <ListGroup.Item
          key={books["Item"]["title"]}
          className="searched-items d-flex justify-content-start flex-nowrap　overflow-hidden"
          >
          <div className="book-name"><p>「{books["Item"]["title"]}」</p></div>
          <div className="book-author"><p>{books["Item"]["author"]}</p></div>
          <div className="book-publisher"><p>{books["Item"]["publisherName"]}</p></div>
          <div className="book-img-url d-none"><p>{books["Item"]["largeImageUrl"]}</p></div>
          <div className="book-url d-none"><p>{books["Item"]["itemUrl"]}</p></div>
          <Button
            variant="outline-secondary"
            className="text-nowrap ml-auto"
            onClick={(event)　=> requestBook(event)}
            >リクエスト
          </Button>
        </ListGroup.Item>
      )})
      )
      )
    }
  }

  const requestBook = (event) => {
    event.preventDefault();
    const url = "http://localhost:3000/book_create"
    let book  = {
          name: ` ${event.target.parentNode.querySelector(".book-name").innerHTML}`,
          author: `${event.target.parentNode.querySelector(".book-author").innerHTML}`,
          publisher: `${event.target.parentNode.querySelector(".book-publisher").innerHTML}`,
          img_url: `${event.target.parentNode.querySelector(".book-img-url").innerHTML}`,
          book_url: `${event.target.parentNode.querySelector(".book-url").innerHTML
          }`
        }
    axios.post(url, {book: book})
    .then(
      response => console.log(response.data),
      event.target.parentNode.innerHTML = "リクエストしました。")
    .then(
      setTimeout((()=>{setSearchResult(<div></div>)}), 1000))
    .catch(error => console.log(error))
  }

  return(
    <Container fluid>
      <Row>
        <Col className="d-flex flex-column justify-content-center align-contents-center">
          <h4 className="text-center">講義を受けたい古典をリクエストする</h4>
            {searchArea}
          <div className="d-flex justify-content-center">
            <ListGroup>
              {searchResult}
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  )

}

export default BookRequest
