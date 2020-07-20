import React from "react"
import { Link } from "react-router-dom";

const Lectures = (props) => {
  let pageNum = props.id

  return(
    <div>
      <p>Lecture {pageNum}'s content is HHHHHHH</p>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Lectures
