import React, {useState} from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Image from 'react-bootstrap/Image'

import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from "axios"

const MyCourse = (props) =>{
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
<div className="d-flex flex-start mb-3">
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
        onClick= {()=>logout()}
        >ログアウト
      </Button>
      <Button
        variant="outline-secondary"
        className="mx-2"
        onClick= {()=>deleteConfirm()}
        >登録内容を削除
      </Button>
    </div>
  </div>

  const now_taking =
  <div className="w-100 d-flex flex-column justify-content-center align-items-start">
    <div className="d-flex justify-content-center align-items-center my-3">
      <Image className="mr-3"src={"https://via.placeholder.com/150"} width="130" height="180"/>
      <div>
        <p>書籍：『読書について』</p>
        <p>著者：ショーペンハウエル</p>
        <p>期間：20年9月5日 ~ 20年9月26日</p>
        <p>講師：山野弘樹(哲学者)</p>
      </div>
    </div>
    <div className="d-flex justify-content-center align-items-center my-3">
      <Image className="mr-3"src={"https://via.placeholder.com/150"} width="130" height="180"/>
      <div>
        <p>書籍：『読書について』</p>
        <p>著者：ショーペンハウエル</p>
        <p>期間：20年9月5日 ~ 20年9月26日</p>
        <p>講師：山野弘樹(哲学者)</p>
      </div>
    </div>
    <div className="d-flex justify-content-center align-items-center my-3">
      <Image className="mr-3"src={"https://via.placeholder.com/150"} width="130" height="180"/>
      <div>
        <p>書籍：『読書について』</p>
        <p>著者：ショーペンハウエル</p>
        <p>期間：20年9月5日 ~ 20年9月26日</p>
        <p>講師：山野弘樹(哲学者)</p>
      </div>
    </div>
  </div>

  const lecrureInfo =
  <div >
    <Tabs
      defaultActiveKey="now_taking"
      id="uncontrolled-tab-example"
      >
      <Tab eventKey="now_taking" title="　受講中　">
        {now_taking}
      </Tab>
      <Tab eventKey="will_take" title="　受講予定　">
        {now_taking}
      </Tab>
      <Tab eventKey="has_taken" title="　受講済み　">
        {now_taking}
      </Tab>
    </Tabs>
  </div>

  return(
    <Container fluid>
      <Row>
        <Col sm={12}
          className="book_guide_banner position-relative">
          <h3>あなたの講義</h3>
        </Col>
        <div className="w-100 my-3">
        </div>
        <Col sm={12}>
          {lecrureInfo}
        </Col>
      </Row>
    </Container>
  )
}

export default MyCourse
