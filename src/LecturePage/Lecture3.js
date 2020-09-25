import React, {useState} from "react"
import ReactDOM from 'react-dom';
import {Lecture3Info} from "./index"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import taxidancehall from "./img/taxidancehall.jpg"
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
    <ListGroup.Item>第一回講義:　{Lecture3Info["lecture"].liveLectureDate[0].slice(4,6)}月 {Lecture3Info["lecture"].liveLectureDate[0].slice(6,9)}日 20:00-21:30 (オンライン開催)
  </ListGroup.Item>
    <ListGroup.Item>第二回講義:　{Lecture3Info["lecture"].liveLectureDate[1].slice(4,6)}月 {Lecture3Info["lecture"].liveLectureDate[1].slice(6,9)}日 20:00-21:30 (オンライン開催)</ListGroup.Item>
    <ListGroup.Item>第三回講義:　{Lecture3Info["lecture"].liveLectureDate[2].slice(4,6)}月 {Lecture3Info["lecture"].liveLectureDate[2].slice(6,9)}日 20:00-21:30 (オンライン開催)</ListGroup.Item>
    <ListGroup.Item>第四回講義:　{Lecture3Info["lecture"].liveLectureDate[3].slice(4,6)}月 {Lecture3Info["lecture"].liveLectureDate[3].slice(6,9)}日 20:00-21:30 (オンライン開催)</ListGroup.Item>
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
          <Image src={taxidancehall} fluid />
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
              　本講義でご紹介するのは、20世紀初めのシカゴで多く見られた、タクシーに乗るような手軽さで女性とダンスができるダンスホールのモノグラフです。そしてこのモノグラフは、都市社会学という学問ジャンルを確立したシカゴ大学の研究者によって調査、執筆され学位論文として提出されたものです。<br/><br/>
              　本講義では、当時急成長を遂げていた都市シカゴの当時の姿や、シカゴ学派の都市社会学の概要、彼らが行った調査の方法などを解説しながら読み進めることで、タクシーダンス・ホールの世界を楽しんでいただきます。その際、シカゴ学派の視点に力を借りて「夜の街」問題など、現代社会の様々な現象と接続をさせながら考えてみましょう。<br/><br/>
              　現代社会では様々な人々の、様々な世界が重なり合っています。本講義を通して、皆さんが社会構造と接続しながら、未知の小世界に接近する際の一助となればと思っています。Slackでは、本書の読解に関する内容はもちろんのこと、皆さんの普段の生活や、興味を持つ社会的世界を議題に、一緒に理解を深めていきましょう。
            </p>
          </div>
          <div className="lecture-detail">
            <h5><u>各講義の内容</u></h5>
            <p><b>第一回(11月4日)</b></p>
            <p>
            　第一章〜第三章を中心に取り上げます。まずは本講義の全体的な流れ、本書を読み解く上で重要な当時のシカゴの歴史やシカゴ大学の設立、及びシカゴ学派の都市社会学の成立について簡単に取り上げた上で「タクシーダンス・ホール」の活動を覗いてみましょう。
            </p>
            <p><b>第二回(11月11日)</b></p>
            <p>
            　第四章〜第七章を中心に取り上げます。第二回では、著者クレッシーがタクシーダンス・ホールの内実を明らかにするために、主に使用した調査方法を一緒に覗いてみましょう。現代の社会学では様々な調査方法が開拓されていますが、当時のシカゴ学派が用いた調査方法は、現代の社会学でも使用される方法の一つです。この回では、社会学における調査方法に関して概観したうえで、シカゴ学派がその中でいかなる調査法を用いたのか、そしてそれが何を明らかにできたのかを確認しましょう。
            </p>
            <p><b>第三回(11月18日)</b></p>
            <p>
              　第四部「タクシーダンス・ホールの自然史と生態学的特性」（第八章〜十一章）を中心に取り上げます。第三回ではシカゴモノグラフの根底にあるいくつかの概念を紹介します。当時のシカゴ学派の都市社会学者たちが様々な小世界をまなざしたとき、現象を分析するために用いた視点がありました。「社会的世界」「都市」「人間生態学」など本書にも頻出するキーワードを改めて確認することで、本書の読解をより深めていきましょう。
            </p>
          <p><b>第四回(11月25日)</b></p>
            <p>
              　第五部「タクシーダンス・ホールの問題」（第十二章〜第十三章）を中心に取り上げます。これまで読んできたタクシーダンス・ホールの内容をおさらいしながら、現代の問題との接続を考えてみましょう。例えば、現在都市の盛り場には、性風俗店や、私の研究する「オーセンティック」バーなど様々な輪郭を持った社会的世界があります。タクシーダンス・ホールを読み解いていくと、私たちには馴染みがなくても彼ら/彼女らには特有の「理屈」があることに気づくと思います。彼ら/彼女らはいかなる論理で日々活動し、そしてそれは現代の社会構造といかなる関係にあるのでしょうか？シカゴ学派の都市社会学者たちが、当時の都市に溢れる小世界を読み解いたように、私たちも彼らの力を借りていくつかの考察を行ってみましょう。
            </p>
          </div>

          <div className="lecture-detail">
            <h5><u>講師からのメッセージ</u></h5>
            <div className="d-flex justify-content-center">
              <div className="lecturer-photo d-none d-lg-block">
                <Image src={lecturer_seki_shumpei} fluid roundedCircle/>
              </div>
              <div className="lecturer-message ml-4">
                <p>　
                慶應義塾大学の関駿平と申します。専門は都市社会学です。これまで、シカゴ学派の都市社会学を中心に研究を行ってきました。現在は、シカゴ学派の視座に力を借りて「オーセンティック」とカテゴライズされるバーのフィールドワークを行い、都市下位文化の発展や維持、について考えています。<br/><br/>
                　さて、今回私がご紹介するのは、1920年代、遠いシカゴの少し変わったダンスホールです。私たちが生きる現代日本において、この世界に触れることになんの意味があるでしょうか？私たちはここにいる人々から何を学ぶことができるでしょうか？<br/><br/>
                　当時のシカゴ大学の都市社会学者たちは、スラム、ギャング、ホーボー、非行少年などを訪ねて、それらの小さい世界から広い社会構造へと考察を広げました。その際、彼らが用いたのが、都市、社会的世界、人間生態学といった考え方の補助線でした。<br/><br/>
                　本書は遠いシカゴの話ですが、当時の都市社会学者たちが用いる視座は、私たちが生きる現代社会にも応用可能であり、学ぶべき点は多いはずです。例えば現在、未曾有のウイルスによって様々な他者との分断が可視化されています。私が研究対象とする、都市の「夜の街」もその1つでしょう。「夜の街」とはそもそも何を指すのでしょうか？よくわからなかったり、「よく犯罪がニュースで取り上げられている」から、彼ら/彼女らを無批判に切り捨ててしまっていいのでしょうか？<br/><br/>
              　クラスターとしての批判に晒された彼ら/彼女らに潜む、「彼らの理屈」を社会学から読みとくことで、私たちは複雑な因子が絡み合う社会の小世界を少しだけ紐解くことができるかもしれません。<br/><br/>
                　本書を叩き台にして、現代社会に潜む様々な文化を、社会の構造や問題と向き合いながら考察を広げていきましょう。私も皆さんから勉強させていただくような形で、共に講義を楽しめれば嬉しいです。お待ちしております。</p>
              </div>
            </div>
          </div>
          <div className="lecture-detail mt-4">
            <h5><u>参加料金</u></h5>
            <span>参加登録のみ</span><h4><b>4000円</b></h4>
            <span>参加登録 + 書籍配送</span>
            <h4><b>7500円</b></h4>
            <span>*書籍(新本)をThe Five Booksより配送いたします。<br/>
            *本書は定価3960円となっておりますので、書籍配送を選んでいただくと実質310円ほどお得になります。<br/>
            *本講義は最小実行人数が5名となっておりますので、参加人数が5名に達した後に、配送させていただきます。<br/>
            </span>

          </div>
        </div>
      </div>

    const disclaimer =
    <div className="lecture-detail d-flex flex-column">
      <ul>
        <li>本講義の参加登録時に、書籍(新刊)の配送を選ぶことができます。書籍をご自身でご用意いただく場合、<a href="https://honto.jp/netstore/pd-book_28755104.html#stReserve01"><u>hontoウェブサイト</u></a>もしくは<a href="https://www.amazon.co.jp/%E3%82%BF%E3%82%AF%E3%82%B7%E3%83%BC%E3%83%80%E3%83%B3%E3%82%B9%E3%83%BB%E3%83%9B%E3%83%BC%E3%83%AB-%E5%95%86%E6%A5%AD%E7%9A%84%E5%A8%AF%E6%A5%BD%E3%81%A8%E9%83%BD%E5%B8%82%E7%94%9F%E6%B4%BB%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E7%A4%BE%E4%BC%9A%E5%AD%A6%E7%9A%84%E7%A0%94%E7%A9%B6-%E3%82%B7%E3%82%AB%E3%82%B4%E9%83%BD%E5%B8%82%E7%A4%BE%E4%BC%9A%E5%AD%A6%E5%8F%A4%E5%85%B8%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BANo-4-%E3%83%9D%E3%83%BC%E3%83%AB%E3%83%BBG%E3%83%BB-%E3%82%AF%E3%83%AC%E3%83%83%E3%82%B7%E3%83%BC/dp/4863390939/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%82%BF%E3%82%AF%E3%82%B7%E3%83%BC%E3%83%80%E3%83%B3%E3%82%B9+%E3%83%9B%E3%83%BC%E3%83%AB&qid=1600222093&sr=8-1"><u>amazon</u></a>にてお求めいただけます。</li>
        <li>参加費+配送を選ばれた方で、配送後にキャンセルをされる場合、書籍が未開封の場合はThe Five Booksへ返送(送料お客様負担)頂ければ返金いたします。開封済みのお客様のキャンセルの場合、参加料4000円のみの返金となりますので、予めご了承願います。
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
        <li>参加申込期限は、<b>11月3日</b>となります。また、申込定員に達し次第受付を締め切らせて頂きます。</li>
        <li>本講義の最小決行人数は、<b>5名</b>とさせていただきます。</li>
        <li>参加ご登録後のキャンセルについては、<b>開講1週間前(10月28日)</b>まで受付けます。peatixページよりキャンセル申請を行っていただきますようお願いいたします。</li>
        <li>その他のお問い合わせについては、トップページのお問い合わせ欄よりご連絡いただきますようお願い致します。</li>
      </ul>
    </div>

    return(
      <Container fluid>
        <Row>
          <Col xs={12}>
            <h4 className="text-center"><b>『{Lecture3Info.book.name} 』<br/> {Lecture3Info.book.author}&nbsp;著</b></h4>
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
              {lectureDetail}
          </Col>
          <Col xs={12} className="d-flex flex-column align-items-center justify-content-center mt-3">
            <h4 className="text-center"><u>注意事項</u></h4>
              {disclaimer}
          </Col>
          <Col>
            <div className="buy-button d-flex justify-content-center mt-3">
              <a href="https://the-five-books-taxi-dancehall-cressey.peatix.com" className="text-white">  <Button variant="dark" size="lg" block>申し込む<br/>(peatixイベント申込ページへ遷移します)</Button></a>
            </div>
          </Col>
        </Row>
      </Container>
    )
}

export default Lecture3
