import React, {useState} from "react"
import {BookSelect, DateSelect, LectureSelect, LectureMessageSelect} from "./index.js"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar'

const LectureCreate = () => {
  const [lecturePage1, setLecturePage1] = useState('d-flex flex-column justify-content-center align-items-center')
  const [lecturePage2, setLecturePage2] = useState('d-none flex-column justify-content-center align-items-center')
  const [lecturePage3, setLecturePage3] = useState('d-none flex-column justify-content-center align-items-center')
  const [progress, setProgress] = useState(33)
  const [bookName, setBookName] = useState("")
  const [authorName, setAuthorName] = useState("")
  const [searchResult, setSearchResult] = useState(
    <div></div>
  )
  const [bookImageCss, setBookImageCss] = useState('d-none')
  const [bookImageUrl, setBookImageUrl] = useState("")
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [lectureDates, setLectureDates] = useState([])
  const [lectureOverview, setLectureOverview] = useState("")
  const [eachLecture, setEachLecture] = useState(["1","2","3","4","5"])
  const [lectureTime, setLectureTime] = useState([["11:00", "12:30"],["11:00", "12:30"],["11:00", "12:30"],["11:00", "12:30"],["11:00", "12:30"]])
  const [lectureMessage, setLectureMessage] = useState("")
  const [minimumAtendee, setMinimumAtendee] = useState("5")
  const [price, setPrice] = useState("")
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection"
  }
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const getFormatDate = (value) => {
   return `${value.getFullYear()}${('0' + (value.getMonth() + 1)).slice(-2)}${('0' + value.getDate()).slice(-2)}`;
 }

  const setLectureBook = (event) => {
    setBookImageUrl(event.target.name)
    setBookImageCss('p-1 bg-warning')
    setSearchResult(<div></div>)
  }

  const lectureDateArraySet = (startDate, endDate) => {
    let lectureWeekArray = []
    let startDateClone = new Date(startDate.getTime())
    let weeks = (endDate.getTime() - startDate.getTime()) / 86400000 /7
    for (let i = 0; i< weeks-1; i++){
      lectureWeekArray.push(
        new Date(startDateClone.setDate(startDateClone.getDate() + 7))
      )
    }
    lectureWeekArray.unshift(startDate)
    lectureWeekArray.push(endDate)
    setLectureDates(lectureWeekArray)
  }

  const changingEachLectureDetail = (event) => {
    const eventnumber = event.name
    let eachLectureCopy = JSON.parse(JSON.stringify(eachLecture))
    eachLectureCopy[eventnumber] = event.target.value
    setEachLecture(eachLectureCopy)
  }

  const lectureTimeChange = (event) => {
    event.stopPropagation()
    let eventnumber = event.target.name
    let lectureTimeCopy = JSON.parse(JSON.stringify(lectureTime))
    if (eventnumber < 10){
      lectureTimeCopy[eventnumber][0] = event.target.value
      setLectureTime(lectureTimeCopy)
    }
    else {
      eventnumber -= 10
      lectureTimeCopy[eventnumber][1]= event.target.value
      setLectureTime(lectureTimeCopy)
    }
  }

  const dayOfWeek = (num) => {
    const dayOfWeekArray = ["日","月", "火", "水", "木", "金", "土"]
    return dayOfWeekArray[num]
  }

const inputSave = () => {
  // api request を入れる
}

const toLecturePage1 = () => {
  setProgress(33)
  setLecturePage1('d-flex flex-column justify-content-center align-items-center')
  setLecturePage2('d-none flex-column justify-content-center align-items-center')
    }

const toLecturePage2 = () => {
  if(startDate === lectureDates[0] && endDate === lectureDates[-1]){
    setProgress(66)
    setLecturePage1('d-none flex-column justify-content-center align-items-center')
    setLecturePage2('d-flex flex-column justify-content-center align-items-center')
  }
  else if (progress === 100) {
    setProgress(66)
    setLecturePage2('d-flex flex-column justify-content-center align-items-center')
    setLecturePage3('d-none flex-column justify-content-center align-items-center')
  }
  else {
    lectureDateArraySet(startDate, endDate)
    setProgress(66)
    setLecturePage1('d-none flex-column justify-content-center align-items-center')
    setLecturePage2('d-flex flex-column justify-content-center align-items-center')
  }
}

const toLecturePage3 = () => {
  setProgress(100)
  setLecturePage2('d-none flex-column justify-content-center align-items-center')
  setLecturePage3('d-flex flex-column justify-content-center align-items-center')
}

const button1 =
<div className="mx-2">
  <Button
    variant="outline-secondary"
    onClick={()=>toLecturePage2()}
    >次へすすむ</Button>
</div>

const button2 =
<div className="mx-2">
  <Button
    variant="outline-secondary"
    onClick={()=>toLecturePage3()}
    >次へすすむ</Button>
</div>

const reverseButton1 =
<div className="mx-2">
  <Button
    variant="outline-secondary"
    onClick={()=>toLecturePage1()}
    >前に戻る</Button>
</div>

const reverseButton2 =
<div className="mx-2">
  <Button
    variant="outline-secondary"
    onClick={()=>toLecturePage2()}
    >前に戻る</Button>
</div>

const button3 =
<div className="mx-2">
  <Button
    variant="outline-secondary"
    onClick={()=>inputSave()}
    >入力内容を保存する</Button>
</div>


const progressBar =
  <div className="my-3 w-100">
    <ProgressBar striped variant="warning" now={progress} />
  </div>

  return(
    <Container fluid >
      <Row>
        <Col className="new-lecture-create d-flex flex-column justify-content-center align-items-center">
          <h4 className="text-center my-3"><u>新しい講義を作成する</u></h4>
            {progressBar}
          <div className={lecturePage1}>
            <BookSelect
              bookName = {bookName}
              authorName = {authorName}
              bookImageUrl = {bookImageUrl}
              bookImageCss = {bookImageCss}
              setBookImageUrl = {setBookImageUrl}
              setBookImageCss = {setBookImageCss}
              searchResult = {searchResult}
              setBookName = {setBookName}
              setAuthorName = {setAuthorName}
              setSearchResult = {setSearchResult}
              setLectureBook = {setLectureBook}
              />
            <DateSelect
              startDate = {startDate}
              endDate = {endDate}
              setStartDate = {setStartDate}
              setEndDate = {setEndDate}
              selectionRange = {selectionRange}
              handleSelect = {handleSelect}
              />
            {button1}
          </div>
          <div className={lecturePage2}>
            <LectureSelect
              lectureOverview = {lectureOverview}
              setLectureOverview = {setLectureOverview}
              lectureDates = {lectureDates}
              getFormatDate = {getFormatDate}
              dayOfWeek = {dayOfWeek}
              eachLecture = {eachLecture}
              lectureTime = {lectureTime}
              lectureTimeChange = {lectureTimeChange} changingEachLectureDetail = {changingEachLectureDetail}
              />
            <div className="d-flex justify-content-center">
              {reverseButton1}
              {button2}
            </div>
          </div>
          <div className={lecturePage3}>
            <LectureMessageSelect
              lectureMessage = {lectureMessage}
              setLectureMessage = {setLectureMessage}
              minimumAtendee = {minimumAtendee}
              setMinimumAtendee = {setMinimumAtendee}
              price = {price}
              setPrice = {setPrice}/>
            <div className="d-flex justify-content-center">
              {reverseButton2}
              {button3}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    )
}


export default LectureCreate
