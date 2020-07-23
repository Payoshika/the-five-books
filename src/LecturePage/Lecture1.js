import React from "react"
import { Link } from "react-router-dom";
import {Lecture1Info} from "./index"

const Lecture1 = () => {
    const content =
    <Link to="/lecture/1">
      <div className="top-lecture d-flex flex-column justify-content-center align-items-center flex-nowrap">
        <div className="book-img d-block">
          <img src="https://via.placeholder.com/150" alt="placeholder"/>
        </div>
        <div className="lecturer-info d-flex flex-row flex-nowrap">
          <img className="lecturer-photo img-fluid rounded-circle"src="https://via.placeholder.com/150" alt="placeholder"/>
          <div className="">
              <p>講師: {Lecture1Info["lecturer"]["name"]}</p>
              <p>専門分野: {Lecture1Info["lecturer"]["expertise"]}</p>
              <p>学位: {Lecture1Info["lecturer"]["degree"]}</p>
              <p>所属機関: {Lecture1Info["lecturer"]["affiliation"]}</p>
              <p>講義書籍: {Lecture1Info["lecturer"]["lecturableBooks"]}</p>
          </div>
        </div>
      </div>
    </Link>
  return(
    <>
      {content}
    </>
  )
}

export default Lecture1
