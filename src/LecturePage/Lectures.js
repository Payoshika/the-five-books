import React from "react"
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Lectures = (props) => {
const {id} = props.match.params
  return(
    <div>
      <p>Lecture content is {id}</p>
    </div>
  )
}

export default Lectures
