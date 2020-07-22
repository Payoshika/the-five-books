import React, {useState, useEffect} from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [input, setInput] = useState("")

  const content =
    <Form>
      <Form.Group controlId="name" required>
        <Form.Label>お名前</Form.Label>
        <Form.Control
          type="text"
          value={name}
          placeholder="お名前"
          onChange={(event) => setName(event.target.value)}
          />
      </Form.Group>
      <Form.Group controlId="contact-genre" required>
        <Form.Label>お問い合わせカテゴリ</Form.Label>
        <Form.Control as="select">
          <option value="サービスの利用について">サービスの利用について</option>
          <option value="講師登録・講義実施について">講師登録・講義実施について</option>
          <option value="メディアについてのお問い合わせ">メディアについてのお問い合わせ</option>
          <option value="採用について">採用について</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="email"  required>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
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
          value={input}
          onChange={(event)=>setInput(event.target.value)}
           />
      </Form.Group>
    </Form>

  return(
    <Container>
      <Row>
        <Col>
          <h2>お問い合わせ</h2>
          {content}
        </Col>
      </Row>
    </Container>
  )
}


export default Contact
