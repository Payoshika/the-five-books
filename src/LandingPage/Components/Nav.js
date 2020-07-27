import React, {useState, useEffect} from "react"
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Nav = (props) => {
  const [hide, setHide] = useState(true);
  const [userRegisterHide, setUserRegisterHide] = useState(true);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password_confirmation, setPasswordConfirmation] = useState("")
  let registerMenu = <div></div>

  if (userRegisterHide === false){
    registerMenu =
     <div className="register-menu position-abolute w-100">
       <h4 className="text-center"><u>ユーザー登録</u></h4>
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
         <Form.Group controlId="password"  required>
           <Form.Label>password</Form.Label>
           <Form.Control
             type="password"
             name="password"
             value={password}
             placeholder="6文字以上・アルファベットと数字双方を含めて下さい"
             onChange = {(event) => setPassword(event.target.value)}
              />
         </Form.Group>
         <Form.Group controlId="password_confirmation"  required>
           <Form.Label>password confirmation</Form.Label>
           <Form.Control
             type="password"
             name="password_confirmation"
             value={password_confirmation}
             placeholder="パスワードをもう一度間違いなくご記入ください"
             onChange = {(event) => setPasswordConfirmation(event.target.value)}
              />
         </Form.Group>
         <Form.Group className="d-flex justify-content-center">
           <Button
             variant="dark"
             type="submit"
             onClick={props.userRegister(name, email, password, password_confirmation)}
             >ユーザー登録する
           </Button>
           <Button
             variant="outline-secondary"
             type="submit"
             onClick={()=>cancel()}
             >キャンセル
           </Button>
         </Form.Group>
       </Form>
     </div>
  }


  const openUserRegister = (event) => {
    setUserRegisterHide(false)
    setHide(true)
  }

  const cancel = () => {
    setUserRegisterHide(true)
  }

  let menuBar =
    <FontAwesomeIcon icon={faBars}
    onClick={() => setHide(false)}/>

  let hideMenu = <div></div>
  if (hide === false){
    hideMenu = (
      <div
        className = "hide-menu position-absolute"
         >
        <p onClick ={() => setHide(true)}><a href="/#home">Home</a></p>
        <p onClick ={() => setHide(true)}><a href="/#course">Courses</a></p>
        <p onClick ={() => setHide(true)}><a href="/#contact">Contact</a></p>
        <p onClick={() => openUserRegister()}>User Register</p>
        <p onClick ={() => setHide(true)}> <u>Close</u></p>
      </div>
  )}

  let largeMenu =
  <div className="large-menu d-none ml-auto d-sm-flex">
    <p><a href="/#home">Home</a></p>
    <p onClick={() => openUserRegister()}>User Register</p>
    <p><a href="/#course">Courses</a></p>
    <p><a href="/#contact">Contact</a></p>
  </div>

  return(
    <div className="position-relative">
      <div>
        {registerMenu}
      </div>
      <Navbar>
        <Navbar.Brand
          id="home"
          href="/#home">The Five Books</Navbar.Brand>
          {largeMenu}
        <div className="d-flex ml-auto d-sm-none">
          {menuBar}
          {hideMenu}
        </div>
      </Navbar>
    </div>
  )
}

export default Nav
