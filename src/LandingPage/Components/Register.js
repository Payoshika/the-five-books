import React, {useState} from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios"

const Register = () => {
  const [email, setEmail] = useState("")

  const subscribe = () => {
    const url = "http://localhost:3000/subscribe"
    axios.post(url, {email:{email: email}})
    .then(response => {
        if (response.data.subscribed === true) {
          document.querySelector(".register-text").innerHTML = "<p>ニュースレーターの登録が完了しました。</p>"
          setEmail("")
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

  const formArea =
  <div className="d-flex flex-column align-items-center">
    <div className="register">
      <div className="register-text text-center">
        <p>ニュースレターに登録して最新の講義情報を受け取る。</p>
      </div>
      <InputGroup>
        <Form.Control
          type="email"
          placeholder="メールアドレスを記入"
          name="email"
          value={email}
          onChange={(event)=>setEmail(event.target.value)}/>
        <InputGroup.Prepend>
          <Button
            variant="outline-secondary"
            onClick={()=>subscribe()}
            >登録</Button>
        </InputGroup.Prepend>
      </InputGroup>
    </div>
  </div>

  return(
    <Container fluid>
      <Row>
        <Col>
          {formArea}
        </Col>
      </Row>
    </Container>
  )
}
export default Register
