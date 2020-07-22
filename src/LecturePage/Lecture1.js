import React from "react"
import { Link } from "react-router-dom";

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
              <p>講師: 〇〇〇〇</p>
              <p>専門分野: 哲学</p>
              <p>学位: 修士(哲学)</p>
              <p>所属機関: 東京大学</p>
              <p>所属書籍: プラトン</p>
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
