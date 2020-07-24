import React from "react"
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  const content =
  <div className="footer d-flex flex-column align-items-center justify-content-center">
    <div>Copyright &copy; 2020 &nbsp;The Five Books</div>
  </div>

  return(
    <div>
      {content}
    </div>
  )
}
export default Footer
