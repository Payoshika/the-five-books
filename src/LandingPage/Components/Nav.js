import React, {useState} from "react"
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
        <p><a href="/#home">Home</a></p>
        <p><a href="/#course">Courses</a></p>
        <p><a href="/#contact">Contact</a></p>
        <p onClick ={() => setHide(true)}>
        <u>Close</u></p>
      </div>
  )}

  let largeMenu =
  <div className="large-menu d-none ml-auto d-sm-flex">
    <p><a href="/#home">Home</a></p>
    <p><a href="/#course">Courses</a></p>
    <p><a href="/#contact">Contact</a></p>
  </div>

  return(
    <>
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
    </>
  )
}

export default Nav
