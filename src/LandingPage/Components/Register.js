import React, {useState} from "react"
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Register = () => {
  const [email, setEmail] = useState("")

  const formArea =
  <div className="register">
    <div>
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

  return(
    <div className="d-flex flex-column align-items-center">
      {formArea}
    </div>
  )
}
export default Register
