import React from "react"
import { Link } from "react-router-dom";
import {Lecture1Info} from "./index"
import Image from 'react-bootstrap/Image'
import bookImg from "./img/読書について.jpg"
import lecturerPhoto from "./img/sample-lecturer-photo.png"

const Lecture1 = () => {
    const content =
    <Link to="/lecture/1">
      <div className="top-lecture mt-md-5 d-flex flex-column justify-content-center align-items-center flex-nowrap">
        <div className="book-img-container">
          <Image src={bookImg} fluid />
        </div>
        <div className="lecturer-info d-flex flex-row justify-content-center align-items-center flex-nowrap">
          <div className="lecturer-photo">
            <Image src={lecturerPhoto} fluid roundedCircle/>
          </div>
          <div className="lecturer-info">
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
