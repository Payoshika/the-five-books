import React, {useState} from "react"
import {Link} from 'react-router-dom';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from "axios"

const UserRegister = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password_confirmation, setPasswordConfirmation] = useState("")

  const register =
  <div className="register-menu w-100">
    <Form className="form-input">
      <Form.Group controlId="name" required>
        <Form.Label>お名前</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          placeholder="お名前をご記入ください"
          onChange={(event) => setName(event.target.value)}
          />
      </Form.Group>
      <Form.Group controlId="email"  required>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={email}
          placeholder="email@gmail.com"
          onChange = {(event) => setEmail(event.target.value)}
           />
      </Form.Group>
      <Form.Group controlId="password" required>
        <Form.Label>パスワード</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={password}
          placeholder="アルファベットと数字双方を含めてください"
          onChange = {(event) => setPassword(event.target.value)}
           />
      </Form.Group>
      <Form.Group controlId="password_confirmation" required>
        <Form.Label>パスワードの再確認</Form.Label>
        <Form.Control
          type="password"
          name="password_confirmation"
          value={password_confirmation}
          placeholder="パスワードをもう一度間違いなくご記入ください"
          onChange = {(event) => setPasswordConfirmation(event.target.value)}
           />
      </Form.Group>
      <Form.Group className= {`d-flex justify-content-center`}>
        <Button
          variant="dark"
          type="submit"
          onClick={(event)=>userRegistration(event)}
          >登録する
        </Button>
        <Button
          variant="outline-secondary"
          type="submit"
          ><Link to="./">キャンセル</Link>
        </Button>
      </Form.Group>
    </Form>
  </div>

  const login =
    <div className="register-menu w-100">
    <Form className="form-input">
      <Form.Group controlId="email"  required>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={email}
          placeholder="email@gmail.com"
          onChange = {(event) => setEmail(event.target.value)}
           />
      </Form.Group>
      <Form.Group controlId="password" required>
        <Form.Label>パスワード</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={password}
          placeholder="アルファベットと数字双方を含めてください"
          onChange = {(event) => setPassword(event.target.value)}
           />
      </Form.Group>
      <Form.Group className= {`d-flex justify-content-center`}>
        <Button
          variant="light"
          type="submit"
          onClick={(event)=>userLogin(event)}
          >ログイン
        </Button>
        <Button
          variant="outline-secondary"
          type="submit"
          ><Link to="./">キャンセル</Link>
        </Button>
      </Form.Group>
    </Form>
  </div>

  const userRegistration = (event) => {
    const apiURL = process.env.REACT_APP_API_URL
    axios.post(
      `${apiURL}/user`,
      {user: {
          name: name,
          email: email,
          password: password,
          password_confirmation: password_confirmation
        }
      },
      {withCredentials: true}
    )
    .then(response => {
      if (response.data.status === "created" ){
        console.log("ユーザー登録が完了しました。");
        userLogin()
      }
    })
    .catch(error => {
      console.log("ユーザー登録エラー", error)}
    )
    event.preventDefault()
  }

  const userLogin = (event) =>{
    const apiURL = process.env.REACT_APP_API_URL
    axios.post(
      `${apiURL}/session`,
      {user: {
          email: email,
          password: password,
        }
      },
      {withCredentials: true}
    )
    .then(response => {
      if(response.data.logged_in === true){
        console.log("ログインが完了しました。", response.data.user);
        props.handleLogin(response.data)
        props.history.push("./")
      }
    })
    .catch(error => {
      console.log("ログインエラー", error)}
    )
    event.preventDefault()
  }
  return(
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <Tabs
        defaultActiveKey="register"
        id="uncontrolled-tab-example"
        >
        <Tab eventKey="register" title="新規登録">
          {register}
        </Tab>
        <Tab eventKey="login" title="ログイン">
          {login}
        </Tab>
      </Tabs>
    </div>
  )
}

export default UserRegister
