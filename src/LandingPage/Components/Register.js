import React, {useState} from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Register = () => {
  const [email, setEmail] = useState("")

  const formArea =
  <div className="d-flex flex-column align-items-center">
    <div className="register">
      <div className="text-center">
        <p>ニュースレターに登録して最新の講義情報を受け取る。</p>
      </div>
      <InputGroup>
        <Form.Control
          type="email"
          placeholder="メールアドレスを記入"
          value={email}
          onChange={(event)=>setEmail(event.target.value)}/>
        <InputGroup.Prepend>
          <Button variant="outline-secondary">登録</Button>
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
