import React, {useState} from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Image from 'react-bootstrap/Image'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from "axios"

const UserPasswordUpdate = (props) =>{
  let {name, email} = props
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState("")


const userProfileUpdate = () => {
  console.log("hi");
}

const newProfileArea =
<div className="new-profile w-100 d-flex flex-column align-items-center justify-content-center">
  <Form className="form-input">
    <Form.Group controlId="currentPassword">
      <Form.Label>現在のパスワード</Form.Label>
      <Form.Control
        type="password"
        name="currentpassword"
        value={currentPassword}
        placeholder="現在のパスワード"
        onChange={(event) => setCurrentPassword(event.target.value)}
        />
    </Form.Group>
    <Form.Group controlId="password" required>
      <Form.Label>新しいパスワード</Form.Label>
      <Form.Control
        type="password"
        name="password"
        value={newPassword}
        placeholder="アルファベットと数字双方を含めてください"
        onChange = {(event) => setNewPassword(event.target.value)}
         />
    </Form.Group>
    <Form.Group controlId="password_confirmation" required>
      <Form.Label>パスワードの再確認</Form.Label>
      <Form.Control
        type="password"
        name="new_password_confirmation"
        value={newPasswordConfirmation}
        placeholder="パスワードをもう一度間違いなくご記入ください"
        onChange = {(event) => setNewPasswordConfirmation(event.target.value)}
         />
    </Form.Group>
    <div className="text-center">
      <Link to="./UserPasswordRegeneration"><p className="text-lowercase">パスワードをお忘れの方はこちら</p></Link>
    </div>
    <Form.Group className= {`d-flex justify-content-center`}>
      <Button
        className="register-btn mx-2"
        variant="dark"
        type="submit"
        onClick={(event)=>userProfileUpdate(event)}
        >更新する
      </Button>
      <Button
        className="register-btn mx-2"
        variant="outline-secondary"
        type="submit"
        onClick= {
          ()=>props.history.push("./userpage9999")
        }
        >戻る
      </Button>
    </Form.Group>
  </Form>
</div>


  return(
    <Container fluid>
      <Row>
        <Col>
          <h4 className="text-center">パスワードの変更</h4>
          {newProfileArea}
        </Col>
      </Row>
    </Container>
  )
}

export default UserPasswordUpdate
