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

const UserPage9999 = (props) =>{
  let {name, email, lectures} = props
  const [popup, setPopup] = useState("delete-hide")
  const deleteConfirm = () => {
    setPopup("delete-show")
  }

  const userDelete =
  <div className={`${popup} position-absolute top-0 left-o w-100 d-flex flex-column justify-content-center align-items-center`}>
    <p>ユーザーの削除は取り消すことができません。削除しますか？</p>
    <div>
      <Button
        variant="outline-secondary"
        className="mx-2"
        onClick= {()=>deleteUser()}
        >削除する
      </Button>
      <Button
        variant="outline-secondary"
        className="mx-2"
        onClick= {()=>setPopup("delete-hide")}
        >キャンセル
      </Button>
    </div>
  </div>

  const deleteUser = () => {
    const apiURL = process.env.REACT_APP_API_URL
    axios.delete(`${apiURL}/user`, {withCredentials: true})
    .then(response => {
      props.handleLogout()
      setPopup("delete-hide")
      props.history.push("./")
    })
    .catch(error => {
      console.log(error)
    })
  }

  if (!lectures){
    lectures = "登録済みの講座はありません"
  }
  else {
    lectures = lectures.map((lecture, index) => {
      return(<p key={index}>lecture</p>)
    })
  }

  const logout = () => {
    const apiURL = process.env.REACT_APP_API_URL
    axios.delete(`${apiURL}/logout`, {withCredentials: true})
    .then(response => {
      props.handleLogout()
      props.history.push("./")
    })
    .catch(error => {
      console.log(error)
    })
  }


const nameArea =
<div className="d-flex flex-start mx-3 mb-3">
  <h2 className="text-center">{name} さん</h2>
</div>

  const content =
  <div>
    <ListGroup variant="flush">
      <ListGroup.Item>email: {email}</ListGroup.Item>
      <ListGroup.Item>登録講義: {lectures}</ListGroup.Item>
    </ListGroup>
    <div className="d-flex justify-content-center my-3">
      <Button
        variant="outline-secondary"
        className="mx-2"
        onClick= {
          ()=>props.history.push("./UserProfileEdit")
        }
        >登録内容修正
      </Button>
      <Button
        variant="outline-secondary"
        className="mx-2"
        onClick= {
          ()=>props.history.push("./UserPasswordUpdate")
        }
        >パスワード変更
      </Button>
      <Button
        variant="outline-secondary"
        className="mx-2"
        onClick= {()=>deleteConfirm()}
        >登録内容削除
      </Button>
    </div>
  </div>

  return(
    <Container fluid>
      <Row>
        <Col>
          {nameArea}
          {content}
        </Col>
      </Row>
    </Container>
  )
}

export default UserPage9999
