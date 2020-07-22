import React, {useState} from "react"
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Register = () => {
  const [email, setEmail] = useState("")

  const registerMessage =
  <div className="text-center">
    <p>ニュースレターに登録する。</p>
  </div>

  const formArea =
  <InputGroup className="register mb-3">
    <Form.Control
      type="email"
      placeholder="メールアドレスを記入"
      value={email}
      onChange={(event)=>setEmail(event.target.value)}/>
    <InputGroup.Prepend>
      <Button variant="outline-secondary">登録</Button>
    </InputGroup.Prepend>
  </InputGroup>

  return(
    <div className="d-flex flex-column align-items-center">
      {registerMessage}
      {formArea}
    </div>
  )
}
export default Register
