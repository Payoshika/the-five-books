import React, {useState, useEffect} from "react"
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from "axios"

const UserRegister = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password_confirmation, setPasswordConfirmation] = useState("")
  const [radioValue, setRadioValue] = useState('1');
  const [hide, setHide] = useState("")

  const content =
  <div className="register-menu w-100">
    <h4 className="text-center"><u>新規ご登録/ログイン</u></h4>
    <Form className="form-input">
      <Form.Group controlId="name" className={hide} required>
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
      <Form.Group controlId="password_confirmation" className={hide} required>
        <Form.Label>パスワードの再確認</Form.Label>
        <Form.Control
          type="password"
          name="password_confirmation"
          value={password_confirmation}
          placeholder="パスワードをもう一度間違いなくご記入ください"
          onChange = {(event) => setPasswordConfirmation(event.target.value)}
           />
      </Form.Group>
      <Form.Group className= {`d-flex justify-content-center  ${hide}`}>
        <Button
          variant="dark"
          type="submit"
          onClick={(event)=>userRegistration(event)}
          >登録する
        </Button>
        <Button
          variant="light"
          type="submit"
          onClick={(event)=>userLogin(event)}
          >ログイン
        </Button>
        <Button
          variant="outline-secondary"
          type="submit"
          >キャンセル
        </Button>
      </Form.Group>
    </Form>
  </div>

  const userRegistration = (event) => {
    const url = "http://localhost:3000/user"
    axios.post(
      url,
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
    const url = "http://localhost:3000/session"
    axios.post(
      url,
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
   <div>
     {content}
   </div>
  )
}

export default UserRegister
