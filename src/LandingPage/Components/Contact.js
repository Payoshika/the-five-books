import React, {useState, useEffect} from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from "axios"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [input, setInput] = useState("")

  const submitInquiry = (event) => {
    const apiURL = process.env.REACT_APP_API_URL
    axios.post(`${apiURL}/contact`, {user:{
      name: name,
      email: email,
      content: input,
      contact_genre: document.getElementById("contact-genre").value
    }})
    .then(response => {
        if (response.data.contacted === true) {
          document.querySelector(".contact").getElementsByTagName("button")["0"].innerText = "お問い合わせを送信いたしました"
          setName("")
          setEmail("")
          setInput("")
        }
        else if (response.data.subscribed === false){
            document.querySelector(".register-text").innerHTML = `</p>${response.data.message}<p>`
        }
      }
    )
    .catch(error =>{
      console.log(error);
    })
    event.preventDefault()
    event.stopPropagation()
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
          <option value="サービスの利用に関して">サービスの利用に関して</option>
          <option value="講師登録について">講師登録に関して</option>
          <option value="メディアからのお問い合わせ">メディアからのお問い合わせ</option>
          <option value="採用に関して">採用に関して</option>
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
          onClick={(event)=>submitInquiry(event)}
          >送信
        </Button>
      </Form.Group>
    </Form>

  return(
    <Container fluid>
      <Row>
        <Col id="contact" className="contact d-flex flex-column align-items-center justify-content-center">
          <h4 className="text-center"><u>お問い合わせ</u></h4>
          {content}
        </Col>
      </Row>
    </Container>
  )
}


export default Contact
