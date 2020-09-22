import bookImg from "./img/読書について.jpg"
import lecturer_yamano_hiroki from "./img/lecturer_yamano_hiroki.jpg"

const Lecture2Info = {
  book : {
    "name" : "テアイテトス",
    "author" : "プラトン",
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
    "lectureStartDate" : "20201010",
    "lectureEndDate" : "20201107",
    "liveLectureDate" : ["20201010", "20201017", "20201024", "20201031","20201107"],
    "lectureTime" : "10:00-11:30",
    "prerequisite": "特にありません",
    "courseMaterial": "書籍のみ"
  }
}

export default Lecture2Info
