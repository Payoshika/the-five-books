import React, {useState} from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
const headers = {
  mode: 'no-cors',
'Access-Control-Allow-Origin': 'https://www.the-five-books.com',
'Content-Type': "application/x-www-form-urlencoded",
withCredentials: true,
credentials: 'same-origin',
}
const BookRequest = () => {
  const [input, setInput] = useState("")
  const [searchResult, setSearchResult] = useState(<div></div>)

  const searchArea =
  <div className="d-flex justify-content-center">
    <InputGroup className="register bottom-border">
      <Form.Control
        type="text"
        placeholder="書籍名を記入"
        value={input}
        onChange={(event)=>setInput(event.target.value)}
        onKeyPress= {(event)=>checkEnter(event)}
        />
      <InputGroup.Prepend>
        <Button
          className="ml-1"
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

  const deleteSerach = (event) => {
    event.preventDefault();
    setSearchResult(<div></div>)
    setInput("")
  }

  const searchBook = () => {
    if (input && input.length >= 2){
      let searchUrl = encodeURI(`https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?applicationId=1025599016601623375&title=${input}`)
      axios.get(searchUrl)
      .then(response => {
        (response.data["Items"].length === 0)? setSearchResult(
          <div>
            <p>お探しの書籍が見つかりません。別のキーワードで検索してください。</p>
          </div>
        ):
        setSearchResult(
          <div className="border rounded-top rounded-bottom">
            <div className="border-0 delete-area d-flex align-contents-right justify-content-center"  onClick={(event)　=> deleteSerach(event)}>
              <p className="h3 pt-2"> <FontAwesomeIcon icon={faCaretUp}/></p>
            </div>
            {response.data["Items"].slice(0,8).map(books => {
              return(
                <ListGroup.Item
                key={books["Item"]["title"]}
                className="border-0 searched-items d-flex justify-content-start flex-nowrap　overflow-hidden"
                >
                <div className="book-name"><p>{books["Item"]["title"]}</p></div>
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
          )})}
          </div>
      )
      }
      )
    }
  }
  // axios.post(`${apiURL}/book_create`, {book: book})
  const requestBook = (event) => {
    event.preventDefault();
    let book = {book:{
      name: `${event.target.parentNode.querySelector(".book-name").innerText}`,
      author: `${event.target.parentNode.querySelector(".book-author").innerText}`,
      publisher: `${event.target.parentNode.querySelector(".book-publisher").innerText}`,
      img_url: `${event.target.parentNode.querySelector(".book-img-url").innerText}`,
      book_url: `${event.target.parentNode.querySelector(".book-url").innerText}`
    }}
    const apiURL = process.env.CUSTOMER_INQUIRY_URL
    var postparam =
      {
        "method"     : "POST",
        "mode"       : "no-cors",
        "Content-Type" : "application/x-www-form-urlencoded",
        "body" : JSON.stringify(book)
      };
    fetch(apiURL, postparam)
    .then(
      response => console.log(response.data),
      event.target.parentNode.innerText = "リクエストしました。")
    .then(
      setInput(""),
      setTimeout((()=>{setSearchResult(<div></div>)}), 1000))
    .catch(error => console.log(error))
  }

  return(
    <Container fluid>
      <Row>
        <Col className="d-flex flex-column justify-content-center align-contents-center mt-3">
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
