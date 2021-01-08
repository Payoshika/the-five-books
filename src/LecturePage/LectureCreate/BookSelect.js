import React from "react"
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import axios from "axios"

const BookSelect = (props) => {
  const {bookName, authorName, searchResult, bookImageUrl, setBookImageUrl, bookImageCss, setBookImageCss, setBookName, setAuthorName, setSearchResult, setLectureBook} = props

  const bookSelect =
  <Form.Group controlId="book-name" required>
    <Form.Label>書籍名</Form.Label>
    <Form.Control
      className="border-bottom"
      type="text"
      name="bookName"
      value={bookName}
      placeholder="『』は不要です。"
      onChange={(event) => setBookName(event.target.value)}
      />
  </Form.Group>

  const authorSelect =
  <Form.Group controlId="author-name" required>
    <Form.Label>著者名</Form.Label>
    <Form.Control
      type="text"
      name="authorName"
      placeholder="著者名を入力してください。"
      value={authorName}
      onChange={(event) => setAuthorName(event.target.value)}
      />
  </Form.Group>

  const viewSuggestion = () => {
    if(bookImageUrl){
      setBookImageUrl("")
      setBookImageCss('d-none')
    }
    if (bookName && bookName.length >= 2){
      let searchUrl = encodeURI(`https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?applicationId=1025599016601623375&title=${bookName}`)
      axios.get(searchUrl)
      .then(response => {
        (response.data["Items"].length === 0)? setSearchResult(
          <div>
            <p>お探しの書籍が見つかりません。別の書籍名で検索してください。</p>
          </div>
        )
        :setSearchResult(
          response.data["Items"].slice(0,15).map(books => {
            return(
              <Image
                key={books["Item"]["title"]}
                name={books["Item"]["largeImageUrl"]}
                className="hover"
                src={books["Item"]["largeImageUrl"]}
                onClick={(event) => setLectureBook(event)}
                fluid/>
        )})
        )
      })
      .catch(error => {
        setSearchResult(
          <div>
            <p>お探しの書籍が見つかりません。別の書籍名で検索してください。</p>
          </div>
        )
      })
    }
    else{
      setSearchResult(<div></div>)
    }
  }

  const bookImage =
  <Form.Group controlId="book-img"  className="w-40" required>
    <Form.Label>書籍の表紙を選択する</Form.Label>
    <div className="text-left">
      <Button
        variant="outline-secondary"
        onClick={()=>viewSuggestion()}
        >書籍名から表紙を検索
      </Button>
    </div>
    <div className="w-100">
      <div className="row-scrollable">
        <div className="book-img-suggestion d-flex">
          {searchResult}
        </div>
      </div>
    </div>
    <div className="text-left">
      <Image src={bookImageUrl} className={bookImageCss} width="150" height="150" fluid/>
    </div>
  </Form.Group>

  return(
    <div>
      {bookSelect}
      {authorSelect}
      {bookImage}
    </div>
  )
}

export default BookSelect
