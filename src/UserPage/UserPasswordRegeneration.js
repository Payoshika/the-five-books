import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const UserPasswordRegeneration = (props) =>{
  let {name, email} = props

const userProfileUpdate = () => {
  console.log("hi");
}

const newProfileArea =
<div className="new-profile">
  <Form className="form-input">
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="password-regeneration-comment d-flex flex-column align-items-center justify-content-center my-3 px-2 py-2">
        <p>新たなパスワードを発効し、ご登録されているメールアドレス({email})へお送りいたします。<br/><br/>新しいパスワードを確認されましたら、再度ログインを頂きご自身でパスワードを変更いただきますようお願いいたします。</p>
      </div>
      <Form.Group className= {`d-flex justify-content-center`}>
        <Button
          className="register-btn mx-2"
          variant="dark"
          type="submit"
          onClick={(event)=>userProfileUpdate(event)}
          >再発行する
        </Button>
      </Form.Group>
    </div>
  </Form>
</div>

  return(
    <Container fluid>
      <Row>
        <Col>
          <h4 className="text-center">パスワードの再発行</h4>
          {newProfileArea}
        </Col>
      </Row>
    </Container>
  )
}

export default UserPasswordRegeneration
