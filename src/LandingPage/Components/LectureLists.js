import React from "react"
import { Link } from "react-router-dom";

const LectureLists = () => {
  return(
    <div>
      <h1>Lecturelists</h1>
      <div>
        <Link to="/lecture/1">to Lecture1</Link>
      </div>
      <div>
        <Link to="/lecture/2">to Lecture2</Link>
      </div>
    </div>
  )
}


export default LectureLists
