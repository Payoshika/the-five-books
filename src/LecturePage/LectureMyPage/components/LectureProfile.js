import React, {useState} from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const LectureProfile = (props) => {
  const {name, affiliation, expertise, profileLink, lecturePhoto} = props

  const profile =
  <div className="w-40 d-flex justify-content-center align-items-center border rounded p-5">
    <div className="lecturer-photo mx-5">
      <Image src="https://via.placeholder.com/150" circle fluid />
    </div>
    <div className="d-flex flex-column justify-content-center align-items-start">
      <p>名前：{name}</p>
      <p>所属：{affiliation}</p>
      <p>専門：{expertise}</p>
      <p>researchMap：{profileLink}</p>
    </div>
  </div>

  const profileEdit =
  <div className="">
    <Button
      variant="outline-secondary"
      >登録内容変更</Button>
  </div>

  const profileDelete =
  <div className="">
    <Button
      variant="outline-secondary"
      >アカウントを削除</Button>
  </div>

  return(
    <Container fluid>
      <Row>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          {profile}
          <div className="w-40 mt-2 d-flex justify-content-end">
            {profileEdit}
            {profileDelete}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default LectureProfile
