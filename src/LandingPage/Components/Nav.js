import React, {useState} from "react"
import {Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from "./img/logo.png"

const Nav = (props) => {
  const [hide, setHide] = useState(true);

  let registerMenu = (props.name === "")? <Link to="/user">Register/Login</Link> : <div></div>

let name = (props.name === "")? <div></div> :<div ><Link to="/userpage">{props.name}さん</Link></div>

  let menuBar =
    <FontAwesomeIcon icon={faBars}
    onClick={() => setHide(false)}/>

  let hideMenu = <div></div>
  if (hide === false){
    hideMenu = (
      <div
        className = "hide-menu position-absolute d-flex flex-column justify-content-center align-items-center"
        onClick ={() => setHide(true)}
         >
         <div className = "hide-menu-box d-flex flex-column justify-content-center align-items-center">
           <p onClick ={() => setHide(true)}>{registerMenu}</p>
             {name}
           <p onClick ={() => setHide(true)}><a href="/#home">Top</a></p>
           <p onClick ={() => setHide(true)}>
             <Link to="/coming_lectures">講義一覧</Link>
           </p>
           <p onClick ={() => setHide(true)}>
             <Link to="/book_guide">講師になる</Link>
           </p>
           <p onClick ={() => setHide(true)}><a href="/#contact">お問い合わせ</a></p>
           <p onClick ={() => setHide(true)}> <u>Close</u></p>
         </div>
      </div>
  )}

  let largeMenu =
  <div className="large-menu d-none ml-auto d-md-flex">
    <p>{registerMenu}</p>
    <p><a href="/#home">Top</a></p>
    <p>
      <Link to="/coming_lectures">講義一覧</Link>
    </p>
    <p>
      <Link to="/book_guide">講師になる</Link>
    </p>
    <p><a href="/#contact">お問い合わせ</a></p>
      {name}
  </div>

  return(
    <div className="position-relative">
      <Navbar>
        <Navbar.Brand
          id="home"
          href="/#home"
          className="d-flex align-contents-center flex-nowrap">
          The Five Books
        </Navbar.Brand>
          {largeMenu}
        <div className="d-flex ml-auto d-md-none">
          {menuBar}
          {hideMenu}
        </div>
      </Navbar>
    </div>
  )
}

export default Nav
