import React, {useState} from "react"
import {Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Nav = (props) => {
  const [hide, setHide] = useState(true);

  let registerMenu = (props.name === "")? <Link to="./user">Register/Login</Link> : <div></div>

  let name = (props.name === "")? <div></div> :<div><Link to="./userpage">{props.name}さん</Link></div>

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
        <p onClick ={() => setHide(true)}>
          <Link to="/lecture/1">Course</Link>
        </p>
        <p onClick ={() => setHide(true)}><a href="/#contact">Contact</a></p>
        <p onClick ={() => setHide(true)}> <u>Close</u></p>
      </div>
  )}

  let largeMenu =
  <div className="large-menu d-none ml-auto d-sm-flex">
    <p>{registerMenu}</p>
    <p><a href="/#home">Home</a></p>
    <p onClick ={() => setHide(true)}>
      <Link to="/lecture/1">Course</Link>
    </p>
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
