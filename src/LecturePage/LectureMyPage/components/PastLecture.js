import React from "react"
import Image from 'react-bootstrap/Image';

const PastLecture = ({currentPosts, getFormatDate}) => {

  const lectureArray =
    <div className="d-flex flex-column justify-content-center align-items-center">
      {
        currentPosts.map(
        (keys, index) => {
          return (
            <div key={index} className="d-flex justify-content-start align-items-center my-3 pb-4 border-bottom w-100">
              <div className="book-img-container d-flex justify-content-center align-contents-center">
                <Image src="https://via.placeholder.com/150" fluid />
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <p>書籍：{keys.book.name}</p>
                <p>著者：{keys.book.author}</p>
                <p>開講期間：&nbsp;{getFormatDate(keys.lectureStartDate).slice(4,6)}月{getFormatDate(keys.lectureStartDate).slice(6,9)}日&nbsp;~&nbsp;
                {getFormatDate(keys.lectureEndDate).slice(4,6)}月{getFormatDate(keys.lectureEndDate).slice(6,9)}日</p>
              </div>
            </div>
          )
        }
      )}
    </div>

return(
  <div>
    {lectureArray}
  </div>
)
}

export default PastLecture
