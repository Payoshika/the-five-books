import React from "react"

const Pagination = ({postsPerPage, totalPosts, paginate}) => {

const pageNumbers = [];
for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
  pageNumbers.push(i)
}

let display = <div></div>
  if (pageNumbers.length >= 2){
    display =
      pageNumbers.map((number)=>{
        return (
          <div
            key={number}
            className="pagination d-flex justify-content-center"
            onClick={(event) => paginate(event)}
            >
            <span
            >{number}</span>
          </div>
        )
      })
  }

return(
  <div className="d-flex justify-content-center">
    {display}
  </div>
)
}

export default Pagination
