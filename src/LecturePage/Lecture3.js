import React, {useState} from "react"
import ReactDOM from 'react-dom';
import {Lecture3Info} from "./index"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import bookImg from "./img/タクシーダンス・ホール.jpg"
import ListGroup from 'react-bootstrap/ListGroup'
import lecturer_seki_shumpei from "./img/lecturer_seki_shumpei.jpg"
import Calendar from 'react-calendar'
import './styles/calender.css';
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios"

const stripePromise = loadStripe('pk_test_51H6qTHKu07P8WqmRl9iLKVCNAvq582vfORpsMwBXe5D0tKyvjdNyse5W3rmuDarSfEX7JcA6otvmW8PcJXHir5Ys00bqyudH0R');

const Lecture3 = () => {

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

    const [value, onChange] = useState(new Date(2020, 10, 1));
    const lecturePeriod = {
      startDate: Lecture3Info.lecture.lectureStartDate,
      endDate: Lecture3Info.lecture.lectureEndDate,
      lectureDurationClass : "lecture-duration",
      lectureDate : {
        date: Lecture3Info.lecture.liveLectureDate,
        text: `講義 ${Lecture3Info.lecture.lectureTime}`,
        className: "lecuture-date"
      }
    }

    const getFormatDate = (value) => {
     return `${value.getFullYear()}${('0' + (value.getMonth() + 1)).slice(-2)}${('0' + value.getDate()).slice(-2)}`;
   }

    const getTileContent = (value) => {
      const day = getFormatDate(value);
      return(
        <p className="text-break">
          {(lecturePeriod.lectureDate.date.includes(day))?
          lecturePeriod.lectureDate.text : ""}
        </p>
        )
      }

     const getTileClassName = (value) => {
       const day = getFormatDate(value)
       return(
         (lecturePeriod.startDate <= parseInt(day) && parseInt(day) <= lecturePeriod.endDate)?
         (lecturePeriod.lectureDate.date.includes(day))?
         lecturePeriod.lectureDate.className : lecturePeriod.lectureDurationClass
          : ""
       )
    }
    let simpleSchedule =
    <ListGroup className="mini-schedule d-block d-md-none">
    <ListGroup.Item>第一回講義:　{Lecture3Info["lecture"].liveLectureDate[0].slice(4,6)}月 {Lecture3Info["lecture"].liveLectureDate[0].slice(6,9)}日 10:00-11:30 (オンライン開催)
  </ListGroup.Item>
    <ListGroup.Item>第二回講義:　{Lecture3Info["lecture"].liveLectureDate[1].slice(4,6)}月 {Lecture3Info["lecture"].liveLectureDate[1].slice(6,9)}日 10:00-11:30 (オンライン開催)</ListGroup.Item>
    <ListGroup.Item>第三回講義:　{Lecture3Info["lecture"].liveLectureDate[2].slice(4,6)}月 {Lecture3Info["lecture"].liveLectureDate[2].slice(6,9)}日 10:00-11:30 (オンライン開催)</ListGroup.Item>
    <ListGroup.Item>第四回講義:　{Lecture3Info["lecture"].liveLectureDate[3].slice(4,6)}月 {Lecture3Info["lecture"].liveLectureDate[3].slice(6,9)}日 10:00-11:30 (オンライン開催)</ListGroup.Item>
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
          <Image src={bookImg} fluid />
        </div>
        <div className="lecturer-info d-flex flex-column flex-md-row justify-content-center align-items-center flex-nowrap">
          <div className="lecturer-photo">
            <Image src={lecturer_seki_shumpei} fluid roundedCircle/>
          </div>
          <div className="lecturer-info">
              <p>講師: {Lecture3Info["lecturer"]["name"]}</p>
              <p>専門: {Lecture3Info["lecturer"]["expertise"]}</p>
              <p>所属: {Lecture3Info["lecturer"]["affiliation"]}</p>
              <p>経歴： <a href={Lecture3Info["lecturer"]["profile-link"]}><u>researchmap</u>を見る</a></p>
          </div>
        </div>
      </div>

    const lectureDetail =
      <div>
        <div className="d-flex flex-column">
          <div className="lecture-detail">
            <h5><u>講義の内容</u></h5>
            <p>
              　ドイツの哲学者アルトゥール・ショウペンハウエル（Arthur Schopenhauer, 1788-1860）晩年の著作、『パレルガ・ウント・パラリポーメナ』(1851年)の一部である『読書について』（岩波文庫、1960年初版）を三週間で読みます。
              　岩波文庫の『読書について』には、「思索」、「著作と文体」、「読書について」の三篇が収録されています。本講義においては、より理解のしやすい順番を考慮して、まずは「読書について」から読み始めていきます。<br/><br/>
              　さて、2020年を迎えたいま、なぜこれほど昔の本を読む必要があるのでしょうか？ その理由は、非常に簡潔に述べるならば、「〈新しいこと〉が書いてあるから」と言えるでしょう。『読書について』という本は、端的に「読書」について書いてある本なのですが、ショウペンハウエルが「読書」（さらには「読者」や「作者」）に対して示す洞察は――驚くべきことに――現代においても全くその輝きを失っておりません。<br/><br/>
              　私たちは小さい頃から「本を読みなさい」と言われます。ですが、ショウペンハウエル曰く、「単にたくさんの本を読んでいればいい」というわけではないのです（！）。それでは、私たちはいかにして、〈真の知性〉を獲得することができるのでしょうか？ さらに、（偏差値では決して測れない）本当の意味での〈賢さ〉とは、いったい何なのでしょうか？ 本講義においては、『読書について』という著作を熟読することを通して、今後の人生をより豊かにするための〈読書法〉‐〈思考法〉を、受講者の皆さまに提示したいと思います。
            </p>
          </div>
          <div className="lecture-detail">
            <h5><u>各講義の内容</u></h5>
            <p><b>第一回(10月10日)</b></p>
            <p>
            　まず『読書について』を著したアルトゥール・ショウペンハウエルの経歴、および『パレルガ・ウント・パラリポーメナ』の位置づけに関して説明をします。さらに、これから「読書」について考えていくためにも、まずは〈そもそも「頭が良い」とは何か？〉という問いを考えていきたいと思います。
            　また、実際に『読書について』を読み進めていくに際に〈意識すべき点〉、〈押さえておくべき点〉などを指摘し、受講者の方々への〈道しるべ〉を提示したいと思います。そこで、『読書について』のみならず、哲学書全般を読み進めていくときに必須となる「批判的読解」という方法に関して、解説をしていきたいと思います。
            </p>
            <p><b>第二回(10月17日)</b></p>
            <p>
            　「読書について」の範囲の講義を行います。まずは、受講者の方々がSlackに投稿した論点や疑問点を踏まえたうえで、今回の講読範囲の議論の要点をまとめます。
            　さらに、批判的読解をするうえで見逃すことのできない次の二つの論点を提示して、受講者の皆さまと議論を深めたいと思います。その論点とは、「可能性」（130頁）および「古典」（139頁）をめぐるものです。
            </p>
            <p><b>第三回(10月24日)</b></p>
            <p>　「思索」の範囲の講義を行います。まずは、受講者の方々がSlackに投稿した論点や疑問点を踏まえたうえで、今回の講読範囲の議論の要点をまとめます。
            　さらに、批判的読解をするうえで見逃すことのできない二つの論点を提示して、受講者の皆さまと議論を深めたいと思います。その論点とは、「世界という書物」（8-9頁）および「思想体系」（12頁）をめぐるものです。</p>
          <p><b>第四回(10月31日)</b></p>
            <p>　「著作と文体」の範囲の講義を行います。まずは、受講者の方々がSlackに投稿した論点や疑問点を踏まえたうえで、今回の講読範囲の議論の要点をまとめます。
            　さらに、批判的読解をするうえで見逃すことのできない二つの論点を提示して、受講者の皆さまと議論を深めたいと思います。その論点とは、「形式的能力」（38頁）および「幼児」（39頁）をめぐるものです。
            </p>
          </div>

          <div className="lecture-detail">
            <h5><u>講師からのメッセージ</u></h5>
            <div className="d-flex justify-content-center">
              <div className="lecturer-photo d-none d-lg-block">
                <Image src={lecturer_seki_shumpei} fluid roundedCircle/>
              </div>
              <div className="lecturer-message ml-4">
                <p>　はじめまして。東京大学で哲学を研究している山野弘樹と申します。普段はポール・リクール(Paul Ricœur, 1913-2005)という現代フランスの哲学者の研究をしているのですが、「より多くの方々に哲学の意義と魅力を知ってもらいたい」という思いのもと、一般の方向けの哲学イベントも数多く主催しております。<br/>
                　私は大学時代に『読書について』を読んだことをきっかけに、哲学の世界へと足を踏み入れました。それ以降、数多くの哲学書を読破することを通して、「批判的読解力」や「論理的思考力」を獲得してきたのですが、今回の講義では、私が東京大学で体得した〈読書の方法〉および〈思考の方法〉を、受講者の皆さまにご提示したいと思います。　<br/>
                　「これまで一冊も哲学書を読んだ経験がありません！」という方でも大丈夫です。〈メタ思考能力〉を向上させたいすべての方（中高生・社会人・シニア世代の方）のご参加を、心よりお待ちしております。</p>
              </div>
            </div>
          </div>
          <div className="lecture-detail mt-4">
            <h5><u>参加料金</u></h5>
            <span>参加登録のみ</span><h4><b>4000円</b></h4>
            <span>参加登録 + 書籍配送</span>
            <h4><b>7500円</b></h4>

          </div>
        </div>
      </div>

    const templectureDetail =
    <div><p></p></div>

    const disclaimer =
    <div className="lecture-detail d-flex flex-column">
      <ul>
        <li>本講義の参加登録時に、書籍(新刊)の配送を選ぶことができます。書籍をご自身でご用意いただく場合、<a href="https://honto.jp/netstore/pd-book_28755104.html#stReserve01"><u>hontoウェブサイト</u></a>もしくは<a href="https://www.amazon.co.jp/%E3%82%BF%E3%82%AF%E3%82%B7%E3%83%BC%E3%83%80%E3%83%B3%E3%82%B9%E3%83%BB%E3%83%9B%E3%83%BC%E3%83%AB-%E5%95%86%E6%A5%AD%E7%9A%84%E5%A8%AF%E6%A5%BD%E3%81%A8%E9%83%BD%E5%B8%82%E7%94%9F%E6%B4%BB%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E7%A4%BE%E4%BC%9A%E5%AD%A6%E7%9A%84%E7%A0%94%E7%A9%B6-%E3%82%B7%E3%82%AB%E3%82%B4%E9%83%BD%E5%B8%82%E7%A4%BE%E4%BC%9A%E5%AD%A6%E5%8F%A4%E5%85%B8%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BANo-4-%E3%83%9D%E3%83%BC%E3%83%AB%E3%83%BBG%E3%83%BB-%E3%82%AF%E3%83%AC%E3%83%83%E3%82%B7%E3%83%BC/dp/4863390939/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%82%BF%E3%82%AF%E3%82%B7%E3%83%BC%E3%83%80%E3%83%B3%E3%82%B9+%E3%83%9B%E3%83%BC%E3%83%AB&qid=1600222093&sr=8-1"><u>amazon</u></a>にてお求めいただけます。</li>
        <li>講義にはWeb会議サービスの<a href="https://zoom.us/jp-jp/meetings.html"><u>Zoom</u></a>を使用いたします。
        </li>
        <li>講義では、受講者の方に質問や受講者同士の対話を強要することはありません。講義中のご質問は、Zoomのチャットまたは音声で行うことができます。
        </li>
        <li>各講義は、録画のうえ参加者へ講義後に共有いたします。
  </li>
        <li>受講期間の対話ツールには、<a href="https://slack.com/intl/ja-jp/"><u>Slack</u></a>を使用いたします。</li>
        <li>Zoom, Slack共に、本名またはニックネームでご参加いただけます。</li>
        <li>参加登録、お支払いは、以下peatixページにて行っていただきますようお願い申し上げます。</li>
        <li>参加申込期限は、<b>11月3日</b>となります。また、申込定員に達し次第受付を締め切らせて頂きます。</li>
        <li>本講義の最小決行人数は、<b>5名</b>とさせていただきます。</li>
        <li>参加ご登録後のキャンセルについては、開講1週間前(10月28日)まで受付けます。peatixページよりキャンセル申請を行っていただきますようお願いいたします。</li>
        <li>その他のお問い合わせについては、トップページのお問い合わせ欄よりご連絡いただきますようお願い致します。</li>
      </ul>
    </div>

    return(
      <Container fluid>
        <Row>
          <Col xs={12}>
            <h4 className="text-center"><b>「{Lecture3Info.book.name} 」<br/> {Lecture3Info.book.author}&nbsp;著</b></h4>
            <h4 className="text-center">
            <b>開講期間:&nbsp;{Lecture3Info.lecture.lectureStartDate.slice(4,6)}月{Lecture3Info.lecture.lectureStartDate.slice(7,9)}日&nbsp;~&nbsp;
            {Lecture3Info.lecture.lectureEndDate.slice(4,6)}月{Lecture3Info.lecture.lectureEndDate.slice(6,9)}日
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
            <h4 className="text-center"></h4>
              {templectureDetail}
          </Col>
          <Col>
            <div className="buy-button d-flex justify-content-center mt-3">
              <a href="#" className="text-white">  <Button variant="dark" size="lg" block>9月末詳細公開予定<br/></Button></a>
            </div>
          </Col>
        </Row>
      </Container>
    )
}

export default Lecture3
