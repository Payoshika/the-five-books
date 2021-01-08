import React from "react"
import Form from 'react-bootstrap/Form'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';

const DateSelect = (props) => {
  const {selectionRange, handleSelect} = props

  const datePick =
  <Form.Group controlId="lecture-date" required>
    <Form.Label>講義スケジュールを選択</Form.Label>
    <div className="search w-100">
      <DateRangePicker
        ranges= {[selectionRange]}
        onChange= {handleSelect}
        />
    </div>
  </Form.Group>

  return(
    <div>
      {datePick}
    </div>
  )
}

export default DateSelect
