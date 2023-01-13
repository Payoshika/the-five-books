import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const PurchaseProvisions = (props) => {

  const disclaimer =
  <div className="lecture-detail d-flex flex-column">
    <ul>
      <li><b>サービス提供業者</b></li>
      <p>The Five Books</p>
      <li><b>運営責任者</b></li>
      <p>大石 航平</p>
      <li><b>所在地</b></li>
      <p>〒862-0960 <br/>熊本県熊本市東区下江津5丁目1番地</p>
      <li><b>お問い合わせ先</b></li>
      <p>電話番号については以下メールアドレスにご請求をいただければ、遅滞なく開示いたします。</p>
      <li><b>メールアドレス</b></li>
      <p>info@the-five-books.com</p>
      <li><b>講義参加料金</b></li>
      <p>各講義ページにて掲載いたします。</p>
      <li><b>講義参加料金の支払方法と支払時期</b></li>
      <p>参加登録、お支払いは、peatixページにて承っております。クレジットカード、コンビニ、銀行振込のお支払い方法を受け付けております。<br/>参加登録期限は、講義開始前日の20時としております。また、申込定員(40名)に達し次第受付を締め切らせて頂きます。</p>
      <li><b>サービスの提供時期</b></li>
      <p>各講義ページの「開講期間」をご覧ください。</p>
      <li><b>参加登録のキャンセルについて</b></li>
      <p>各講義について最小決行人数を定めさせていただきます。開講2日前20時の時点にて最小決行人数に達していなかった場合は、講義をキャンセルさせていただき、登録者へご返金させていただきます。<br/>参加登録後のキャンセルについては、開講7日前まで受付けます。peatixページよりキャンセル申請を行っていただきますようお願いいたします。</p>
      <li><b>主催者都合のサービス提供中止について</b></li>
      <p>講義開講前に主催者の都合により開催が中止になる場合は、全額返金いたします。開講後講師都合により講義の開講が中止になる場合は、1度目は振替日を設定し実施いたします。講師都合により2回以上中止になる場合は、当該講義は中止とし、その時点での未開催講義数を全講義回数で割った割合を参加料金に乗じた金額を算出し返金を行います。</p>
      <li><b>電子メールで広告する場合のメールアドレス</b></li>
      <p>info@the-five-books.com</p>
    </ul>
  </div>

      return(
        <Container fluid>
          <Row>
          <Col className="d-flex flex-column align-items-center justify-content-center mt-3">
            <h4 className="text-center"><u><b>特定商取引法に基づく表示</b></u></h4>
              <p className="lecture-detail">「特定商取引に関する法律」第11条に基づき、The Five Booksが実施する講義の提供について、次のとおり明示します。</p>
              {disclaimer}
          </Col>
          </Row>
        </Container>
      )
}

export default PurchaseProvisions
