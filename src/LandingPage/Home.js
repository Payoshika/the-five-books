import React from "react"
import {Banner, Story, ServiceDescription, ServiceFlow, BookRequest, Contact, About} from "./Components/index.js"

const Home = () => {
  return(
    <div className="w-100">
      <Banner />
      <Story />
      <ServiceDescription />
      <ServiceFlow />
      <BookRequest />
      <Contact />
      <About />
    </div>
  )
}


export default Home
