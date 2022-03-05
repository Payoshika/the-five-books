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
    document.querySelector(".register-text").innerHTML =
    "<p>登録しています...</p>"
    const apiURL = process.env.REACT_APP_API_URL
    axios.post(`${apiURL}/subscribe`, {email:{email: email}})
    .then(response => {
      console.log(response.data.subscribed);
        if (response.data.subscribed === true) {
          document.querySelector(".register-text").innerHTML = "<p>ニュースレターの登録が完了しました。メールをご確認ください。</p>"
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
    <div className="register bottom-border">
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
            className="ml-1"
            variant="outline-dark"
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
