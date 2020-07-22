import React, {useState} from "react"
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  const [hide, setHide] = useState(true);
  let menuBar =
    <FontAwesomeIcon icon={faBars}
    onClick={() => setHide(false)}/>

  let hideMenu = <div></div>
  if (hide === false){
    hideMenu = (
      <div
        className = "hide-menu position-absolute"
        onClick ={() => setHide(true)} >
        <p><a href="#">About</a></p>
        <p><a href="#">Courses</a></p>
        <p><a href="#">Contact</a></p>
      </div>
  )}

  let largeMenu =
  <div className="d-none ml-auto d-sm-flex">
    <p><a href="#">About</a></p>
    <p><a href="#">Courses</a></p>
    <p><a href="#">Contact</a></p>
  </div>

  return(
    <>
    <Navbar>
      <Navbar.Brand href="#home">The Five Books</Navbar.Brand>
        {largeMenu}
      <div className="d-flex ml-auto d-sm-none">
        {menuBar}
        {hideMenu}
      </div>
    </Navbar>
    </>
  )
}

export default Nav
