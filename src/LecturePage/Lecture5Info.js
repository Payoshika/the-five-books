import bookImg from "./img/詩学.jpg"
import lecturer_yamano_hiroki from "./img/lecturer_yamano_hiroki.jpg"

const Lecture5Info = {
  book : {
    "name" : "詩学",
    "author" : "アリストテレス",
    "publisher" : "岩波文庫",
    "image" : {bookImg}
  },

  lecturer:{
    "name" : "山野 弘樹",
    "expertise" : "現代フランス哲学",
    "degree" : "東京大学大学院 総合文化研究科",
    "affiliation" : "東京大学大学院 総合文化研究科",
    "profile-link" : "https://researchmap.jp/HirokiYamano/?lang=english",
    "lecturableBooks" : ["プラトン", "アリストテレス", "ショーペンハウエル", "デカルト"],
    "lecturerPhoto": {lecturer_yamano_hiroki}
  },

  lecture:{
    "lectureName" : "テスト　テスト",
    "lectureSubtitle" :"テスト　テスト",
    "lecturePurpose" : "テスト　テスト",
    "lectureStartDate" : "20201129",
    "lectureEndDate" : "20201220",
    "liveLectureDate" : ["20201129", "20201206", "20201213", "20201220"],
    "lectureTime" : "11:00-12:30",
    "prerequisite": "特にありません",
    "courseMaterial": "書籍のみ"
  }
}

export default Lecture5Info
