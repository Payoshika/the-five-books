import React, {useState} from "react"
import ReactDOM from 'react-dom';
import {Lecture5Info} from "./index"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import bookImg from "./img/詩学.jpg"
import ListGroup from 'react-bootstrap/ListGroup'
import lecturer_yamano_hiroki from "./img/lecturer_yamano_hiroki.jpg"
import Calendar from 'react-calendar'
import './styles/calender.css';
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios"

const stripePromise = loadStripe('pk_test_51H6qTHKu07P8WqmRl9iLKVCNAvq582vfORpsMwBXe5D0tKyvjdNyse5W3rmuDarSfEX7JcA6otvmW8PcJXHir5Ys00bqyudH0R');

const Lecture5 = () => {

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
      startDate: Lecture5Info.lecture.lectureStartDate,
      endDate: Lecture5Info.lecture.lectureEndDate,
      lectureDurationClass : "lecture-duration",
      lectureDate : {
        date: Lecture5Info.lecture.liveLectureDate,
        text: `講義 ${Lecture5Info.lecture.lectureTime}`,
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
    <ListGroup.Item>第一回講義:　{Lecture5Info["lecture"].liveLectureDate[0].slice(4,6)}月 {Lecture5Info["lecture"].liveLectureDate[0].slice(6,9)}日 11:00-12:30 (オンライン開催)
  </ListGroup.Item>
    <ListGroup.Item>第二回講義:　{Lecture5Info["lecture"].liveLectureDate[1].slice(4,6)}月 {Lecture5Info["lecture"].liveLectureDate[1].slice(6,9)}日 11:00-12:45 (オンライン開催)</ListGroup.Item>
    <ListGroup.Item>第三回講義:　{Lecture5Info["lecture"].liveLectureDate[2].slice(4,6)}月 {Lecture5Info["lecture"].liveLectureDate[2].slice(6,9)}日 11:00-12:45 (オンライン開催)</ListGroup.Item>
    <ListGroup.Item>第四回講義:　{Lecture5Info["lecture"].liveLectureDate[3].slice(4,6)}月 {Lecture5Info["lecture"].liveLectureDate[3].slice(6,9)}日 11:00-12:45 (オンライン開催)</ListGroup.Item>
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
            <Image src={lecturer_yamano_hiroki} fluid roundedCircle/>
          </div>
          <div className="lecturer-info">
              <p>講師: {Lecture5Info["lecturer"]["name"]}</p>
              <p>専門: {Lecture5Info["lecturer"]["expertise"]}</p>
              <p>所属: {Lecture5Info["lecturer"]["degree"]}</p>
              <p>経歴： <a href={Lecture5Info["lecturer"]["profile-link"]}><u>researchmap</u>を見る</a></p>
              <p>講義書籍: {Lecture5Info["lecturer"]["lecturableBooks"].join(", ")}</p>
          </div>
        </div>
      </div>

    const lectureDetail =
      <div>
        <div className="d-flex flex-column">
          <div className="lecture-detail">
            <h5><u>講義の内容</u></h5>
            <p>
              　古代ギリシャの哲学者アリストテレス（前384-322）の著作『詩学』を三週間で読みます。この著作は、『ニコマコス倫理学』や『形而上学』と並んで、アリストテレスの代表的な著作であるとされています。上述の二冊とは異なり本書は短いですので、アリストテレスの思想に入門するための最初の一歩を、本書は皆様に提供してくれるでしょう。<br/><br/>現代は、「情報化社会」である以上に、「物語社会」であると言えます。私たちは世界の出来事を、「物語」の形式において理解します。そして、こうした理解の仕方に比例するように、私たちは「物語化された情報」を日々メディアから受け取っています。言わば私たちは、「物語としての世界」を生きているのです。<br/><br/>「物語」とは、私たちが日ごろ鑑賞するフィクション作品の中だけに存在するのではありません。それは私たちが生活する世界の輪郭そのものを形成してしまうのです。<br/><br/>こうした問題意識に立った時、アリストテレスの著作『詩学』はにわかにアクチュアルな意義を帯びます。なぜなら『詩学』とは、〈そもそも物語はいかにして構成されるのか？〉という事柄を真正面から取り扱った著作であるからです。<br/><br/>本講義においては、現代哲学の知見を交えながらアリストテレスの『詩学』を読みぬくことを通して、現代社会に遍在する「物語」の形式を見抜くための〈読書法〉-〈思考法〉を、受講者の皆さまに提示したいと思います。皆様のご参加を、心よりお待ちしております。
              （なお、使用するテクストは光文社版と岩波文庫版のどちらでも構いません。）
            </p>
          </div>
          <div className="lecture-detail">
            <h5><u>各講義の内容</u></h5>
            <p>本講義では、初回講義が11:00-12:30の90分、第二回講義以降は11:00-12:45の105分となっております。</p>
            <p><b>第一回(11月29日 11:00-12:30)</b></p>
            <p>
            　まず『詩学』を著したアリストテレスの経歴、およびアリストテレス哲学における『詩学』の位置づけに関して説明をします。さらに、より深い観点から「物語」について考えていく為にも、〈そもそも、人はなぜ物語るのか？〉という問いを補助線として考えていきたいと思います。また、実際に『詩学』を読み進めていく際に〈意識すべき点〉、〈押さえておくべき点〉などを指摘し、受講者の方々への〈道しるべ〉を提示したいと思います。そこで、『詩学』のみならず、哲学書全般を読み進めていくときに必須となる「批判的読解」という方法に関して、解説をしていきたいと思います。
            </p>
            <p><b>第二回(12月6日 11:00-12:45)</b></p>
            <p>　『詩学』第一章から第九章までの範囲の講義を行います。まずは、受講者の方々がSlackに投稿した論点や疑問点を踏まえたうえで、今回の講読範囲の要点をまとめます。さらに、批判的読解をするうえで見逃すことのできない次の論点を提示して、受講者の皆さまと議論を深めたいと思います。その論点とは、「模倣」と「人間の本姓」をめぐるものです。</p>
            <p><b>第三回(12月13日 11:00-12:45)</b></p>
            <p>　『詩学』第十章から第十八章までの範囲の講義を行います。まずは、受講者の方々がSlackに投稿した論点や疑問点を踏まえたうえで、今回の講読範囲の要点をまとめます。さらに、批判的読解をするうえで見逃すことのできない次の論点を提示して、受講者の皆さまと議論を深めたいと思います。その論点とは、「逆転」と「再認」をめぐるものです。　
            </p>
            <p><b>第四回(10月31日 11:00-12:45)</b></p>
            <p>　『詩学』第十九章から第二十六章までの範囲の講義を行います。まずは、受講者の方々がSlackに投稿した論点や疑問点を踏まえたうえで、今回の講読範囲の要点をまとめます。さらに、批判的読解をするうえで見逃すことのできない次の二つの論点を提示して、受講者の皆さまと議論を深めたいと思います。その論点とは、「比喩」と「悲劇の優越」をめぐるものです。
            </p>
          </div>

          <div className="lecture-detail">
            <h5><u>講師からのメッセージ</u></h5>
            <div className="d-flex justify-content-center">
              <div className="lecturer-photo d-none d-lg-block">
                <Image src={lecturer_yamano_hiroki} fluid roundedCircle/>
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
            <h4><b>6000円</b></h4>
          </div>
        </div>
      </div>

    const disclaimer =
    <div className="lecture-detail d-flex flex-column">
      <ul>
        <li>書籍は、参加者各自でご用意ください。</li>
        <li>『詩学』は岩波書店及び光文社より発刊されていますが、いずれを読んでいただいても構いません。
        </li>
        <li>講義にはWeb会議サービスの<a href="https://zoom.us/jp-jp/meetings.html"><u>Zoom</u></a>を使用いたします。
        </li>
        <li>講義では、受講者の方に質問や受講者同士の対話を強要することはありません。講義中のご質問は、Zoomのチャットまたは音声で行うことができます。
        </li>
        <li>各講義は、録画のうえ参加者へ講義後に共有いたします。
  </li>
        <li>受講期間の対話ツールには、<a href="https://slack.com/intl/ja-jp/"><u>Slack</u></a>を使用いたします。</li>
        <li>Zoom, Slack共に、本名またはニックネームでご参加いただけます。</li>
        <li>参加登録、お支払いは、以下peatixページにて行っていただきますようお願い申し上げます。</li>
        <li>参加申込期限は、<b>11月28日</b>となります。また、申込定員(30名)に達し次第受付を締め切らせて頂きます。</li>
        <li>本講義の最小決行人数は、<b>5名</b>とさせていただきます。</li>
        <li>参加ご登録後のキャンセルについては、開講1週間前(11月21日)まで受付けます。peatixページよりキャンセル申請を行っていただきますようお願いいたします。</li>
        <li>その他のお問い合わせについては、トップページのお問い合わせ欄よりご連絡いただきますようお願い致します。</li>
      </ul>
    </div>

    return(
      <Container fluid>
        <Row>
          <Col xs={12}>
            <h4 className="text-center"><b>『{Lecture5Info.book.name}』<br/> {Lecture5Info.book.author}&nbsp;著</b></h4>
            <h4 className="text-center">
            <b>開講期間:&nbsp;{Lecture5Info.lecture.lectureStartDate.slice(4,6)}月{Lecture5Info.lecture.lectureStartDate.slice(6,9)}日&nbsp;~&nbsp;
            {Lecture5Info.lecture.lectureEndDate.slice(4,6)}月{Lecture5Info.lecture.lectureEndDate.slice(6,9)}日
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
              <a href="https://the-five-books-aristotle-poetics.peatix.com" className="text-white">  <Button variant="dark" size="lg" block>申し込む<br/>(peatixイベント申込ページへ遷移します)  </Button></a>
            </div>
          </Col>
        </Row>
      </Container>
    )
}

export default Lecture5
