import React, {useState} from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from "axios"
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

const LectureCreate = () => {
  const [bookName, setBookName] = useState("")
  const [searchResult, setSearchResult] = useState(
    <div></div>
  )
  const [authorName, setAuthorName] = useState("")
  const [bookImageUrl, setBookImageUrl] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [lecture1Date, setLecture1Date] = useState("")
  const [lecture2Date, setLecture2Date] = useState("")
  const [lecture3Date, setLecture3Date] = useState("")
  const [lecture4Date, setLecture4Date] = useState("")
  const [lecture5Date, setLecture5Date] = useState("")
  const [lectureStartTime, setLectureStartTime] = useState("")
  const [lectureEndTime, setLectureEndTime] = useState("")
  const [lectureOverview, setLectureOverview] = useState("")
  const [lectureDetail, setLectureDetail] = useState([])
  const [lecturerMessage, setLecturerMessage] = useState("")
  const [lecturePrice, setLecturePrice] = useState("")
  const [minimumSize, setMinimumSize] = useState("")
  const [disclaimer, setDisclaimer] = useState("")
  const [text, setText] = useState("")
  const [editorState, setEditorState] = React.useState(
  () => EditorState.createEmpty(),
);

const editor =
<div className="editor">
  <Editor editorState={editorState} onChange={setEditorState} />
</div>

const searchBook = (input) => {
  setBookName(input)
  setTimeout(viewSuggestion, 3000, input)
}

const setLectureBook = (event) => {
  setBookName(event.target.querySelector(".book-name").innerText)
  setAuthorName(event.target.querySelector(".book-author").innerText)
  setBookImageUrl(event.target.querySelector(".book-img-url").innerText)
  setSearchResult(<div></div>)
}

const viewSuggestion = (input) => {
  if (input && input.length >= 2){
    let searchUrl = encodeURI(`https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?applicationId=1025599016601623375&title=${input}`)
    axios.get(searchUrl)
    .then(response => {
      (response.data["Items"].length === 0)? setSearchResult(
        <div>
          <p>お探しの書籍が見つかりません。別のキーワードで検索してください。</p>
        </div>
      )
      :setSearchResult(
        response.data["Items"].slice(0,5).map(books => {
          return(
          <ListGroup.Item
          key={books["Item"]["title"]}
          className="searched-items d-flex justify-content-start flex-nowrap　overflow-hidden"
          onClick={(event) => setLectureBook(event)}
          >
            <div className="book-name mx-1"><p>{books["Item"]["title"]}</p></div>
            <div className="book-author mx-1"><p>{books["Item"]["author"]}</p></div>
            <div className="book-publisher mx-1"><p>{books["Item"]["publisherName"]}</p></div>
            <div className="book-img-url mx-1 d-none"><p>{books["Item"]["largeImageUrl"]}</p></div>
        </ListGroup.Item>
      )})
      )
    })
    .catch(error => {
      setSearchResult(
        <div>
          <p>お探しの書籍が見つかりません。別のキーワードで検索してください。</p>
        </div>
      )
    })
  }
  else{
    setSearchResult(<div></div>)
  }
}

const bookSelect =
<Form.Group controlId="name" required>
  <Form.Label>書籍名</Form.Label>
  <Form.Control
    type="text"
    name="bookName"
    value={bookName}
    onChange={(event) => searchBook(event.target.value)}
    />
  <Form.Label>著者名</Form.Label>
    <Form.Control
      type="text"
      name="author"
      value={authorName}
      onChange={(event) => setAuthorName(event.target.value)}
      />
    <Image src={bookImageUrl} width="100" height="100" fluid/>
  {searchResult}
</Form.Group>

const lecturePeriod =
<Form.Group controlId="lecturePeriod" required>
  <Form.Label>講義開始日</Form.Label>
  <Form.Control
    type="date"
    name="startDate"
    value={startDate}
    onChange={(event)=>{setStartDate(event.target.value)}}
    />
  <Form.Label>講義終了日</Form.Label>
    <Form.Control
      type="date"
      name="endDate"
      value={endDate}
      onChange={(event)=>{setEndDate(event.target.value)}}
      />
</Form.Group>

const lectureDateSelect =
<Form.Group controlId="lectureDate" required>
  <Form.Label>第一回講義</Form.Label>
  <Form.Control
    type="date"
    name="lecture1Date"
    value={lecture1Date}
    onChange={(event)=>{setLecture1Date(event.target.value)}}
    />
  <Form.Label>第二回講義</Form.Label>
  <Form.Control
    type="date"
    name="lecture2Date"
    value={lecture2Date}
    onChange={(event)=>{setLecture2Date(event.target.value)}}
    />
  <Form.Label>第三回講義</Form.Label>
  <Form.Control
    type="date"
    name="lecture3Date"
    value={lecture3Date}
    onChange={(event)=>{setLecture3Date(event.target.value)}}
    />
  <Form.Label>第四回講義</Form.Label>
  <Form.Control
    type="date"
    name="lecture4Date"
    value={lecture4Date}
    onChange={(event)=>{setLecture4Date(event.target.value)}}
    />
  <Form.Label>第五回講義</Form.Label>
  <Form.Control
    type="date"
    name="lecture5Date"
    value={lecture5Date}
    onChange={(event)=>{setLecture5Date(event.target.value)}}
    />
</Form.Group>

const lectureTime =
<Form.Group controlId="lectureTime" required>
  <Form.Label>開始時間</Form.Label>
  <Form.Control
    type="time"
    name="startTime"
    value={lectureStartTime}
    onChange={(event)=>{setLectureStartTime(event.target.value)}}
    />
  <Form.Label>終了時間</Form.Label>
    <Form.Control
      type="time"
      name="endTime"
      value={lectureEndTime}
      onChange={(event)=>{setLectureEndTime(event.target.value)}}
      />
</Form.Group>

const selectLectureOverview =
  <Form.Group controlId="lectureOverview">
    <Form.Label>講義概要</Form.Label>
    <Form.Control
      as="textarea"
      rows="20"
      name="lectureOverview"
      value={lectureOverview}
      placeholder="講義の概要を記載ください"
      onkeyDown={(event)=>test2(event)}
      onChange={(event)=>test1(event)}
       />
  </Form.Group>

  const test1 = (event) => {
    setLectureOverview(event.target.value)
    console.log(event.target.keyCode)
  }

  const test2 = (event) => {
    console.log(event);
  }

  return(
    <Container fluid>
      <Row>
        <Col>
          <h4 className="text-center">新しい講義を作成する</h4>
          {bookSelect}
          {lecturePeriod}
          {lectureDateSelect}
          {lectureTime}
          {selectLectureOverview}
          {lectureOverview}
          {editor}
        </Col>
      </Row>
    </Container>
    )
}


export default LectureCreate
