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

const UserPage = (props) =>{
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

const lectureVideos1 =
<div className="video-outer my-3">
  <p>「おそさ」についてのベルクソン的見解</p>
  <p>『精神のエネルギー』第一回講義</p>
  <iframe
    title="test"
    src="https://player.vimeo.com/video/469189176"
      width="100%" height="360"
      className="video"
     frameborder="0"
     allow="autoplay; fullscreen" allowfullscreen>
  </iframe>
</div>

const lectureVideos2 =
<div className="video-outer my-3">
  <p>シカゴ学派の都市理論とその発展</p>
  <p>『タクシーダンス・ホール』第三回講義</p>
  <iframe
    title="test"
    src="https://player.vimeo.com/video/469189176"
      width="100%" height="360"
      className="video"
     frameborder="0"
     allow="autoplay; fullscreen" allowfullscreen>
  </iframe>
</div>

const check =
    <div className="d-flex flex-column justify-content-center align-items-center my-3">
      <p>The Five Booksでは、現在講義登録・キャンセルなどを<a href="https://the-five-books.peatix.com"><b><u>peatix</u></b></a>にて行っております。2021年5月を目処に、当ウェブサイトマイページで登録ができる体制を整えて参ります。</p>
      <p class="my-3"><u>The Five Books講義のご紹介</u></p>
      <div>
        {lectureVideos1}
        {lectureVideos2}
      </div>
    </div>



  const content =
  <div>
    <ListGroup variant="flush">
      <ListGroup.Item>email: {email}</ListGroup.Item>
      <ListGroup.Item>登録講義: {lectures}</ListGroup.Item>
    </ListGroup>
    {check}
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
      {userDelete}
    </div>
  </div>

  return(
    <Container fluid>
      <Row>
        <Col>
          {content}
        </Col>
      </Row>
    </Container>
  )
}

export default UserPage
