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
  <InputGroup className="register mb-3">
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
        <ListGroup>
          {searchResult.slice(0,11).map(books => { return(
            <ListGroup.Item key={books["Item"]["title"]}>
            書籍名：{books["Item"]["title"]}
            著者:{books["Item"]["author"]}
            出版社:{books["Item"]["publisherName"]}
            <Button
              variant="outline-secondary"
              onClick={(event)　=> requestBook(event)}
              >リクエストする
            </Button>
          </ListGroup.Item>
          )}
        )}
        </ListGroup>
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
    console.log(event);
  }


  return(
    <Container>
      <Row>
        <Col>
          {searchArea}
          {searchResultDisplay()}
        </Col>
      </Row>
    </Container>
  )

}

export default BookRequest
