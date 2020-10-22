import React from "react"
import {Banner, Story, Features, Steps, Requirements, Contact} from "./Components/index.js"

const BookGuide = () => {
  return(
    <div className="w-100">
      <Banner />
      <Story />
      <Features />
      <Steps />
      <Requirements />
      <Contact />
    </div>
  )
}


export default BookGuide
