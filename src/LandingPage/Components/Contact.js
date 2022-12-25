import React, {useState} from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from "axios"
const headers = {
  mode: 'no-cors',
'Access-Control-Allow-Origin': 'https://www.the-five-books.com',
'Content-Type': "application/x-www-form-urlencoded",
withCredentials: true,
credentials: 'same-origin',
}

const Contact = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [input, setInput] = useState("")

  const submitInquiry = (event) => {
    document.querySelector(".contact").getElementsByTagName("button")["0"].innerText = "送信しています..."
    const data = {user:{
      name: name,
      email: email,
      content: input,
      contact_genre: document.getElementById("contact-genre").value
    }}
    const apiURL = "https://script.google.com/macros/s/AKfycbyoSn2vON2Flfz8y_QRsPKYltT_IR8yTH8hiPUIOrLyLUrBziUPx77h3F5GCmkG0Y7x/exec"
    var postparam =
      {
        "method"     : "POST",
        "mode"       : "no-cors",
        "Content-Type" : "application/x-www-form-urlencoded",
        "body" : JSON.stringify(data)
      };
      fetch(apiURL, postparam)
      .then(response => {
          if (response) {
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

    // axios.post(`${apiURL}`,{headers},testData)
    // .then(response => {
    //     if (response.data.contacted === true) {
    //       document.querySelector(".contact").getElementsByTagName("button")["0"].innerText = "お問い合わせを送信いたしました"
    //       setName("")
    //       setEmail("")
    //       setInput("")
    //     }
    //     else if (response.data.subscribed === false){
    //         document.querySelector(".register-text").innerHTML = `</p>${response.data.message}<p>`
    //     }
    //   }
    // )
    // .catch(error =>{
    //   console.log(error);
    // })
    // event.preventDefault()
    // event.stopPropagation()
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
          <option value="その他のお問い合わせ">その他のお問い合わせ</option>
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
          <input type="hidden" name="recaptcha_response" id="recaptchaResponse" />
        </Col>
      </Row>
    </Container>
  )
}


export default Contact
