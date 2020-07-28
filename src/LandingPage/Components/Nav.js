import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Nav = (props) => {
  const [hide, setHide] = useState(true);
  let name = props.user.name

  let menuBar =
    <FontAwesomeIcon icon={faBars}
    onClick={() => setHide(false)}/>

  let hideMenu = <div></div>
  if (hide === false){
    hideMenu = (
      <div
        className = "hide-menu position-absolute"
         >
        <p>{name}さん</p>
        <p onClick ={() => setHide(true)}><Link to="./user">User Register</Link></p>
        <p onClick ={() => setHide(true)}><a href="/#home">Home</a></p>
        <p onClick ={() => setHide(true)}><a href="/#course">Courses</a></p>
        <p onClick ={() => setHide(true)}><a href="/#contact">Contact</a></p>
        <p onClick ={() => setHide(true)}> <u>Close</u></p>
      </div>
  )}

  let largeMenu =
  <div className="large-menu d-none ml-auto d-sm-flex">
    <p>{name}さん</p>
    <p><Link to="./user">User Register</Link></p>
    <p><a href="/#home">Home</a></p>
    <p><a href="/#course">Courses</a></p>
    <p><a href="/#contact">Contact</a></p>
  </div>

  return(
    <div className="position-relative">
      <Navbar>
        <Navbar.Brand
          id="home"
          href="/#home">The Five Books</Navbar.Brand>
          {largeMenu}
        <div className="d-flex ml-auto d-sm-none">
          {menuBar}
          {hideMenu}
        </div>
      </Navbar>
    </div>
  )
}

export default Nav
