import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Nav = (props) => {
  const [hide, setHide] = useState(true);

  let registerMenu = <p><Link to="./user">User Register</Link></p>
  let name = <div></div>

  if (props.user.name) {
    name = <div><Link to="./userpage">{props.user.name}さん</Link></div>
    registerMenu = <div></div>
  }

  let menuBar =
    <FontAwesomeIcon icon={faBars}
    onClick={() => setHide(false)}/>

  let hideMenu = <div></div>
  if (hide === false){
    hideMenu = (
      <div
        className = "hide-menu position-absolute rounded"
         >
        <p onClick ={() => setHide(true)}>{registerMenu}</p>
          {name}
        <p onClick ={() => setHide(true)}><a href="/#home">Home</a></p>
        <p onClick ={() => setHide(true)}><a href="/#course">Courses</a></p>
        <p onClick ={() => setHide(true)}><a href="/#contact">Contact</a></p>
        <p onClick ={() => setHide(true)}> <u>Close</u></p>
      </div>
  )}

  let largeMenu =
  <div className="large-menu d-none ml-auto d-sm-flex">
    {registerMenu}
    <p><a href="/#home">Home</a></p>
    <p><a href="/#course">Courses</a></p>
    <p><a href="/#contact">Contact</a></p>
      {name}
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
