import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

const UserPage = (props) =>{

  let {name, email, lectures} = props.user
  if (!lectures){
    lectures = "登録済みの講座はありません"
  }
  else {
    lectures = lectures.map((lecture, index) => {
      return(<p key={index}>lecture</p>)
    })
  }

  const content =
  <div>
    <ListGroup variant="flush">
      <ListGroup.Item>email: {email}</ListGroup.Item>
      <ListGroup.Item>登録講義: {lectures}</ListGroup.Item>
    </ListGroup>
    <Button
      variant="outline-secondary"
      >編集・削除</Button>
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
