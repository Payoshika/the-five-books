import React, {useState, useEffect} from "react"
import {Lecture1Info, Review} from "./index"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import bookImg from "./img/読書について.jpg"
import lecturer_yamano_hiroki from "./img/lecturer_yamano_hiroki.jpg"
import Calendar from 'react-calendar'
import './styles/calender.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import axios from "axios"

const Lecture9999 = () => {
  const [value, onChange] = useState(new Date(2020, 8, 1));
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)
  const [input, setInput] = useState("")

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(5)

  const lecturePeriod = {
    startDate: Lecture1Info.lecture.lectureStartDate,
    endDate: Lecture1Info.lecture.lectureEndDate,
    lectureDurationClass : "lecture-duration",
    lectureDate : {
      date: Lecture1Info.lecture.liveLectureDate,
      text: `講義 ${Lecture1Info.lecture.lectureTime}`,
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
  <ListGroup className="mini-schedule d-block d-md-none my-3">
  <ListGroup.Item>第一回講義:　{Lecture1Info["lecture"].liveLectureDate[0].slice(5,6)}月 {Lecture1Info["lecture"].liveLectureDate[0].slice(6,9)}日 10:00-11:30 (オンライン開催)
</ListGroup.Item>
  <ListGroup.Item>第二回講義:　{Lecture1Info["lecture"].liveLectureDate[1].slice(5,6)}月 {Lecture1Info["lecture"].liveLectureDate[1].slice(6,9)}日 10:00-11:30 (オンライン開催)</ListGroup.Item>
  <ListGroup.Item>第三回講義:　{Lecture1Info["lecture"].liveLectureDate[2].slice(5,6)}月 {Lecture1Info["lecture"].liveLectureDate[2].slice(6,9)}日 10:00-11:30 (オンライン開催)</ListGroup.Item>
  <ListGroup.Item>第四回講義:　{Lecture1Info["lecture"].liveLectureDate[3].slice(5,6)}月 {Lecture1Info["lecture"].liveLectureDate[3].slice(6,9)}日 10:00-11:30 (オンライン開催)</ListGroup.Item>
</ListGroup>

  let schedule =
    <div className="schedule d-none d-md-flex justify-content-center my-3">
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
            <p>講師: {Lecture1Info["lecturer"]["name"]}</p>
            <p>専門: {Lecture1Info["lecturer"]["expertise"]}</p>
            <p>所属: {Lecture1Info["lecturer"]["degree"]}</p>
            <p>経歴： <a href={Lecture1Info["lecturer"]["profile-link"]}><u>researchmap</u>を見る</a></p>
            <p>講義書籍: {Lecture1Info["lecturer"]["lecturableBooks"].join(", ")}</p>
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
          <p><b>第一回(9月5日)</b></p>
          <p>
          　まず『読書について』を著したアルトゥール・ショウペンハウエルの経歴、および『パレルガ・ウント・パラリポーメナ』の位置づけに関して説明をします。さらに、これから「読書」について考えていくためにも、まずは〈そもそも「頭が良い」とは何か？〉という問いを考えていきたいと思います。
          　また、実際に『読書について』を読み進めていくに際に〈意識すべき点〉、〈押さえておくべき点〉などを指摘し、受講者の方々への〈道しるべ〉を提示したいと思います。そこで、『読書について』のみならず、哲学書全般を読み進めていくときに必須となる「批判的読解」という方法に関して、解説をしていきたいと思います。
          </p>
          <p><b>第二回(9月12日)</b></p>
          <p>
          　「読書について」の範囲の講義を行います。まずは、受講者の方々がSlackに投稿した論点や疑問点を踏まえたうえで、今回の講読範囲の議論の要点をまとめます。
          　さらに、批判的読解をするうえで見逃すことのできない次の二つの論点を提示して、受講者の皆さまと議論を深めたいと思います。その論点とは、「可能性」（130頁）および「古典」（139頁）をめぐるものです。
          </p>
          <p><b>第三回(9月19日)</b></p>
          <p>　「思索」の範囲の講義を行います。まずは、受講者の方々がSlackに投稿した論点や疑問点を踏まえたうえで、今回の講読範囲の議論の要点をまとめます。
          　さらに、批判的読解をするうえで見逃すことのできない二つの論点を提示して、受講者の皆さまと議論を深めたいと思います。その論点とは、「世界という書物」（8-9頁）および「思想体系」（12頁）をめぐるものです。</p>
          <p><b>第四回(9月26日)</b></p>
          <p>　「著作と文体」の範囲の講義を行います。まずは、受講者の方々がSlackに投稿した論点や疑問点を踏まえたうえで、今回の講読範囲の議論の要点をまとめます。
          　さらに、批判的読解をするうえで見逃すことのできない二つの論点を提示して、受講者の皆さまと議論を深めたいと思います。その論点とは、「形式的能力」（38頁）および「幼児」（39頁）をめぐるものです。
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
          <h4><b>4800円</b></h4>
        </div>
      </div>
    </div>

  const disclaimer =
  <div className="lecture-detail d-flex flex-column">
    <ul>
      <li>書籍は、参加者各自でご用意ください。</li>
      <li>「読書について」は岩波書店、光文社より発刊されていますが、どちらを読んでいただいても構いません。
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
      <li>参加申込期限は、<b>9月3日</b>となります。また、申込定員に達し次第受付を締め切らせて頂きます。</li>
      <li>参加ご登録後のキャンセルについては、開講1週間前(8月29日)まで受付けます。peatixページよりキャンセル申請を行っていただきますようお願いいたします。</li>
      <li>その他のお問い合わせについては、トップページのお問い合わせ欄よりご連絡いただきますようお願い致します。</li>
    </ul>
  </div>

  const lectureVideos =
  <div className="video-outer my-3">
    <p>第一回講義</p>
    <iframe
      title="test"
      src="https://player.vimeo.com/video/469189176"
        width="100%" height="360"
        className="video"
       frameborder="0"
       allow="autoplay; fullscreen" allowfullscreen>
    </iframe>
  </div>

  const comingLecture =
  <div className="video-outer my-3">
    <p>第四回講義</p>
    <p>・・・第四回講義後に更新されます。</p>
  </div>

  const lectureTabs =
  <div className="w-100 d-flex flex-column align-items-center">
    <Tabs
      defaultActiveKey="lecture_detail"
      id="uncontrolled-tab-example"
      >
      <Tab
        eventKey="lecture_detail"
        title="講義概要"
        className="w-100"
        >
        <h4 className="text-center my-3">講義スケジュール</h4>
          {schedule}
          {simpleSchedule}
          {lectureDetail}
      </Tab>
      <Tab
        className="w-100"
        eventKey="lecture_videos"
        title="講義動画">
        {lectureVideos}
        {lectureVideos}
        {lectureVideos}
        {lectureVideos}
        {comingLecture}
      </Tab>
      <Tab
        className="w-100"
        eventKey="lecture_reviews"
        title="講義レビュー">
          <Review />
      </Tab>
    </Tabs>
  </div>


    useEffect(()=>{
      const fetchPosts = async () => {
        setLoading(true)
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        setPosts(response.data.slice(0,50))
        setLoading(false)
      }
      fetchPosts()
    },[])

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    let reviewResult =
      <div><p>loading...</p></div>

    if (posts.length > 1){
      reviewResult =
        <ul className="review-result list-group my-4">
          {currentPosts.map(post => {
            return(
              <li key={post.id} className="list-group-item">
                <p>〇〇さん</p>
                <p>{post.body}</p>
                <p>コメント日:10月1日</p>
              </li>
          )})
          }
        </ul>
    }

    const ratingArea =
    <div className="my-3">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick ={() => setRating(ratingValue)}
              />
            <FontAwesomeIcon
              className="star"
              icon={faStar}
              size={"2x"}
              color={ratingValue <= (hover ||rating) ? "#ffc107": "#e4e3e3" }
              onMouseEnter ={() => setHover(ratingValue)}
              onMouseLeave ={() => setHover(null)}
              />
          </label>
        )
        })}
        <span className="mx-3 rating-number">
          {rating}/5
        </span>
      </div>


    const pageNation = (postPerPage, totalPosts) => {
      const pageNumbers = []
       for(let i = 1; i<=Math.ceil(totalPosts / postsPerPage); i++){
         pageNumbers.push(i)
       }
       return(
         <nav className="pagination">
           {pageNumbers.map(number => {
             return(
               <li key={number} className="page-item">
                 <span
                   onClick={()=>setCurrentPage(number)}
                   className="page-link">
                   {number}
                 </span>
               </li>
             )
           })}
         </nav>
       )
    }

  return(
    <Container fluid>
      <Row>
        <Col xs={12}>
          <h4 className="text-center"><b>『{Lecture1Info.book.name} 』<br/> {Lecture1Info.book.author}&nbsp;著</b></h4>
          <h4 className="text-center">
          <b>開講期間:&nbsp;{Lecture1Info.lecture.lectureStartDate.slice(5,6)}月{Lecture1Info.lecture.lectureStartDate.slice(7,9)}日&nbsp;~&nbsp;
          {Lecture1Info.lecture.lectureEndDate.slice(5,6)}月{Lecture1Info.lecture.lectureEndDate.slice(6,9)}日
          </b>
          </h4>
        </Col>
        <Col xs={12}>
          {content}
        </Col>
        <Col xs={12} className="d-flex flex-column align-items-center justify-content-center mt-3">
          {lectureTabs}
        </Col>
        <Col xs={12} className="d-flex flex-column align-items-center justify-content-center my-3">
          <h4 className="text-center">過去参加者のレビュー</h4>
          {reviewResult}
          {pageNation(postsPerPage, posts.length)}
        </Col>

        <Col>
          <div className="buy-button d-flex justify-content-center mt-3">
            <a href="https://the-five-books-schopenhauer.peatix.com/" className="text-white">  <Button variant="dark" size="lg" block>申込受付を終了しました。<br/>(クリックでpeatixイベントページに遷移します)  </Button></a>
          </div>
        </Col>
      </Row>
    </Container>
  )

}

export default Lecture9999
