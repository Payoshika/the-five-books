import React from "react"
import Lectures from "./Lectures"
import {useParams} from "react-router-dom";

const LectureStyle = () => {
  let {id} = useParams()
  return(
    <div>
      <h1>This is Lecture Page</h1>
      <p>current id is {id}</p>
      <Lectures id={id}/>
    </div>
  )
}


export default LectureStyle
