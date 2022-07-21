import React, {ReactDOM, useState} from "react"
import {LecturesInfo} from "./index.js"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Calendar from 'react-calendar'
import './styles/calender.css';
import { loadStripe } from '@stripe/stripe-js';
import ReactMarkdown from 'react-markdown'
import {Link} from "react-router-dom"


const stripePromise = loadStripe('pk_test_51H6qTHKu07P8WqmRl9iLKVCNAvq582vfORpsMwBXe5D0tKyvjdNyse5W3rmuDarSfEX7JcA6otvmW8PcJXHir5Ys00bqyudH0R');

const Lecture6 = (props) => {
  const {params} = props.match
  const lectureId = parseInt(params.id)-1
  const bookimg = LecturesInfo[lectureId]["book"].image
  const lecturerimg = LecturesInfo[lectureId]["lecturer"].lecturerPhoto
  const noAuthor = ""

  async function createCheckoutSession () {
    const apiURL = process.env.REACT_APP_API_URL
    const response = await fetch(`${apiURL}/payment/create`);
    const sessionID = await response.json()
    console.log(sessionID.session_id);
    return sessionID
  }

  const stripePayment = async (event) => {
    const session_Id = await createCheckoutSession();
    const stripe = await stripePromise;
    stripe.redirectToCheckout({
      sessionId: session_Id.session_id
    })
}

    const dayOfWeek = (num) => {
      const dayOfWeekArray = ["日","月", "火", "水", "木", "金", "土"]
      return dayOfWeekArray[num]
    }


    const [value, onChange] = useState(LecturesInfo[lectureId].lecture.lectureStartDate);

    const lecturePeriod = {
      "startDate": LecturesInfo[lectureId].lecture.lectureStartDate,
      "endDate": LecturesInfo[lectureId].lecture.lectureEndDate,
      "lectureDurationClass" : "lecture-duration",
      "lectureDate" : {
        "date": LecturesInfo[lectureId].lecture.liveLectureDate,
        "text": LecturesInfo[lectureId].lecture.lectureTime,
        "className": "lecuture-date"
      }
    }

    const getFormatDate = (value) => {
     return `${value.getFullYear()}${('0' + (value.getMonth() + 1)).slice(-2)}${('0' + value.getDate()).slice(-2)}`;
   }

   const getApplyDeadline = (value) => {
     let dateClone = new Date(value.getTime())
     const applyDeadlineDate = new Date(dateClone.setDate(dateClone.getDate() - 1))
     const dateString = `${applyDeadlineDate.getFullYear()}${('0' + (applyDeadlineDate.getMonth() + 1)).slice(-2)}${('0' + applyDeadlineDate.getDate()).slice(-2)}`
    return (
      `${dateString.slice(4,6)}月${dateString.slice(6,8)}日`
    )
  }

  const getConductDeadline = (value) => {
    let dateClone = new Date(value.getTime())
    const conductDeadlineDate = new Date(dateClone.setDate(dateClone.getDate() - 2))
    const dateString = `${conductDeadlineDate.getFullYear()}${('0' + (conductDeadlineDate.getMonth() + 1)).slice(-2)}${('0' + conductDeadlineDate.getDate()).slice(-2)}`
   return (
     `${dateString.slice(4,6)}月${dateString.slice(6,8)}日`
   )
 }

 const getOneWeekConductDeadline = (value) => {
   let dateClone = new Date(value.getTime())
   const conductDeadlineDate = new Date(dateClone.setDate(dateClone.getDate() - 7))
   const dateString = `${conductDeadlineDate.getFullYear()}${('0' + (conductDeadlineDate.getMonth() + 1)).slice(-2)}${('0' + conductDeadlineDate.getDate()).slice(-2)}`
  return (
    `${dateString.slice(4,6)}月${dateString.slice(6,8)}日`
  )
}

  const getCancelDeadline = (value) => {
    let dateClone = new Date(value.getTime())
    const deadLineDate = new Date(dateClone.setDate(dateClone.getDate() - 7))
    const dateString =
    `${deadLineDate.getFullYear()}${('0' + (deadLineDate.getMonth() + 1)).slice(-2)}${('0' + deadLineDate.getDate()).slice(-2)}`
   return (
     `${dateString.slice(4,6)}月${dateString.slice(6,8)}日`
   )
 }

   const lecturePeriodArray = lecturePeriod.lectureDate.date.map(
     (date) => {
       return (
         getFormatDate(date)
       )
     }
   )

    const getTileContent = (value) => {
      const day = getFormatDate(value)
      return(
        <p className="text-break">
          {(lecturePeriodArray.includes(day))?
            lecturePeriod.lectureDate.text[lecturePeriodArray.indexOf(day)] : ""
          }
        </p>
        )
      }

     const getTileClassName = (value) => {
       const day = getFormatDate(value)
       return(
         (getFormatDate(lecturePeriod.startDate) <= parseInt(day) && parseInt(day) <= getFormatDate(lecturePeriod.endDate))?
         (lecturePeriodArray.includes(day))?
         lecturePeriod.lectureDate.className : lecturePeriod.lectureDurationClass
          : ""
       )
    }
    let simpleSchedule =
      <ListGroup className="mini-schedule d-block d-md-none">
        {
          LecturesInfo[lectureId]["lecture"].liveLectureDate.map(
            (eachDate, index)=>{
              return(
                <ListGroup.Item>
                第{index+1}回講義：
                {getFormatDate(eachDate).slice(4,6)}月
                {getFormatDate(eachDate).slice(6,8)}日({dayOfWeek(eachDate.getDay())})&nbsp;
                {LecturesInfo[lectureId]["lecture"].lectureTime[index]}
                </ListGroup.Item>
              )
            }
          )
        }
      </ListGroup>

    let schedule =
      <div className="schedule d-none d-md-flex justify-content-center">
        <Calendar
          onChange={onChange}
          value={value}
          tileContent = {(value)=>getTileContent(value.date)}
          tileClassName = {(value)=>getTileClassName(value.date)}
        />
      </div>


      const lectureBookUrlinfo = {
        "rakuten": LecturesInfo[lectureId].book.rakutenAffiliateUrl,
        "amazon": LecturesInfo[lectureId].book.amazonAffiliateUrl,
        "calil": LecturesInfo[lectureId].book.calilUrl
        }

    const bookPurchasePageUrl =
    <div className="d-flex flex-row book-url">
      <a className="mr-2 my-1" href={lectureBookUrlinfo.amazon}>
      <p className="mb-0 mx-2 p-1"><b>Amazon</b></p>
      </a>
      <a className="mr-2 my-1" href={lectureBookUrlinfo.calil}>
      <p className="mb-0 mx-2 p-1"><b>カーリル</b></p>
      </a>
    </div>

    const content =
      <div className="top-lecture d-flex justify-content-center align-items-center flex-wrap">
        <div className="book-img-container amazon-url mr-none mr-md-3">
          <a href={lectureBookUrlinfo.amazon} >
            <Image src={require(`${bookimg}`)} fluid />
          </a>
        </div>
        <div className="lecturer-info d-flex flex-column flex-md-row justify-content-center align-items-center flex-nowrap">
            <div className="lecturer-photo">
              <Image src={require(`${lecturerimg}`)} fluid roundedCircle/>
            </div>
          <div className="lecturer-info">
              <p>講師: {LecturesInfo[lectureId]["lecturer"]["name"]}</p>
              <p>専門: {LecturesInfo[lectureId]["lecturer"]["expertise"]}</p>
              <p>所属: {LecturesInfo[lectureId]["lecturer"]["degree"]}</p>
              <p>経歴： <a href={LecturesInfo[lectureId]["lecturer"]["profile-link"]}><u>researchmap</u>を見る</a></p>
          </div>
        </div>
      </div>

      let lecturerIntroVideo =
      <div className="video-outer my-3">
        <p>The Five Books自己紹介({LecturesInfo[lectureId]["lecturer"]["name"]})</p>
        <iframe
          title="test"
          src={LecturesInfo[lectureId]["lecture"]["infoVideoUrl"]}
            width="100%" height="360"
            className="video"
           frameborder="0"
           allow="autoplay; fullscreen" allowfullscreen>
        </iframe>
      </div>

      if (LecturesInfo[lectureId]["lecture"]["infoVideoUrl"] === ""){
        lecturerIntroVideo = <div></div>
      }

    const lectureDetail =
      <div>
        <div className="d-flex flex-column">
          <div className="lecture-detail">
            <h5><u>講義の内容</u></h5>
            <p><ReactMarkdown source={LecturesInfo[lectureId]["lecture"].lectureOverview}
            /></p>
          </div>
          <div className="lecture-detail">
            <h5><u>各講義の内容</u></h5>
            {LecturesInfo[lectureId]["lecture"].eachLectureDetail.map(
              (each, index) => {
                return(
                  <>
                    <p><b>第{index + 1}回({getFormatDate(LecturesInfo[lectureId].lecture.liveLectureDate[index]).slice(4,6)}月{getFormatDate(LecturesInfo[lectureId].lecture.liveLectureDate[index]).slice(6,9)}日({dayOfWeek(LecturesInfo[lectureId].lecture.liveLectureDate[index].getDay())}):{LecturesInfo[lectureId]["lecture"].lectureTime[index]})</b></p>
                    <p><ReactMarkdown source={each}
                    /></p>
                  </>
                )
              }
            )
            }
          </div>

          <div className="lecture-detail">
            <h5><u>講師からのメッセージ</u></h5>
            <div className="d-flex justify-content-center">
              <div className="lecturer-photo d-none d-lg-block">
                <Image src={require(`${lecturerimg}`)} fluid roundedCircle/>
              </div>
              <div className="lecturer-message ml-4">
                <p><ReactMarkdown source={LecturesInfo[lectureId]["lecture"].message}
                /></p>
                {lecturerIntroVideo}
              </div>
            </div>
          </div>
          <div className="lecture-detail mt-4">
            <h5><u>参加料金</u></h5>
            <h4><b>{LecturesInfo[lectureId].lecture.price}円 ({LecturesInfo[lectureId].lecture.price/LecturesInfo[lectureId].lecture.liveLectureDate.length}円/講義×{LecturesInfo[lectureId].lecture.liveLectureDate.length}回)</b></h4>
          </div>
          <div className="lecture-detail mt-4">
            <h5><u>書籍を用意する</u></h5>
            <div className="d-flex">
              {bookPurchasePageUrl}
            </div>
          </div>
        </div>
      </div>

    const courseMaterial =  LecturesInfo[lectureId].lecture.courseMaterial
    let ConductDeadlineMessage = <div><b>
      {getConductDeadline(LecturesInfo[lectureId].lecture.lectureStartDate)}の20:00
    </b>の時点で最小決行人数に達していなかった場合は、本講義をキャンセルさせていただき、参加登録をされた皆様へご返金させていただきます。
    </div>
    if(LecturesInfo[lectureId].lecture.conductDeadLine === 7){
      ConductDeadlineMessage =
      <div><b>
        {getOneWeekConductDeadline(LecturesInfo[lectureId].lecture.lectureStartDate)}の20:00
      </b>の時点で最小決行人数に達していなかった場合は、本講義をキャンセルさせていただき、参加登録をされた皆様へご返金させていただきます。
      </div>
    }

    const disclaimer =
    <div className="lecture-detail d-flex flex-column">
      <ul>
        <li>The Five Booksは、Amazon アソシエイト・プログラムに参加しています。講義に参加ご予定の皆さまが上記amazonURLより書籍をご購入されると、The Five Booksに一定割合の報酬が支払われます。The Five Booksでは、この収入を運営事務に係る経費の支払に充てています。</li>
        <li>The Five Booksは、大学図書館・公共図書館のご利用をお勧めしています。「カーリル」では、全国の図書館蔵書を検索できるサービスです。皆さまがお住まいの都道府県の図書館蔵書も一覧できますので、ぜひご利用ください。</li>
        <li>{courseMaterial}</li>
        <li>講義にはWeb会議サービスの<a href="https://zoom.us/jp-jp/meetings.html"><u>Zoom</u></a>を使用いたします。
        </li>
        <li><b>各講義は、録画のうえ参加者へ講義後に共有いたしますので、一部講義にご参加が難しい場合もご参加をいただけます。</b>
        </li>
        <li>講義では、受講者の方に質問や受講者同士の対話を強要することはありません。講義中のご質問は、Zoomのチャットまたは音声で行うことができます。
        </li>
        <li>受講期間の対話ツールには、<a href="https://slack.com/intl/ja-jp/"><u>Slack</u></a>を使用いたします。</li>
        <li>Zoom, Slack共に、本名またはニックネームでご参加いただけます。</li>
        <li>参加登録、お支払いは、peatixページにて行っていただきますようお願い申し上げます。</li>
        <li>参加申込期限は、<b>{getApplyDeadline(LecturesInfo[lectureId].lecture.lectureStartDate)}の20:00</b>となります。また、申込定員(40名)に達し次第受付を締め切らせて頂きます。</li>
        <li>本講義の最小決行人数は、<b>{LecturesInfo[lectureId].lecture.minimumAtendee}名</b>とさせていただきます。</li>
        <li>{ConductDeadlineMessage}</li>
        <li>参加ご登録後のキャンセルについては、開講1週間前(<b>{getCancelDeadline(LecturesInfo[lectureId].lecture.lectureStartDate)}</b>)まで受付けます。peatixページよりキャンセル申請を行っていただきますようお願いいたします。</li>
        <li>その他のお問い合わせについては、トップページのお問い合わせ欄よりご連絡いただきますようお願い致します。</li>
        <Link to= {`/purchase_provisions`}>
        <li>The Five Booksが実施する講義の特定商取引法に基づく表示は<u><b>こちら</b></u>よりご確認いただけます。</li>
        </Link>
      </ul>
    </div>

    let lectureMiniTitle =
      <div>
        <h4 className="text-center"><b>『{LecturesInfo[lectureId].book.name}』<br/> {LecturesInfo[lectureId].book.author}&nbsp;著</b></h4>
        <h4 className="text-center">
        <b>開講期間:&nbsp;{getFormatDate(LecturesInfo[lectureId].lecture.lectureStartDate).slice(4,6)}月{getFormatDate(LecturesInfo[lectureId].lecture.lectureStartDate).slice(6,9)}日({dayOfWeek(LecturesInfo[lectureId].lecture.lectureStartDate.getDay())})&nbsp;~&nbsp;
        {getFormatDate(LecturesInfo[lectureId].lecture.lectureEndDate).slice(4,6)}月{getFormatDate(LecturesInfo[lectureId].lecture.lectureEndDate).slice(6,9)}日({dayOfWeek(LecturesInfo[lectureId].lecture.lectureEndDate.getDay())})
        </b>
        </h4>
        <h4 className="text-center">
        <b>講義時間:&nbsp;{LecturesInfo[lectureId]["lecture"].lectureTime[0]}
        </b>
        </h4>
      </div>

      if (LecturesInfo[lectureId].book.author === ""){
        lectureMiniTitle =
        <div>
          <h4 className="text-center"><b>『{LecturesInfo[lectureId].book.name}』</b></h4>
          <h4 className="text-center">
          <b>開講期間:&nbsp;{getFormatDate(LecturesInfo[lectureId].lecture.lectureStartDate).slice(4,6)}月{getFormatDate(LecturesInfo[lectureId].lecture.lectureStartDate).slice(6,9)}日({dayOfWeek(LecturesInfo[lectureId].lecture.lectureStartDate.getDay())})&nbsp;~&nbsp;
          {getFormatDate(LecturesInfo[lectureId].lecture.lectureEndDate).slice(4,6)}月{getFormatDate(LecturesInfo[lectureId].lecture.lectureEndDate).slice(6,9)}日({dayOfWeek(LecturesInfo[lectureId].lecture.lectureEndDate.getDay())})
          </b>
          </h4>
          <h4 className="text-center">
          <b>講義時間:&nbsp;{LecturesInfo[lectureId]["lecture"].lectureTime[0]}
          </b>
          </h4>
        </div>
      }

    return(
      <Container fluid>
        <Row>
          <Col xs={12}>
            {lectureMiniTitle}
          </Col>
          <Col xs={12}>
            {content}
          </Col>
          <Col xs={12}>
            <h4 className="text-center">講義スケジュール</h4>
              {schedule}
              {simpleSchedule}
          </Col>
          <Col xs={12} className="d-flex flex-column align-items-center justify-content-center mt-3">
            <h4 className="text-center">講義概要</h4>
              {lectureDetail}
          </Col>
          <Col xs={12} className="d-flex flex-column align-items-center justify-content-center mt-3">
            <h4 className="text-center"><u>ご案内事項</u></h4>
              {disclaimer}
          </Col>
          <Col>
            <div className="buy-button d-flex justify-content-center mt-3">
              <a href={LecturesInfo[lectureId].lecture.peatixURL} className="text-white">  <Button variant="dark" size="lg" block>申し込む<br/>(peatixイベント申込ページへ遷移します)  </Button></a>
            </div>
          </Col>
        </Row>
      </Container>
    )
}

export default Lecture6
