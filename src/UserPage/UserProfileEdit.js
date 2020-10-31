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

const UserProfileEdit = (props) =>{
  let {name, email, lectures} = props
  const [popup, setPopup] = useState("delete-hide")
  const [newName, setNewName] = useState(name)
  const [newEmail, setNewEmail] = useState(email)

const nameArea =
<div className="d-flex flex-start mb-3">
  <h2 className="text-center">{name} さん</h2>
</div>

const userProfileUpdate = () => {
  console.log("hi");
}

const newProfileArea =
<div className="new-profile w-100 d-flex flex-column align-items-center justify-content-center">
  <Form className="form-input">
    <Form.Group controlId="name">
      <Form.Label>新しい名前</Form.Label>
      <Form.Control
        type="text"
        name="newname"
        value={newName}
        placeholder="新しい名前を記入してください。"
        onChange={(event) => setNewName(event.target.value)}
        />
    </Form.Group>
    <Form.Group controlId="email" >
      <Form.Label>新しいEmail</Form.Label>
      <Form.Control
        type="email"
        name="newemail"
        value={newEmail}
        placeholder="新たなEmailアドレスを記入してください。"
        onChange = {(event) => setNewEmail(event.target.value)}
         />
    </Form.Group>
    <Form.Group className= {`d-flex justify-content-center`}>
      <Button
        className="register-btn mx-2"
        variant="dark"
        type="submit"
        onClick={(event)=>userProfileUpdate(event)}
        >修正する
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
          <h4 className="text-center">登録情報の変更</h4>
          {newProfileArea}
        </Col>
      </Row>
    </Container>
  )
}

export default UserProfileEdit
