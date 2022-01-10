import React, {useState} from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from "axios"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [expertise, setExpertise] = useState("")
  const [affiliation, setAffiliation] = useState("")
  const [researchMap, setResearchMap] = useState("")
  const [books, setBooks] = useState("")

  const submitButton = () => {
    document.querySelector(".contact").getElementsByTagName("button")["0"].innerText = "資料を請求する"
  }

  const submitInquiry = (event) => {
    if(name.length === 0 || email.length === 0|| affiliation.length === 0 || expertise.length === 0 || researchMap.length === 0){
      document.querySelector(".contact").getElementsByTagName("button")["0"].innerText = "未記入の欄があります。"
      setTimeout(submitButton, 3000)
    }
    else {
      document.querySelector(".contact").getElementsByTagName("button")["0"].innerText = "送信しています..."
      const apiURL = process.env.REACT_APP_API_URL
      axios.post(`${apiURL}/lecturer_inquiery`, {user:{
        name: name,
        email: email,
        contact_genre: "講師登録に関して",
        expertise: expertise,
        affiliation: affiliation,
        research_map_url: researchMap,
        content: books
      }})
      .then(response => {
          if (response.data.contacted === true) {
            document.querySelector(".contact").getElementsByTagName("button")["0"].innerText = "資料請求を行いました。"
            setName("")
            setEmail("")
            setExpertise("")
            setAffiliation("")
            setResearchMap("")
            setBooks("")
          }
          else if (response.data.subscribed === false){
              document.querySelector(".register-text").innerHTML = `</p>${response.data.message}<p>`
          }
        }
      )
      .catch(error =>{
        console.log(error);
      })
    }
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
    <Form.Group controlId="expertise" required>
      <Form.Label>ご専門</Form.Label>
      <Form.Control
        type="text"
        name="expertise"
        value={expertise}
        placeholder="ご専門"
        onChange={(event) => setExpertise(event.target.value)}
        />
    </Form.Group>
    <Form.Group controlId="affiliation" required>
      <Form.Label>ご所属</Form.Label>
      <Form.Control
        type="text"
        name="affiliation"
        value={affiliation}
        placeholder="ご所属"
        onChange={(event) => setAffiliation(event.target.value)}
        />
    </Form.Group>
    <Form.Group controlId="researchMap" required>
      <Form.Label>reseachmap URL (ご経歴が閲覧可能であるURL)</Form.Label>
      <Form.Control
        type="text"
        name="researchMap"
        value={researchMap}
        placeholder="URLを貼り付けてください"
        onChange={(event) => setResearchMap(event.target.value)}
        />
    </Form.Group>
    <Form.Group controlId="input-content">
      <Form.Label>講義を検討できる古典</Form.Label>
      <Form.Control
        as="textarea"
        rows="2"
        name="books"
        value={books}
        placeholder="一冊でも複数でも構いません。研究者以外にあまり知られていない書籍も歓迎しております。"
        onChange={(event)=>setBooks(event.target.value)}
         />
    </Form.Group>
    <Form.Group className="contact d-flex justify-content-center">
      <Button
        variant="outline-secondary"
        onClick={(event)=>submitInquiry(event)}
        >資料を請求する
      </Button>
    </Form.Group>
  </Form>

  return(
    <Container fluid>
      <Row>
        <Col className="contact d-flex flex-column align-items-center justify-content-center">
          <h4 className="text-center"><u>詳細資料の請求</u></h4>
          <div className="story d-flex flex-column align-items-center justify-content-center bottom-border">
            <p className="text-center">メールにて詳細資料をお送りいたします。<br/>以下にご記入のうえ、資料請求ボタンを押してください。</p>
          </div>
          {content}
        </Col>
      </Row>
    </Container>
  )
}


export default Contact
