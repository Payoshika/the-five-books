import bookImg from "./img/読書について.jpg"
import lecturerPhoto from "./img/sample-lecturer-photo.png"

const Lecture1Info = {
  book : {
    "name" : "読書について",
    "author" : "ショーペンハウエル",
    "publisher" : "岩波文庫/光文社新古典文庫",
    "image" : {bookImg}
  },

  lecturer:{
    "name" : "山野 弘樹",
    "expertise" : "現代フランス哲学",
    "degree" : "修士(哲学)",
    "affiliation" : "東京大学総合文化研究科",
    "profile-link" : "https://researchmap.jp/HirokiYamano/?lang=english",
    "lecturableBooks" : ["プラトン", "アリストテレス", "ショーペンハウエル"],
    "lecturerPhoto": {lecturerPhoto}
  },

  lecture:{
    "lectureName" : "テスト　テスト",
    "lectureSubtitle" :"テスト　テスト",
    "lecturePurpose" : "テスト　テスト",
    "lectureStartDate" : 20200905,
    "lectureEndDate" : 20200926,
    "liveLectureDate" : [20200905, 20200912, 20200919, 20200926],
    "prerequisite": "特にありません",
    "courseMaterial": "書籍のみ"
  }
}

export default Lecture1Info
