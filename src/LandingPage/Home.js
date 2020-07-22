import React from "react"
import {Banner, ServiceDescription, ServiceFlow, LectureLists, BookRequest, Contact, About} from "./Components/index.js"

const Home = () => {
  return(
    <div>
      <Banner />
      <ServiceDescription />
      <ServiceFlow />
      <LectureLists />
      <BookRequest />
      <Contact />
      <About />
    </div>
  )
}


export default Home
