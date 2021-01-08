import React from "react"
import Form from 'react-bootstrap/Form'

const LectureMessageSelect = (props) => {
  const {lectureMessage, setLectureMessage, minimumAtendee, setMinimumAtendee, price, setPrice} = props

  const lectureMessageInput =
    <Form.Group required>
      <Form.Label>講師からのメッセージ</Form.Label>
        <Form.Control
          as="textarea"
          rows="10"
          value={lectureMessage}
          onChange={(event)=>setLectureMessage(event.target.value)}
           />
    </Form.Group>

  const minimumAtendeeInput =
  <Form.Group required className="w-20">
    <Form.Label>最少開講人数</Form.Label>
      <div className="d-flex align-items-center">
        <Form.Control
          type="text"
          value={minimumAtendee}
          onChange={(event)=>setMinimumAtendee(event.target.value)}
          />
        <p className="text-center mb-0 ml-1 text-nowrap">人</p>
      </div>
  </Form.Group>

  const priceInput =
  <Form.Group required className="w-20">
    <Form.Label>参加料金</Form.Label>
    <div className="d-flex align-items-center">
      <Form.Control
        type="text"
        value={price}
        onChange={(event)=>setPrice(event.target.value)}
         />
       <p className="text-center mb-0 ml-1 text-nowrap">円/人</p>
    </div>
  </Form.Group>

  return(
    <div className="w-40">
      {lectureMessageInput}
      {minimumAtendeeInput}
      {priceInput}
    </div>
  )
}

export default LectureMessageSelect
