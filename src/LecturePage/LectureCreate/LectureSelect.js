import React from "react"
import Form from 'react-bootstrap/Form'

const LectureSelect = (props) => {
  const {lectureOverview, setLectureOverview, lectureDates, getFormatDate, dayOfWeek, eachLecture, lectureTime, lectureTimeChange, changingEachLectureDetail} = props

  const lectureOverviewInput =
    <Form.Group
      controlId="lecture-overview"
      required>
      <Form.Label>講義の概要</Form.Label>
        <Form.Control
          as="textarea"
          rows="13"
          name="lectureOverview"
          value={lectureOverview}
          onChange={(event)=>setLectureOverview(event.target.value)}
           />
    </Form.Group>


  const eachLectureDetail =
    lectureDates.map((eachDate, index)=>{
      return(
        <Form.Group
          controlId="each-lecture"
          required>
          <Form.Label>第{index+1}回講義：{getFormatDate(eachDate).slice(4,6)}月{getFormatDate(eachDate).slice(6,8)}日({dayOfWeek(eachDate.getDay())})</Form.Label>
            <Form.Label>　講義時間：</Form.Label>
            <div className="d-inline-flex align-items-center">
              <input
                type="time"
                name= {index}
                class="border-0 rounded"
                value={lectureTime[index][0]} min="10:00" max="22:00"
                onChange={(event)=>lectureTimeChange(event)}/>
              <p className="my-0 align-middle mx-2">~</p>
                <input
                  type="time"
                  name= {(index)+10}
                  class="border-0 rounded"
                  value={lectureTime[index][1]} min="10:00" max="22:00"
                  onChange={(event)=>lectureTimeChange(event)}/>
            </div>
            <Form.Control
              as="textarea"
              rows="9"
              value={eachLecture[{index}]}
              name={index}
              className="mt-2"
              onChange={(event)=>changingEachLectureDetail(event)}
               />
        </Form.Group>
        )
      })

  return(
    <div className="w-40">
      {lectureOverviewInput}
      {eachLectureDetail}
    </div>
  )
}

export default LectureSelect
