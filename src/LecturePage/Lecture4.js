import React, {useState} from "react"
import ReactDOM from 'react-dom';
import {Lecture4Info} from "./index"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import spiritual_energy from "./img/精神のエネルギー.jpg"
import ListGroup from 'react-bootstrap/ListGroup'
import lecturer_hamada_tomoro from "./img/lecturer_hamada_tomoro.jpg"
import Calendar from 'react-calendar'
import './styles/calender.css';
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios"

const stripePromise = loadStripe('pk_test_51H6qTHKu07P8WqmRl9iLKVCNAvq582vfORpsMwBXe5D0tKyvjdNyse5W3rmuDarSfEX7JcA6otvmW8PcJXHir5Ys00bqyudH0R');

const Lecture4 = () => {

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
      startDate: Lecture4Info.lecture.lectureStartDate,
      endDate: Lecture4Info.lecture.lectureEndDate,
      lectureDurationClass : "lecture-duration",
      lectureDate : {
        date: Lecture4Info.lecture.liveLectureDate,
        text: `講義 ${Lecture4Info.lecture.lectureTime}`,
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
    <ListGroup.Item>第一回講義:　{Lecture4Info["lecture"].liveLectureDate[0].slice(4,6)}月 {Lecture4Info["lecture"].liveLectureDate[0].slice(6,9)}日 {Lecture4Info["lecture"].lectureTime} (オンライン開催)
  </ListGroup.Item>
    <ListGroup.Item>第二回講義:　{Lecture4Info["lecture"].liveLectureDate[1].slice(4,6)}月 {Lecture4Info["lecture"].liveLectureDate[1].slice(6,9)}日 {Lecture4Info["lecture"].lectureTime} (オンライン開催)</ListGroup.Item>
    <ListGroup.Item>第三回講義:　{Lecture4Info["lecture"].liveLectureDate[2].slice(4,6)}月 {Lecture4Info["lecture"].liveLectureDate[2].slice(6,9)}日 {Lecture4Info["lecture"].lectureTime} (オンライン開催)</ListGroup.Item>
    <ListGroup.Item>第四回講義:　{Lecture4Info["lecture"].liveLectureDate[3].slice(4,6)}月 {Lecture4Info["lecture"].liveLectureDate[3].slice(6,9)}日 {Lecture4Info["lecture"].lectureTime} (オンライン開催)</ListGroup.Item>
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
      <div className="top-lecture d-flex flex-column flex-md-row justify-content-center align-items-center flex-wrap">
        <div className="book-img-container mr-none mr-md-3">
          <Image src={spiritual_energy} fluid />
        </div>
        <div className="lecturer-info d-flex flex-column flex-md-row justify-content-center align-items-center flex-nowrap">
          <div className="lecturer-photo">
            <Image src={lecturer_hamada_tomoro} fluid roundedCircle/>
          </div>
          <div className="lecturer-info">
              <p>講師: {Lecture4Info["lecturer"]["name"]}</p>
              <p>専門: {Lecture4Info["lecturer"]["expertise"]}</p>
              <p>所属: {Lecture4Info["lecturer"]["affiliation"]}</p>
              <p>経歴： <a href={Lecture4Info["lecturer"]["profile-link"]}><u>researchmap</u>を見る</a></p>
          </div>
        </div>
      </div>

    const lectureDetail =
      <div>
        <div className="d-flex flex-column">
          <div className="lecture-detail">
            <h5><u>講義の内容</u></h5>
            <p>
              　フランスの哲学者ベルクソン（1859-1941）の講義・論文をまとめた『精神のエネルギー』（1919）を読みましょう。この本は、『時間と自由』『物質と記憶』といった彼の主著としては数えられませんが、彼の思想の全体が表現された講演等が収められている点で、ベルクソン自身によるベルクソン入門として名高いものです。<br/><br/>
              　さて、この三週間の講義では、第一章「意識と生命」・第二章「心と体」・第六章「知的努力」に的を絞って読解と議論を行います（それぞれ別の機会に発表された、独立のものです）。これら三つの講演・論文を読むことによって、生命現象・意識・記憶・自由といった大きな諸問題をともに扱えるベルクソン哲学のエッセンスをいきなり味わい、さらに人間という生物の持つ脳と心の関係について吟味し、そして最後にはわれわれ人間が行う知的な営為（今行おうとしている「読書」も含まれます）がどのような活動であるのかを、かなり繊細に考えることができます。つまり、本講義を方向付ける問いは、「宇宙のなかの、生命のなかの、動物のなかの、われわれ人間が行っている読書というものは、具体的に言ってどんなものなのか」という、壮大でかつ具体的なものとなります。<br/><br/>
              一撃ですべてを理解する――というのではなく、問題を具体的に解きほぐすための思考態度を求めるすべての方に、お勧めできる内容になるはずです。
            </p>
          </div>
          <div className="lecture-detail">
            <h5><u>各講義の内容</u></h5>
            <p><b>第一回({Lecture4Info["lecture"].liveLectureDate[0].slice(4,6)}月{Lecture4Info["lecture"].liveLectureDate[0].slice(6,9)}日)</b></p>
            <p>
              まずは、哲学という営みについて、著者であるベルクソンについて、ベルクソンを取りまく1900年前後の知的状況について……等、この本の読解にあたって最低限押さえておきたい文脈を紹介します。とりわけ重要なのは、ベルクソンという哲学者の探求のスタイルやその表現のスタイルを押さえておくことです。<br/>　そのうえで、第二回で行う「意識と生命」読解の準備作業として、ベルクソンが〈避けようとしている思考の態度〉がどのように形成され、どのような問題を含んでいるかを見ておきます。このことは、われわれ自身が具体的に思考を進めるための、そして分からないものを分からないと言うための、勇気を与えてくれるでしょう。
            </p>
            <p><b>第二回({Lecture4Info["lecture"].liveLectureDate[1].slice(4,6)}月{Lecture4Info["lecture"].liveLectureDate[1].slice(6,9)}日)</b></p>
            <p>
              第二回では「意識と生命」について、受講者の方々の問いに応答したり（ともに悩んだり）して理解を深めつつ、われわれの読解をまとめることにしましょう。検討されるべき論点は様々に潜伏していますが、ここでは主に「どうしてベルクソンは〈意識〉と〈生命〉とを関係づける議論が正当だと考えるのか？」という批判的な観点から、議論を深めたいと思っています。<br/>　加えて第三回で行う「心と体」読解の準備作業として、この講演が持つ論争的性格を押さえておきます。すなわち、「心の状態は身体の状態に完全に依存する」という学説への反論というモチベーションについて理解を深めます。このことは、「心身問題」という大きな哲学的問題について考える手がかりをも与えてくれるはずです。
            </p>
            <p><b>第三回({Lecture4Info["lecture"].liveLectureDate[2].slice(4,6)}月{Lecture4Info["lecture"].liveLectureDate[2].slice(6,9)}日)</b></p>
            <p>
              第三回では「心と体」について、第二回と同様、受講者の方々の疑問点を参照しつつわれわれの読解をまとめ、また議論を行います。例えば心身問題とそれに付随する〈意志〉の問題については、このテクストから様々な論点を取り出すことが可能でしょう。<br/>　加えて第四回で行う「知的努力」読解の準備作業として、この論文に関する基礎的な用語（「表象」・「イメージ」など）について説明し、この論文の前提となっている「意識の諸平面」というベルクソンの学説について概観します。これまでの文章と比べて専門性は高くなりますが、扱われている事例は〈想起のメカニズム〉〈言葉を聞き取ること〉〈芸術家や発明家の発想〉そして〈読書〉といった、とても実践的なものです。
            </p>
          <p><b>第四回({Lecture4Info["lecture"].liveLectureDate[3].slice(4,6)}月{Lecture4Info["lecture"].liveLectureDate[3].slice(6,9)}日)</b></p>
            <p>
              　第四回では「知的努力」についてのわれわれの読解を、受講者の方々の疑問点を参照しつつまとめます（集約点はやはり〈動的図式〉という概念になるでしょう）。<br/>　その上で、われわれ自身が様々な経験・事例を持ち出しながら、知的活動についての議論をすることで、ベルクソンが使っている思考の道具＝概念やモデルを、われわれも実際に駆動させてみましょう。プロ棋士の思考や記憶について考えてみることも、なかなかうまくいかない外国語の学習について考えてみることも可能です。最終回にして何か今後も使える道具が手元に残れば、われわれの三週間の読書はよい成果を収めたことになるでしょう。
            </p>
          </div>

          <div className="lecture-detail">
            <h5><u>講師からのメッセージ</u></h5>
            <div className="d-flex justify-content-center">
              <div className="lecturer-photo d-none d-lg-block">
                <Image src={lecturer_hamada_tomoro} fluid roundedCircle/>
              </div>
              <div className="lecturer-message ml-4">
                <p>はじめまして。京都大学で哲学研究を行っている濱田明日郎と申します。哲学者ベルクソンが為した思考の独自性を、主に『物質と記憶』の読解作業を通じてとり出そうとしています。<br/><br/>
                ベルクソンの思考のおもしろいところは、ある問題について論争中の両陣営がともに立っている前提そのものを突き崩し、その問題がもはや問題とならないような、別の地平を開いてしまうことです。その結果として得られる、世界の見方が一新されるような経験には、何物にも代えがたい、長続きする喜びがあります。もしそのような喜びが少しでも共有できたら、なおよいことだと思います。<br/><br/>
                皆様のご参加を心よりお待ちしております。
                　</p>
              </div>
            </div>
          </div>
          <div className="lecture-detail mt-4">
            <h5><u>参加料金</u></h5>
            <h4><b>5500円</b></h4>
          </div>
        </div>
      </div>

    const disclaimer =
    <div className="lecture-detail d-flex flex-column">
      <ul>
        <li>書籍は、参加者各自でご用意ください。</li>
        <li>講義にはWeb会議サービスの<a href="https://zoom.us/jp-jp/meetings.html"><u>Zoom</u></a>を使用いたします。
        </li>
        <li>講義では、受講者の方に質問や受講者同士の対話を強要することはありません。講義中のご質問は、Zoomのチャットまたは音声で行うことができます。
        </li>
        <li>各講義は、録画のうえ参加者へ講義後に共有いたします。
  </li>
        <li>受講期間の対話ツールには、<a href="https://slack.com/intl/ja-jp/"><u>Slack</u></a>を使用いたします。</li>
        <li>Zoom, Slack共に、本名またはニックネームでご参加いただけます。</li>
        <li>参加登録、お支払いは、以下peatixページにて行っていただきますようお願い申し上げます。</li>
        <li>参加申込期限は、<b>11月20日20:00</b>となります。また、申込定員に達し次第受付を締め切らせて頂きます。</li>
        <li>本講義の最小決行人数は、<b>2名</b>とさせていただきます。</li>
        <li>参加ご登録後のキャンセルについては、<b>開講1週間前(11月14日)</b>まで受付けます。peatixページよりキャンセル申請を行っていただきますようお願いいたします。</li>
        <li>その他のお問い合わせについては、トップページのお問い合わせ欄よりご連絡いただきますようお願い致します。</li>
      </ul>
    </div>

    return(
      <Container fluid>
        <Row>
          <Col xs={12}>
            <h4 className="text-center"><b>『{Lecture4Info.book.name}』<br/> {Lecture4Info.book.author}&nbsp;著</b></h4>
            <h4 className="text-center">
            <b>開講期間:&nbsp;{Lecture4Info.lecture.lectureStartDate.slice(4,6)}月{Lecture4Info.lecture.lectureStartDate.slice(6,9)}日&nbsp;~&nbsp;
            {Lecture4Info.lecture.lectureEndDate.slice(4,6)}月{Lecture4Info.lecture.lectureEndDate.slice(6,9)}日
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
              {lectureDetail}
          </Col>
          <Col xs={12} className="d-flex flex-column align-items-center justify-content-center mt-3">
            <h4 className="text-center"><u>注意事項</u></h4>
              {disclaimer}
          </Col>
          <Col>
            <div className="buy-button d-flex justify-content-center mt-3">
              <a href="https://the-five-books-bergson.peatix.com/" className="text-white">  <Button variant="dark" size="lg" block>申し込む<br/>(peatixイベント申込ページへ遷移します)</Button></a>
            </div>
          </Col>
        </Row>
      </Container>
    )
}

export default Lecture4
