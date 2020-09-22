import React, {useState} from "react"
import ReactDOM from 'react-dom';
import {Lecture2Info} from "./index"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import bookImg from "./img/Theaitetos.jpg"
import ListGroup from 'react-bootstrap/ListGroup'
import lecturer_yamano_hiroki from "./img/lecturer_yamano_hiroki.jpg"
import Calendar from 'react-calendar'
import './styles/calender.css';
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios"

const stripePromise = loadStripe('pk_test_51H6qTHKu07P8WqmRl9iLKVCNAvq582vfORpsMwBXe5D0tKyvjdNyse5W3rmuDarSfEX7JcA6otvmW8PcJXHir5Ys00bqyudH0R');

const Lecture2 = () => {

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

    const [value, onChange] = useState(['2020-10-10', '2020-10-07']);
    const lecturePeriod = {
      startDate: Lecture2Info.lecture.lectureStartDate,
      endDate: Lecture2Info.lecture.lectureEndDate,
      lectureDurationClass : "lecture-duration",
      lectureDate : {
        date: Lecture2Info.lecture.liveLectureDate,
        text: `講義 ${Lecture2Info.lecture.lectureTime}`,
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
    <ListGroup.Item>第一回講義:　{Lecture2Info["lecture"].liveLectureDate[0].slice(4,6)}月 {Lecture2Info["lecture"].liveLectureDate[0].slice(6,9)}日 10:00-11:30 (オンライン開催)
  </ListGroup.Item>
    <ListGroup.Item>第二回講義:　{Lecture2Info["lecture"].liveLectureDate[1].slice(4,6)}月 {Lecture2Info["lecture"].liveLectureDate[1].slice(6,9)}日 10:00-11:30 (オンライン開催)</ListGroup.Item>
    <ListGroup.Item>第三回講義:　{Lecture2Info["lecture"].liveLectureDate[2].slice(4,6)}月 {Lecture2Info["lecture"].liveLectureDate[2].slice(6,9)}日 10:00-11:30 (オンライン開催)</ListGroup.Item>
    <ListGroup.Item>第四回講義:　{Lecture2Info["lecture"].liveLectureDate[3].slice(4,6)}月 {Lecture2Info["lecture"].liveLectureDate[3].slice(6,9)}日 10:00-11:30 (オンライン開催)</ListGroup.Item>
    <ListGroup.Item>第五回講義:　{Lecture2Info["lecture"].liveLectureDate[4].slice(4,6)}月 {Lecture2Info["lecture"].liveLectureDate[4].slice(6,9)}日 10:00-11:30 (オンライン開催)</ListGroup.Item>
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
              <p>講師: {Lecture2Info["lecturer"]["name"]}</p>
              <p>専門: {Lecture2Info["lecturer"]["expertise"]}</p>
              <p>所属: {Lecture2Info["lecturer"]["degree"]}</p>
              <p>経歴： <a href={Lecture2Info["lecturer"]["profile-link"]}><u>researchmap</u>を見る</a></p>
              <p>講義書籍: {Lecture2Info["lecturer"]["lecturableBooks"].join(", ")}</p>
          </div>
        </div>
      </div>

    const lectureDetail =
      <div>
        <div className="d-flex flex-column">
          <div className="lecture-detail">
            <h5><u>講義の内容</u></h5>
            <p>
              　古代ギリシャの哲学者プラトン（前428/427-348/347）中期の著作、『テアイテトス 』（岩波文庫、1966年初版）を四週間で読みます。この対話篇は、『饗宴』や『ゴルギアス』に代表される前期著作と、『法律』や『ピレポス』に代表される後期著作の中間に位置する著作であります。<br/><br/>

              　『テアイテトス』とは、その副題に『知識について』とあるように、「知識」の本質を巡る一連の議論が対話の形で収録された著作です。今から2000年以上前に記されたこの著作は、（SNSを含むメディアによる）情報の洪水に流されつつある現代の私たちにとって、驚くほど示唆に富む洞察を提供してくれます。「ポスト・トゥルース」と呼ばれる時代において、〈真に正しい情報〉とは何なのでしょうか？ そして、「アフター・コロナ」と呼ばれる世界において、〈真に信頼できる知識〉とはいったい何なのでしょうか？ <br/><br/>

              　「最強の思考術！」などといったお手軽メソッドはこの世に存在しません。〈真なる知性〉は、読書や対話といった思考の錬成を通じてのみ獲得されうるものです。世の中には数多くの著作がありますが、ここで一度、古代ギリシャの「対話」の世界に飛び込んでみませんか？ 本講義においては、「そもそも、知識とは何であるのか？」という問いを考え抜くことを通して、不安定かつ流動的な情報化社会を生き抜くための〈読書法〉-〈思考法〉を、受講者の皆さまに提示したいと思います。

            </p>
          </div>
          <div className="lecture-detail">
            <h5><u>各講義の内容</u></h5>
            <p><b>第一回(10月10日)</b></p>
            <p>
            　まず『テアイテトス』を著したプラトンの経歴、およびプラトン哲学における『テアイテトス』の位置づけに関して説明をします。さらに、これから「知識」について考えていく為にも、まずは〈「知っている」とはどのようなことか？〉という問いを考えていきたいと思います。また、実際に『テアイテトス』を読み進めていく際に〈意識すべき点〉、〈押さえておくべき点〉などを指摘し、受講者の方々への〈道しるべ〉を提示したいと思います。そこで、『テアイテトス』のみならず、哲学書全般を読み進めていくときに必須となる「批判的読解」という方法に関して、解説をしていきたいと思います。
            </p>
            <p><b>第二回(10月17日)</b></p>
            <p>
              　『テアイテトス』「一」～「一八」までの範囲の講義を行います。まずは、受講者の方々がSlackに投稿した論点や疑問点を踏まえたうえで、今回の講読範囲の要点をまとめます。さらに、批判的読解をするうえで見逃すことのできない次の二つの論点を提示して、受講者の皆さまと議論を深めたいと思います。その論点とは、「感覚」（38頁）および「記憶」（74頁）をめぐるものです。
            </p>
            <p><b>第三回(10月24日)</b></p>
            <p>　『テアイテトス』「一九」～「三〇」までの範囲の講義を行います。まずは、受講者の方々がSlackに投稿した論点や疑問点を踏まえたうえで、今回の講読範囲の要点をまとめます。さらに、批判的読解をするうえで見逃すことのできない次の二つの論点を提示して、受講者の皆さまと議論を深めたいと思います。その論点とは、「動き」（137頁）および「思量」（148頁）をめぐるものです。
            </p>
            <p><b>第四回(10月31日)</b></p>
            <p>　『テアイテトス』「三一」～「三八」までの範囲の講義を行います。まずは、受講者の方々がSlackに投稿した論点や疑問点を踏まえたうえで、今回の講読範囲の要点をまとめます。さらに、批判的読解をするうえで見逃すことのできない次の二つの論点を提示して、受講者の皆さまと議論を深めたいと思います。その論点とは、「蠟」（166頁）および「鳩小舎」（186頁）をめぐるものです。
            </p>
            <p><b>第五回(11月07日)</b></p>
            <p>　『テアイテトス』「三九」～「四四」までの範囲の講義を行います。まずは、受講者の方々がSlackに投稿した論点や疑問点を踏まえたうえで、今回の講読範囲の要点をまとめます。さらに、批判的読解をするうえで見逃すことのできない次の二つの論点を提示して、受講者の皆さまと議論を深めたいと思います。その論点とは、「言論」（217頁）および「差別性」（230頁）をめぐるものです。
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
            <h4><b>7500円</b></h4>
          </div>
        </div>
      </div>

    const disclaimer =
    <div className="lecture-detail d-flex flex-column">
      <ul>
        <li>書籍は、参加者各自でご用意ください。</li>
        <li>「テアイテトス」は岩波書店、光文社より発刊されていますが、いずれを読んでいただいても構いません。
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
        <li>参加申込期限は、<b>10月9日</b>となります。また、申込定員(30名)に達し次第受付を締め切らせて頂きます。</li>
        <li>本講義の最小決行人数は、<b>2名</b>とさせていただきます。</li>
        <li>参加ご登録後のキャンセルについては、開講1週間前(10月3日)まで受付けます。peatixページよりキャンセル申請を行っていただきますようお願いいたします。</li>
        <li>その他のお問い合わせについては、トップページのお問い合わせ欄よりご連絡いただきますようお願い致します。</li>
      </ul>
    </div>

    return(
      <Container fluid>
        <Row>
          <Col xs={12}>
            <h4 className="text-center"><b>「{Lecture2Info.book.name} 」<br/> {Lecture2Info.book.author}&nbsp;著</b></h4>
            <h4 className="text-center">
            <b>開講期間:&nbsp;{Lecture2Info.lecture.lectureStartDate.slice(4,6)}月{Lecture2Info.lecture.lectureStartDate.slice(6,9)}日&nbsp;~&nbsp;
            {Lecture2Info.lecture.lectureEndDate.slice(4,6)}月{Lecture2Info.lecture.lectureEndDate.slice(6,9)}日
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
              <a href="https://the-five-books-theaetetus.peatix.com/" className="text-white">  <Button variant="dark" size="lg" block>申し込む<br/>(peatixイベント申込ページへ遷移します)  </Button></a>
            </div>
          </Col>
        </Row>
      </Container>
    )
}

export default Lecture2
