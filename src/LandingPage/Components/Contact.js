import React, {useState, useEffect} from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [input, setInput] = useState("")

  const submitInquiry = () => {
    // to be determined to BKEND
  }

  const content =
    <Form className="form-input">
      <Form.Group controlId="name" required>
        <Form.Label>お名前</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          placeholder="お名前"
          onChange={(event) => setName(event.target.value)}
          />
      </Form.Group>
      <Form.Group controlId="contact-genre" required>
        <Form.Label>お問い合わせカテゴリ</Form.Label>
        <Form.Control as="select"  name="inquiry_genre">
          <option value="サービスの利用について">サービスの利用について</option>
          <option value="講師登録・講義実施について">講師登録・講義実施について</option>
          <option value="メディアについてのお問い合わせ">メディアについてのお問い合わせ</option>
          <option value="採用について">採用について</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="email" required>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={email}
          placeholder="email@gmail.com"
          onChange = {(event) => setEmail(event.target.value)}
           />
      </Form.Group>
      <Form.Group controlId="input-content" required>
        <Form.Label>お問い合わせ内容</Form.Label>
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
          type="submit"
          onClick={()=>submitInquiry()}
          >送信
        </Button>
      </Form.Group>
    </Form>

  return(
    <Container fluid>
      <Row>
        <Col id="contact" className="contact d-flex flex-column align-items-center justify-content-center">
          <h4 className="text-center">お問い合わせ</h4>
          {content}
        </Col>
      </Row>
    </Container>
  )
}


export default Contact
