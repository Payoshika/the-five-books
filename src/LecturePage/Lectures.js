import React from "react"
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Lectures = (props) => {
  let pageNum = props.name

  return(
    <div>
      <p>Lecture {pageNum}'s content is HHHHHHH</p>
    </div>
  )
}

export default Lectures
