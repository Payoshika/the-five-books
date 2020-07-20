import React from "react"
import { Link } from "react-router-dom";
import {Navbar, Banner, Register, ServiceDescription, ServiceFlow, LectureLists, BookRequest, Contact, Footer} from "./Components/index.js"

const Home = () => {
  return(
    <div>
      <Navbar />
      <Banner />
      <ServiceDescription />
      <ServiceFlow />
      <LectureLists />
      <BookRequest />
      <Contact />
      <Footer />
      <Link to="/lecture/1">to Lecture1</Link>
    </div>
  )
}


export default Home
