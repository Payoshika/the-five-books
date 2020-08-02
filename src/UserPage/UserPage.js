import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

import axios from "axios"

const UserPage = (props) =>{
  let {name, email, lectures} = props
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

  const userDelete = () => {
    const apiURL = process.env.REACT_APP_API_URL
    axios.delete(`${apiURL}/user`, {withCredentials: true})
    .then(response => {
      props.handleLogout()
      props.history.push("./")
    })
    .catch(error => {
      console.log(error)
    })
  }

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
        onClick= {()=>logout()}
        >ログアウト
      </Button>
      <Button
        variant="outline-secondary"
        className="mx-2"
        onClick= {()=>userDelete()}
        >登録内容を削除
      </Button>
    </div>
  </div>


  return(
    <Container fluid>
      <Row>
        <Col>
          <h2 className="text-center">{name} 様</h2>
          {content}
        </Col>
      </Row>
    </Container>
  )
}

export default UserPage
