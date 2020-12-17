import React, {useState} from "react"
import {LecturesInfo} from "./index"
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

const stripePromise = loadStripe('pk_test_51H6qTHKu07P8WqmRl9iLKVCNAvq582vfORpsMwBXe5D0tKyvjdNyse5W3rmuDarSfEX7JcA6otvmW8PcJXHir5Ys00bqyudH0R');

const Lecture6 = (props) => {
  const {params} = props.match
  const lectureId = parseInt(params.id)-1

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

    const [value, onChange] = useState(LecturesInfo[lectureId].lecture.lectureStartDate);

    const lecturePeriod = {
      startDate: LecturesInfo[lectureId].lecture.lectureStartDate,
      endDate: LecturesInfo[lectureId].lecture.lectureEndDate,
      lectureDurationClass : "lecture-duration",
      lectureDate : {
        date: LecturesInfo[lectureId].lecture.liveLectureDate,
        text: LecturesInfo[lectureId].lecture.lectureTime,
        className: "lecuture-date"
      }
    }

    const getFormatDate = (value) => {
     return `${value.getFullYear()}${('0' + (value.getMonth() + 1)).slice(-2)}${('0' + value.getDate()).slice(-2)}`;
   }

   const getApplyDeadline = (value) => {
     const dateString = `${value.getFullYear()}${('0' + (value.getMonth() + 1)).slice(-2)}${('0' + value.getDate()).slice(-2)-1}`
    return (
      `${dateString.slice(4,6)}月${dateString.slice(6,8)}日`
    )
  }

  const getConductDeadline = (value) => {
    const dateString = `${value.getFullYear()}${('0' + (value.getMonth() + 1)).slice(-2)}${('0' + value.getDate()).slice(-2)-2}`
   return (
     `${dateString.slice(4,6)}月${dateString.slice(6,8)}日`
   )
 }

  const getCancelDeadline = (value) => {
    const dateString = `${value.getFullYear()}${('0' + (value.getMonth() + 1)).slice(-2)}${('0' + value.getDate()).slice(-2)-7}`
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
                {getFormatDate(eachDate).slice(6,8)}日&nbsp;
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

    const content =
      <div className="top-lecture d-flex justify-content-center align-items-center flex-wrap">
        <div className="book-img-container mr-none mr-md-3">
          <Image src={require(`${LecturesInfo[lectureId]["book"].image}`)} fluid />
        </div>
        <div className="lecturer-info d-flex flex-column flex-md-row justify-content-center align-items-center flex-nowrap">
          <div className="lecturer-photo">
            <Image src={require(`${LecturesInfo[lectureId]["lecturer"].lecturerPhoto}`)} fluid roundedCircle/>
          </div>
          <div className="lecturer-info">
              <p>講師: {LecturesInfo[lectureId]["lecturer"]["name"]}</p>
              <p>専門: {LecturesInfo[lectureId]["lecturer"]["expertise"]}</p>
              <p>所属: {LecturesInfo[lectureId]["lecturer"]["degree"]}</p>
              <p>経歴： <a href={LecturesInfo[lectureId]["lecturer"]["profile-link"]}><u>researchmap</u>を見る</a></p>
          </div>
        </div>
      </div>

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
                    <p><b>第{index + 1}回({getFormatDate(LecturesInfo[lectureId].lecture.liveLectureDate[index]).slice(4,6)}月{getFormatDate(LecturesInfo[lectureId].lecture.liveLectureDate[index]).slice(6,9)}日:{LecturesInfo[lectureId]["lecture"].lectureTime[index]})</b></p>
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
                <Image src={require(`${LecturesInfo[lectureId]["lecturer"].lecturerPhoto}`)} fluid roundedCircle/>
              </div>
              <div className="lecturer-message ml-4">
                <p><ReactMarkdown source={LecturesInfo[lectureId]["lecture"].message}
                /></p>
              </div>
            </div>
          </div>
          <div className="lecture-detail mt-4">
            <h5><u>参加料金</u></h5>
            <h4><b>{LecturesInfo[lectureId].lecture.price}円</b></h4>
          </div>
        </div>
      </div>

    const disclaimer =
    <div className="lecture-detail d-flex flex-column">
      <ul>
        <li>書籍は、参加者各自でご用意ください。</li>
        <li>講義にはWeb会議サービスの<a href="https://zoom.us/jp-jp/meetings.html"><u>Zoom</u></a>を使用いたします。
        </li>
        <li><b>各講義は、録画のうえ参加者へ講義後に共有いたしますので、一部講義にご参加が難しい場合もご参加をいただけます。</b>
        </li>
        <li>講義では、受講者の方に質問や受講者同士の対話を強要することはありません。講義中のご質問は、Zoomのチャットまたは音声で行うことができます。
        </li>
        <li>受講期間の対話ツールには、<a href="https://slack.com/intl/ja-jp/"><u>Slack</u></a>を使用いたします。</li>
        <li>Zoom, Slack共に、本名またはニックネームでご参加いただけます。</li>
        <li>参加登録、お支払いは、peatixページにて行っていただきますようお願い申し上げます。</li>
        <li>参加申込期限は、<b>{getApplyDeadline(LecturesInfo[lectureId].lecture.lectureStartDate)}の20:00</b>となります。また、申込定員(30名)に達し次第受付を締め切らせて頂きます。</li>
        <li>本講義の最小決行人数は、<b>{LecturesInfo[lectureId].lecture.minimumAtendee}名</b>とさせていただきます。</li>
        <li><b>{getConductDeadline(LecturesInfo[lectureId].lecture.lectureStartDate)}の20:00</b>の時点で最小決行人数に達していなかった場合は、本講義をキャンセルさせていただき、参加登録をされた皆様へご返金させていただきます。</li>
        <li>参加ご登録後のキャンセルについては、開講1週間前(<b>{getCancelDeadline(LecturesInfo[lectureId].lecture.lectureStartDate)}</b>)まで受付けます。peatixページよりキャンセル申請を行っていただきますようお願いいたします。</li>
        <li>その他のお問い合わせについては、トップページのお問い合わせ欄よりご連絡いただきますようお願い致します。</li>
      </ul>
    </div>

    return(
      <Container fluid>
        <Row>
          <Col xs={12}>
            <h4 className="text-center"><b>『{LecturesInfo[lectureId].book.name}』<br/> {LecturesInfo[lectureId].book.author}&nbsp;著</b></h4>
            <h4 className="text-center">
            <b>開講期間:&nbsp;{getFormatDate(LecturesInfo[lectureId].lecture.lectureStartDate).slice(4,6)}月{getFormatDate(LecturesInfo[lectureId].lecture.lectureStartDate).slice(6,9)}日&nbsp;~&nbsp;
            {getFormatDate(LecturesInfo[lectureId].lecture.lectureEndDate).slice(4,6)}月{getFormatDate(LecturesInfo[lectureId].lecture.lectureEndDate).slice(6,9)}日
            </b>
            </h4>
            <h4 className="text-center">
            <b>講義時間:&nbsp;{LecturesInfo[lectureId]["lecture"].lectureTime[0]}
            </b>
            </h4>
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
            <h4 className="text-center"><u>注意事項</u></h4>
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
