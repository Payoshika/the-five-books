import React from "react"

const LecturesInfo = [
  {
    book : {
      "name" : "読書について",
      "author" : "ショーペンハウエル",
      "publisher" : "岩波文庫",
      "image" : "./img/読書について.jpg",
      },
    lecturer:{
      "name" : "山野 弘樹",
      "expertise" : "現代フランス哲学",
      "degree" : "東京大学大学院 総合文化研究科",
      "affiliation" : "東京大学大学院 総合文化研究科",
      "profile-link" : "https://researchmap.jp/HirokiYamano/?lang=english",
      "lecturerPhoto": './img/lecturer_yamano_hiroki.jpg'
      },
    lecture:{
      "lectureName" : "テスト　テスト",
      "lectureSubtitle" :"テスト　テスト",
      "lecturePurpose" : "テスト　テスト",
      "lectureStartDate" : new Date(2020, 8, 5),
      "lectureEndDate" : new Date(2020, 8, 26),
      "liveLectureDate" : [new Date(2020, 8, 5), new Date(2020, 8, 12), new Date(2020, 8, 19), new Date(2020, 8, 26)],
      "lectureTime" : ["10:00-11:30","10:00-11:30","10:00-11:30","10:00-11:30"],
      "minimumAtendee": 5,
      "price": 4800,
      "prerequisite": "特にありません",
      "courseMaterial": "書籍のみ",
      "lectureOverview": `ドイツの哲学者アルトゥール・ショウペンハウエル（Arthur Schopenhauer, 1788-1860）晩年の著作、『パレルガ・ウント・パラリポーメナ』(1851年)の一部である『読書について』（岩波文庫、1960年初版）を三週間で読みます。岩波文庫の『読書について』には、「思索」、「著作と文体」、「読書について」の三篇が収録されています。\n\n本講義においては、より理解のしやすい順番を考慮して、まずは「読書について」から読み始めていきます。さて、2020年を迎えたいま、なぜこれほど昔の本を読む必要があるのでしょうか？ その理由は、非常に簡潔に述べるならば、「〈新しいこと〉が書いてあるから」と言えるでしょう。\n\n『読書について』という本は、端的に「読書」について書いてある本なのですが、ショウペンハウエルが「読書」（さらには「読者」や「作者」）に対して示す洞察は――驚くべきことに――現代においても全くその輝きを失っておりません。\n\n私たちは小さい頃から「本を読みなさい」と言われます。ですが、ショウペンハウエル曰く、「単にたくさんの本を読んでいればいい」というわけではないのです（！）。それでは、私たちはいかにして、〈真の知性〉を獲得することができるのでしょうか？ さらに、（偏差値では決して測れない）本当の意味での〈賢さ〉とは、いったい何なのでしょうか？ \n\n本講義においては、『読書について』という著作を熟読することを通して、今後の人生をより豊かにするための〈読書法〉‐〈思考法〉を、受講者の皆さまに提示したいと思います。`,
      "eachLectureDetail": [`まず『読書について』を著したアルトゥール・ショウペンハウエルの経歴、および『パレルガ・ウント・パラリポーメナ』の位置づけに関して説明をします。さらに、これから「読書」について考えていくためにも、まずは〈そもそも「頭が良い」とは何か？〉という問いを考えていきたいと思います。また、実際に『読書について』を読み進めていくに際に〈意識すべき点〉、〈押さえておくべき点〉などを指摘し、受講者の方々への〈道しるべ〉を提示したいと思います。そこで、『読書について』のみならず、哲学書全般を読み進めていくときに必須となる「批判的読解」という方法に関して、解説をしていきたいと思います。`, `「読書について」の範囲の講義を行います。まずは、受講者の方々がSlackに投稿した論点や疑問点を踏まえたうえで、今回の講読範囲の議論の要点をまとめます。さらに、批判的読解をするうえで見逃すことのできない次の二つの論点を提示して、受講者の皆さまと議論を深めたいと思います。その論点とは、「可能性」（130頁）および「古典」（139頁）をめぐるものです。`, `「思索」の範囲の講義を行います。まずは、受講者の方々がSlackに投稿した論点や疑問点を踏まえたうえで、今回の講読範囲の議論の要点をまとめます。さらに、批判的読解をするうえで見逃すことのできない二つの論点を提示して、受講者の皆さまと議論を深めたいと思います。その論点とは、「世界という書物」（8-9頁）および「思想体系」（12頁）をめぐるものです。`, `「著作と文体」の範囲の講義を行います。まずは、受講者の方々がSlackに投稿した論点や疑問点を踏まえたうえで、今回の講読範囲の議論の要点をまとめます。さらに、批判的読解をするうえで見逃すことのできない二つの論点を提示して、受講者の皆さまと議論を深めたいと思います。その論点とは、「形式的能力」（38頁）および「幼児」（39頁）をめぐるものです。`],
      "message" : `はじめまして。東京大学で哲学を研究している山野弘樹と申します。普段はポール・リクール(Paul Ricœur, 1913-2005)という現代フランスの哲学者の研究をしているのですが、「より多くの方々に哲学の意義と魅力を知ってもらいたい」という思いのもと、一般の方向けの哲学イベントも数多く主催しております。\n\n私は大学時代に『読書について』を読んだことをきっかけに、哲学の世界へと足を踏み入れました。それ以降、数多くの哲学書を読破することを通して、「批判的読解力」や「論理的思考力」を獲得してきたのですが、今回の講義では、私が東京大学で体得した〈読書の方法〉および〈思考の方法〉を、受講者の皆さまにご提示したいと思います。\n\n「これまで一冊も哲学書を読んだ経験がありません！」という方でも大丈夫です。〈メタ思考能力〉を向上させたいすべての方（中高生・社会人・シニア世代の方）のご参加を、心よりお待ちしております。`,
      "peatixURL": "https://the-five-books-schopenhauer.peatix.com/"
    }
  }
  ,
  {
    book : {
      "name" : "テアイテトス",
      "author" : "プラトン",
      "publisher" : "岩波文庫",
      "image" : "./img/Theaitetos.jpg",
      },
    lecturer:{
      "name" : "山野 弘樹",
      "expertise" : "現代フランス哲学",
      "degree" : "東京大学大学院 総合文化研究科",
      "affiliation" : "東京大学大学院 総合文化研究科",
      "profile-link" : "https://researchmap.jp/HirokiYamano/?lang=english",
      "lecturerPhoto": './img/lecturer_yamano_hiroki.jpg'
      },
    lecture:{
      "lectureName" : "テスト　テスト",
      "lectureSubtitle" :"テスト　テスト",
      "lecturePurpose" : "テスト　テスト",
      "lectureStartDate" : new Date(2020, 9, 10),
      "lectureEndDate" : new Date(2020, 10, 7),
      "liveLectureDate" : [new Date(2020, 9, 10), new Date(2020, 9, 17), new Date(2020, 9, 24), new Date(2020, 9, 31),new Date(2020, 10, 7)],
      "lectureTime" : ["11:00-12:30","11:00-12:30","11:00-12:30","11:00-12:30","11:00-12:30"],
      "minimumAtendee": 2,
      "price": 7500,
      "prerequisite": "特にありません",
      "courseMaterial": "書籍のみ",
      "lectureOverview": `古代ギリシャの哲学者プラトン（前428/427-348/347）中期の著作、『テアイテトス 』（岩波文庫、1966年初版）を四週間で読みます。この対話篇は、『饗宴』や『ゴルギアス』に代表される前期著作と、『法律』や『ピレポス』に代表される後期著作の中間に位置する著作であります。\n\n『テアイテトス』とは、その副題に『知識について』とあるように、「知識」の本質を巡る一連の議論が対話の形で収録された著作です。今から2000年以上前に記されたこの著作は、（SNSを含むメディアによる）情報の洪水に流されつつある現代の私たちにとって、驚くほど示唆に富む洞察を提供してくれます。「ポスト・トゥルース」と呼ばれる時代において、〈真に正しい情報〉とは何なのでしょうか？ そして、「アフター・コロナ」と呼ばれる世界において、〈真に信頼できる知識〉とはいったい何なのでしょうか？\n\n「最強の思考術！」などといったお手軽メソッドはこの世に存在しません。〈真なる知性〉は、読書や対話といった思考の錬成を通じてのみ獲得されうるものです。世の中には数多くの著作がありますが、ここで一度、古代ギリシャの「対話」の世界に飛び込んでみませんか？ 本講義においては、「そもそも、知識とは何であるのか？」という問いを考え抜くことを通して、不安定かつ流動的な情報化社会を生き抜くための〈読書法〉-〈思考法〉を、受講者の皆さまに提示したいと思います。`,
      "eachLectureDetail": [`まず『テアイテトス』を著したプラトンの経歴、およびプラトン哲学における『テアイテトス』の位置づけに関して説明をします。さらに、これから「知識」について考えていく為にも、まずは〈「知っている」とはどのようなことか？〉という問いを考えていきたいと思います。また、実際に『テアイテトス』を読み進めていく際に〈意識すべき点〉、〈押さえておくべき点〉などを指摘し、受講者の方々への〈道しるべ〉を提示したいと思います。そこで、『テアイテトス』のみならず、哲学書全般を読み進めていくときに必須となる「批判的読解」という方法に関して、解説をしていきたいと思います。`, `『テアイテトス』「一」～「一八」までの範囲の講義を行います。まずは、受講者の方々がSlackに投稿した論点や疑問点を踏まえたうえで、今回の講読範囲の要点をまとめます。さらに、批判的読解をするうえで見逃すことのできない次の二つの論点を提示して、受講者の皆さまと議論を深めたいと思います。その論点とは、「感覚」（38頁）および「記憶」（74頁）をめぐるものです。`, `『テアイテトス』「一九」～「三〇」までの範囲の講義を行います。まずは、受講者の方々がSlackに投稿した論点や疑問点を踏まえたうえで、今回の講読範囲の要点をまとめます。さらに、批判的読解をするうえで見逃すことのできない次の二つの論点を提示して、受講者の皆さまと議論を深めたいと思います。その論点とは、「動き」（137頁）および「思量」（148頁）をめぐるものです。`, `『テアイテトス』「三一」～「三八」までの範囲の講義を行います。まずは、受講者の方々がSlackに投稿した論点や疑問点を踏まえたうえで、今回の講読範囲の要点をまとめます。さらに、批判的読解をするうえで見逃すことのできない次の二つの論点を提示して、受講者の皆さまと議論を深めたいと思います。その論点とは、「蠟」（166頁）および「鳩小舎」（186頁）をめぐるものです。`,`『テアイテトス』「三九」～「四四」までの範囲の講義を行います。まずは、受講者の方々がSlackに投稿した論点や疑問点を踏まえたうえで、今回の講読範囲の要点をまとめます。さらに、批判的読解をするうえで見逃すことのできない次の二つの論点を提示して、受講者の皆さまと議論を深めたいと思います。その論点とは、「言論」（217頁）および「差別性」（230頁）をめぐるものです。`],
      "message" : `はじめまして。東京大学で哲学を研究している山野弘樹と申します。普段はポール・リクール(Paul Ricœur, 1913-2005)という現代フランスの哲学者の研究をしているのですが、「より多くの方々に哲学の意義と魅力を知ってもらいたい」という思いのもと、一般の方向けの哲学イベントも数多く主催しております。\n\n私は大学時代に『読書について』を読んだことをきっかけに、哲学の世界へと足を踏み入れました。それ以降、数多くの哲学書を読破することを通して、「批判的読解力」や「論理的思考力」を獲得してきたのですが、今回の講義では、私が東京大学で体得した〈読書の方法〉および〈思考の方法〉を、受講者の皆さまにご提示したいと思います。\n\n「これまで一冊も哲学書を読んだ経験がありません！」という方でも大丈夫です。〈メタ思考能力〉を向上させたいすべての方（中高生・社会人・シニア世代の方）のご参加を、心よりお待ちしております。`,
      "peatixURL": "https://the-five-books-theaetetus.peatix.com"
    }
  },
  {
    book : {
      "name" : "タクシーダンス・ホール",
      "author" : "ポール・G・クレッシー",
      "publisher" : "ハーベスト社",
      "image" : "./img/taxidancehall.jpg",
      },
    lecturer:{
      "name" : "関 駿平",
      "expertise" : "都市社会学",
      "degree" : "慶應義塾大学大学院 社会学研究科",
      "affiliation" : "慶應義塾大学大学院 社会学研究科",
      "profile-link" : "https://researchmap.jp/sseki0403",
      "lecturerPhoto": './img/lecturer_seki_shumpei.jpg'
      },
    lecture:{
      "lectureName" : "テスト　テスト",
      "lectureSubtitle" :"テスト　テスト",
      "lecturePurpose" : "テスト　テスト",
      "lectureStartDate" : new Date(2020, 10, 4),
      "lectureEndDate" : new Date(2020, 10, 25),
      "liveLectureDate" : [new Date(2020, 10, 4), new Date(2020, 10, 11), new Date(2020, 10, 18), new Date(2020, 10, 25)],
      "lectureTime" : ["20:00-21:30","20:00-21:30","20:00-21:30","20:00-21:30"],
      "minimumAtendee": 5,
      "price": 4000,
      "prerequisite": "特にありません",
      "courseMaterial": "書籍のみ",
      "lectureOverview": `本講義でご紹介するのは、20世紀初めのシカゴで多く見られた、タクシーに乗るような手軽さで女性とダンスができるダンスホールのモノグラフです。そしてこのモノグラフは、都市社会学という学問ジャンルを確立したシカゴ大学の研究者によって調査、執筆され学位論文として提出されたものです。\n\n本講義では、当時急成長を遂げていた都市シカゴの当時の姿や、シカゴ学派の都市社会学の概要、彼らが行った調査の方法などを解説しながら読み進めることで、タクシーダンス・ホールの世界を楽しんでいただきます。その際、シカゴ学派の視点に力を借りて「夜の街」問題など、現代社会の様々な現象と接続をさせながら考えてみましょう。\n\n現代社会では様々な人々の、様々な世界が重なり合っています。本講義を通して、皆さんが社会構造と接続しながら、未知の小世界に接近する際の一助となればと思っています。Slackでは、本書の読解に関する内容はもちろんのこと、皆さんの普段の生活や、興味を持つ社会的世界を議題に、一緒に理解を深めていきましょう。`,
      "eachLectureDetail": [`第一章〜第三章を中心に取り上げます。まずは本講義の全体的な流れ、本書を読み解く上で重要な当時のシカゴの歴史やシカゴ大学の設立、及びシカゴ学派の都市社会学の成立について簡単に取り上げた上で「タクシーダンス・ホール」の活動を覗いてみましょう。`, `第四章〜第七章を中心に取り上げます。第二回では、著者クレッシーがタクシーダンス・ホールの内実を明らかにするために、主に使用した調査方法を一緒に覗いてみましょう。現代の社会学では様々な調査方法が開拓されていますが、当時のシカゴ学派が用いた調査方法は、現代の社会学でも使用される方法の一つです。この回では、社会学における調査方法に関して概観したうえで、シカゴ学派がその中でいかなる調査法を用いたのか、そしてそれが何を明らかにできたのかを確認しましょう。`, `第四部「タクシーダンス・ホールの自然史と生態学的特性」（第八章〜十一章）を中心に取り上げます。第三回ではシカゴモノグラフの根底にあるいくつかの概念を紹介します。当時のシカゴ学派の都市社会学者たちが様々な小世界をまなざしたとき、現象を分析するために用いた視点がありました。「社会的世界」「都市」「人間生態学」など本書にも頻出するキーワードを改めて確認することで、本書の読解をより深めていきましょう。`, `第五部「タクシーダンス・ホールの問題」（第十二章〜第十三章）を中心に取り上げます。これまで読んできたタクシーダンス・ホールの内容をおさらいしながら、現代の問題との接続を考えてみましょう。例えば、現在都市の盛り場には、性風俗店や、私の研究する「オーセンティック」バーなど様々な輪郭を持った社会的世界があります。タクシーダンス・ホールを読み解いていくと、私たちには馴染みがなくても彼ら/彼女らには特有の「理屈」があることに気づくと思います。彼ら/彼女らはいかなる論理で日々活動し、そしてそれは現代の社会構造といかなる関係にあるのでしょうか？シカゴ学派の都市社会学者たちが、当時の都市に溢れる小世界を読み解いたように、私たちも彼らの力を借りていくつかの考察を行ってみましょう。`],
      "message" : `慶應義塾大学の関駿平と申します。専門は都市社会学です。これまで、シカゴ学派の都市社会学を中心に研究を行ってきました。現在は、シカゴ学派の視座に力を借りて「オーセンティック」とカテゴライズされるバーのフィールドワークを行い、都市下位文化の発展や維持、について考えています。\n\nさて、今回私がご紹介するのは、1920年代、遠いシカゴの少し変わったダンスホールです。私たちが生きる現代日本において、この世界に触れることになんの意味があるでしょうか？私たちはここにいる人々から何を学ぶことができるでしょうか？\n\n当時のシカゴ大学の都市社会学者たちは、スラム、ギャング、ホーボー、非行少年などを訪ねて、それらの小さい世界から広い社会構造へと考察を広げました。その際、彼らが用いたのが、都市、社会的世界、人間生態学といった考え方の補助線でした。\n\n本書は遠いシカゴの話ですが、当時の都市社会学者たちが用いる視座は、私たちが生きる現代社会にも応用可能であり、学ぶべき点は多いはずです。例えば現在、未曾有のウイルスによって様々な他者との分断が可視化されています。私が研究対象とする、都市の「夜の街」もその1つでしょう。「夜の街」とはそもそも何を指すのでしょうか？よくわからなかったり、「よく犯罪がニュースで取り上げられている」から、彼ら/彼女らを無批判に切り捨ててしまっていいのでしょうか？\n\nクラスターとしての批判に晒された彼ら/彼女らに潜む、「彼らの理屈」を社会学から読みとくことで、私たちは複雑な因子が絡み合う社会の小世界を少しだけ紐解くことができるかもしれません。\n\n本書を叩き台にして、現代社会に潜む様々な文化を、社会の構造や問題と向き合いながら考察を広げていきましょう。私も皆さんから勉強させていただくような形で、共に講義を楽しめれば嬉しいです。お待ちしております。`,
      "peatixURL": "https://the-five-books-taxi-dancehall-cressey.peatix.com"
    }
  },
  {
      book : {
        "name" : "精神のエネルギー",
        "author" : "H.ベルクソン",
        "publisher" : "平凡社",
        "image" : "./img/精神のエネルギー.jpg",
        },
      lecturer:{
        "name" : "濱田 明日郎",
        "expertise" : "哲学",
        "degree" : "京都大学大学院 人間・環境学研究科",
        "affiliation" : "京都大学大学院 人間・環境学研究科",
        "profile-link" : "https://researchmap.jp/HAMADA_TOMOROH",
        "lecturerPhoto": './img/lecturer_hamada_tomoro.jpg'
        },
      lecture:{
        "lectureName" : "テスト　テスト",
        "lectureSubtitle" :"テスト　テスト",
        "lecturePurpose" : "テスト　テスト",
        "lectureStartDate" : new Date(2020, 10, 21),
        "lectureEndDate" : new Date(2020, 11, 12),
        "liveLectureDate" : [new Date(2020, 10, 21), new Date(2020, 10, 28), new Date(2020, 11, 5), new Date(2020, 11, 12)],
        "lectureTime" : ["11:00-12:30","11:00-12:30","11:00-12:30","11:00-12:30"],
        "minimumAtendee": 2,
        "price": 5500,
        "prerequisite": "特にありません",
        "courseMaterial": "書籍のみ",
        "lectureOverview": `　フランスの哲学者ベルクソン（1859-1941）の講義・論文をまとめた『精神のエネルギー』（1919）を読みましょう。この本は、『時間と自由』『物質と記憶』といった彼の主著としては数えられませんが、彼の思想の全体が表現された講演等が収められている点で、ベルクソン自身によるベルクソン入門として名高いものです。\n\nさて、この三週間の講義では、第一章「意識と生命」・第二章「心と体」・第六章「知的努力」に的を絞って読解と議論を行います（それぞれ別の機会に発表された、独立のものです）。これら三つの講演・論文を読むことによって、生命現象・意識・記憶・自由といった大きな諸問題をともに扱えるベルクソン哲学のエッセンスをいきなり味わい、さらに人間という生物の持つ脳と心の関係について吟味し、そして最後にはわれわれ人間が行う知的な営為（今行おうとしている「読書」も含まれます）がどのような活動であるのかを、かなり繊細に考えることができます。つまり、本講義を方向付ける問いは、「宇宙のなかの、生命のなかの、動物のなかの、われわれ人間が行っている読書というものは、具体的に言ってどんなものなのか」という、壮大でかつ具体的なものとなります。\n\n一撃ですべてを理解する――というのではなく、問題を具体的に解きほぐすための思考態度を求めるすべての方に、お勧めできる内容になるはずです。`,
        "eachLectureDetail": [`まずは、哲学という営みについて、著者であるベルクソンについて、ベルクソンを取りまく1900年前後の知的状況について……等、この本の読解にあたって最低限押さえておきたい文脈を紹介します。とりわけ重要なのは、ベルクソンという哲学者の探求のスタイルやその表現のスタイルを押さえておくことです。\nそのうえで、第二回で行う「意識と生命」読解の準備作業として、ベルクソンが〈避けようとしている思考の態度〉がどのように形成され、どのような問題を含んでいるかを見ておきます。このことは、われわれ自身が具体的に思考を進めるための、そして分からないものを分からないと言うための、勇気を与えてくれるでしょう。`, `第二回では「意識と生命」について、受講者の方々の問いに応答したり（ともに悩んだり）して理解を深めつつ、われわれの読解をまとめることにしましょう。検討されるべき論点は様々に潜伏していますが、ここでは主に「どうしてベルクソンは〈意識〉と〈生命〉とを関係づける議論が正当だと考えるのか？」という批判的な観点から、議論を深めたいと思っています。\n加えて第三回で行う「心と体」読解の準備作業として、この講演が持つ論争的性格を押さえておきます。すなわち、「心の状態は身体の状態に完全に依存する」という学説への反論というモチベーションについて理解を深めます。このことは、「心身問題」という大きな哲学的問題について考える手がかりをも与えてくれるはずです。`, `第三回では「心と体」について、第二回と同様、受講者の方々の疑問点を参照しつつわれわれの読解をまとめ、また議論を行います。例えば心身問題とそれに付随する〈意志〉の問題については、このテクストから様々な論点を取り出すことが可能でしょう。\n加えて第四回で行う「知的努力」読解の準備作業として、この論文に関する基礎的な用語（「表象」・「イメージ」など）について説明し、この論文の前提となっている「意識の諸平面」というベルクソンの学説について概観します。これまでの文章と比べて専門性は高くなりますが、扱われている事例は〈想起のメカニズム〉〈言葉を聞き取ること〉〈芸術家や発明家の発想〉そして〈読書〉といった、とても実践的なものです。`, `第四回では「知的努力」についてのわれわれの読解を、受講者の方々の疑問点を参照しつつまとめます（集約点はやはり〈動的図式〉という概念になるでしょう）。\nその上で、われわれ自身が様々な経験・事例を持ち出しながら、知的活動についての議論をすることで、ベルクソンが使っている思考の道具＝概念やモデルを、われわれも実際に駆動させてみましょう。プロ棋士の思考や記憶について考えてみることも、なかなかうまくいかない外国語の学習について考えてみることも可能です。最終回にして何か今後も使える道具が手元に残れば、われわれの三週間の読書はよい成果を収めたことになるでしょう。`],
        "message" : `はじめまして。京都大学で哲学研究を行っている濱田明日郎と申します。哲学者ベルクソンが為した思考の独自性を、主に『物質と記憶』の読解作業を通じてとり出そうとしています。\n\nベルクソンの思考のおもしろいところは、ある問題について論争中の両陣営がともに立っている前提そのものを突き崩し、その問題がもはや問題とならないような、別の地平を開いてしまうことです。その結果として得られる、世界の見方が一新されるような経験には、何物にも代えがたい、長続きする喜びがあります。もしそのような喜びが少しでも共有できたら、なおよいことだと思います。\n\n皆様のご参加を心よりお待ちしております。`,
        "peatixURL": "https://the-five-books-taxi-dancehall-cressey.peatix.com"
      }
    },
    {
      book : {
        "name" : "詩学",
        "author" : "アリストテレス",
        "publisher" : "光文社",
        "image" : "./img/詩学.jpg",
        },
      lecturer:{
        "name" : "山野 弘樹",
        "expertise" : "現代フランス哲学",
        "degree" : "東京大学大学院 総合文化研究科",
        "affiliation" : "東京大学大学院 総合文化研究科",
        "profile-link" : "https://researchmap.jp/HirokiYamano/?lang=english",
        "lecturerPhoto": './img/lecturer_yamano_hiroki.jpg'
        },
      lecture:{
        "lectureName" : "テスト　テスト",
        "lectureSubtitle" :"テスト　テスト",
        "lecturePurpose" : "テスト　テスト",
        "lectureStartDate" : new Date(2020, 10, 29),
        "lectureEndDate" : new Date(2020, 11, 20),
        "liveLectureDate" : [new Date(2020, 10, 29), new Date(2020, 11, 6), new Date(2020, 11, 13), new Date(2020, 11, 20)],
        "lectureTime" : ["11:00-12:30","11:00-12:45","11:00-12:45","11:00-12:45"],
        "minimumAtendee": 5,
        "price": 6000,
        "prerequisite": "特にありません",
        "courseMaterial": "書籍のみ",
        "lectureOverview": `古代ギリシャの哲学者アリストテレス（前384-322）の著作『詩学』を三週間で読みます。この著作は、『ニコマコス倫理学』や『形而上学』と並んで、アリストテレスの代表的な著作であるとされています。上述の二冊とは異なり本書は短いですので、アリストテレスの思想に入門するための最初の一歩を、本書は皆様に提供してくれるでしょう。\n\n現代は、「情報化社会」である以上に、「物語社会」であると言えます。私たちは世界の出来事を、「物語」の形式において理解します。そして、こうした理解の仕方に比例するように、私たちは「物語化された情報」を日々メディアから受け取っています。言わば私たちは、「物語としての世界」を生きているのです。\n\n「物語」とは、私たちが日ごろ鑑賞するフィクション作品の中だけに存在するのではありません。それは私たちが生活する世界の輪郭そのものを形成してしまうのです。\n\nこうした問題意識に立った時、アリストテレスの著作『詩学』はにわかにアクチュアルな意義を帯びます。なぜなら『詩学』とは、〈そもそも物語はいかにして構成されるのか？〉という事柄を真正面から取り扱った著作であるからです。\n\n本講義においては、現代哲学の知見を交えながらアリストテレスの『詩学』を読みぬくことを通して、現代社会に遍在する「物語」の形式を見抜くための〈読書法〉-〈思考法〉を、受講者の皆さまに提示したいと思います。皆様のご参加を、心よりお待ちしております。 （なお、使用するテクストは光文社版と岩波文庫版のどちらでも構いません。）`,
        "eachLectureDetail": [`まず『詩学』を著したアリストテレスの経歴、およびアリストテレス哲学における『詩学』の位置づけに関して説明をします。さらに、より深い観点から「物語」について考えていく為にも、〈そもそも、人はなぜ物語るのか？〉という問いを補助線として考えていきたいと思います。また、実際に『詩学』を読み進めていく際に〈意識すべき点〉、〈押さえておくべき点〉などを指摘し、受講者の方々への〈道しるべ〉を提示したいと思います。そこで、『詩学』のみならず、哲学書全般を読み進めていくときに必須となる「批判的読解」という方法に関して、解説をしていきたいと思います。`, `『詩学』第一章から第九章までの範囲の講義を行います。まずは、受講者の方々がSlackに投稿した論点や疑問点を踏まえたうえで、今回の講読範囲の要点をまとめます。さらに、批判的読解をするうえで見逃すことのできない次の論点を提示して、受講者の皆さまと議論を深めたいと思います。その論点とは、「模倣」と「人間の本性」をめぐるものです。`, `『詩学』第十章から第十八章までの範囲の講義を行います。まずは、受講者の方々がSlackに投稿した論点や疑問点を踏まえたうえで、今回の講読範囲の要点をまとめます。さらに、批判的読解をするうえで見逃すことのできない次の論点を提示して、受講者の皆さまと議論を深めたいと思います。その論点とは、「逆転」と「再認」をめぐるものです。　`, `『詩学』第十九章から第二十六章までの範囲の講義を行います。まずは、受講者の方々がSlackに投稿した論点や疑問点を踏まえたうえで、今回の講読範囲の要点をまとめます。さらに、批判的読解をするうえで見逃すことのできない次の二つの論点を提示して、受講者の皆さまと議論を深めたいと思います。その論点とは、「比喩」と「悲劇の優越」をめぐるものです。`],
        "message" : `はじめまして。東京大学で哲学を研究している山野弘樹と申します。普段はポール・リクール(Paul Ricœur, 1913-2005)という現代フランスの哲学者の研究をしているのですが、「より多くの方々に哲学の意義と魅力を知ってもらいたい」という思いのもと、一般の方向けの哲学イベントも数多く主催しております。\n\n私は大学時代に『読書について』を読んだことをきっかけに、哲学の世界へと足を踏み入れました。それ以降、数多くの哲学書を読破することを通して、「批判的読解力」や「論理的思考力」を獲得してきたのですが、今回の講義では、私が東京大学で体得した〈読書の方法〉および〈思考の方法〉を、受講者の皆さまにご提示したいと思います。\n\n「これまで一冊も哲学書を読んだ経験がありません！」という方でも大丈夫です。〈メタ思考能力〉を向上させたいすべての方（中高生・社会人・シニア世代の方）のご参加を、心よりお待ちしております。`,
        "peatixURL": "https://the-five-books-schopenhauer.peatix.com/"
      }
    },
  {
    book : {
      "name" : "読書について",
      "author" : "ショーペンハウエル",
      "publisher" : "岩波文庫",
      "image" : "./img/読書について.jpg",
      },
    lecturer:{
      "name" : "山野 弘樹",
      "expertise" : "現代フランス哲学",
      "degree" : "東京大学大学院 総合文化研究科",
      "affiliation" : "東京大学大学院 総合文化研究科",
      "profile-link" : "https://researchmap.jp/HirokiYamano/?lang=english",
      "lecturerPhoto": './img/lecturer_yamano_hiroki.jpg'
      },
    lecture:{
      "lectureName" : "テスト　テスト",
      "lectureSubtitle" :"テスト　テスト",
      "lecturePurpose" : "テスト　テスト",
      "lectureStartDate" : new Date(2021, 0, 13),
      "lectureEndDate" : new Date(2021, 1, 3),
      "liveLectureDate" : [new Date(2021, 0, 13), new Date(2021, 0, 20), new Date(2021, 0, 27), new Date(2021, 1, 3)],
      "lectureTime" : ["20:00-21:30","20:00-21:45","20:00-21:45","20:00-21:45"],
      "minimumAtendee": 5,
      "price": 6500,
      "prerequisite": "特にありません",
      "courseMaterial": "書籍のみ",
      "lectureOverview": `ドイツの哲学者アルトゥール・ショウペンハウエル（Arthur Schopenhauer, 1788-1860）晩年の著作、『パレルガ・ウント・パラリポーメナ』(1851年)の一部である『読書について』（岩波文庫、1960年初版）を三週間で読みます。岩波文庫の『読書について』には、「思索」、「著作と文体」、「読書について」の三篇が収録されています。\n\n本講義においては、より理解のしやすい順番を考慮して、まずは「読書について」から読み始めていきます。さて、2020年を迎えたいま、なぜこれほど昔の本を読む必要があるのでしょうか？ その理由は、非常に簡潔に述べるならば、「〈新しいこと〉が書いてあるから」と言えるでしょう。\n\n『読書について』という本は、端的に「読書」について書いてある本なのですが、ショウペンハウエルが「読書」（さらには「読者」や「作者」）に対して示す洞察は――驚くべきことに――現代においても全くその輝きを失っておりません。\n\n私たちは小さい頃から「本を読みなさい」と言われます。ですが、ショウペンハウエル曰く、「単にたくさんの本を読んでいればいい」というわけではないのです（！）。それでは、私たちはいかにして、〈真の知性〉を獲得することができるのでしょうか？ さらに、（偏差値では決して測れない）本当の意味での〈賢さ〉とは、いったい何なのでしょうか？ \n\n本講義においては、『読書について』という著作を熟読することを通して、今後の人生をより豊かにするための〈読書法〉‐〈思考法〉を、受講者の皆さまに提示したいと思います。`,
      "eachLectureDetail": [`まず『読書について』を著したアルトゥール・ショウペンハウエルの経歴、および『パレルガ・ウント・パラリポーメナ』の位置づけに関して説明をします。さらに、これから「読書」について考えていくためにも、まずは〈そもそも「頭が良い」とは何か？〉という問いを考えていきたいと思います。また、実際に『読書について』を読み進めていくに際に〈意識すべき点〉、〈押さえておくべき点〉などを指摘し、受講者の方々への〈道しるべ〉を提示したいと思います。そこで、『読書について』のみならず、哲学書全般を読み進めていくときに必須となる「批判的読解」という方法に関して、解説をしていきたいと思います。\n\n*第一回講義は20:00-21:30の90分、第二回以降は20:00-21:45の105分となります。`, `「読書について」の範囲の講義を行います。まずは、受講者の方々がSlackに投稿した論点や疑問点を踏まえたうえで、今回の講読範囲の議論の要点をまとめます。さらに、批判的読解をするうえで見逃すことのできない次の二つの論点を提示して、受講者の皆さまと議論を深めたいと思います。その論点とは、「可能性」（130頁）および「古典」（139頁）をめぐるものです。`, `「思索」の範囲の講義を行います。まずは、受講者の方々がSlackに投稿した論点や疑問点を踏まえたうえで、今回の講読範囲の議論の要点をまとめます。さらに、批判的読解をするうえで見逃すことのできない二つの論点を提示して、受講者の皆さまと議論を深めたいと思います。その論点とは、「世界という書物」（8-9頁）および「思想体系」（12頁）をめぐるものです。`, `「著作と文体」の範囲の講義を行います。まずは、受講者の方々がSlackに投稿した論点や疑問点を踏まえたうえで、今回の講読範囲の議論の要点をまとめます。さらに、批判的読解をするうえで見逃すことのできない二つの論点を提示して、受講者の皆さまと議論を深めたいと思います。その論点とは、「形式的能力」（38頁）および「幼児」（39頁）をめぐるものです。`],
      "message" : `はじめまして。東京大学で哲学を研究している山野弘樹と申します。普段はポール・リクール(Paul Ricœur, 1913-2005)という現代フランスの哲学者の研究をしているのですが、「より多くの方々に哲学の意義と魅力を知ってもらいたい」という思いのもと、一般の方向けの哲学イベントも数多く主催しております。\n\n私は大学時代に『読書について』を読んだことをきっかけに、哲学の世界へと足を踏み入れました。それ以降、数多くの哲学書を読破することを通して、「批判的読解力」や「論理的思考力」を獲得してきたのですが、今回の講義では、私が東京大学で体得した〈読書の方法〉および〈思考の方法〉を、受講者の皆さまにご提示したいと思います。\n\n「これまで一冊も哲学書を読んだ経験がありません！」という方でも大丈夫です。〈メタ思考能力〉を向上させたいすべての方（中高生・社会人・シニア世代の方）のご参加を、心よりお待ちしております。`,
      "peatixURL": "https://the-five-books-schopenhauer-books.peatix.com"
    }
  },
  {
    book : {
    "name" : "方法序説",
    "author" : "ルネ・デカルト",
    "publisher" : "岩波文庫",
    "image" : "./img/方法序説.jpg",
    },
    lecturer:{
      "name" : "三浦 隼暉",
      "expertise" : "哲学",
      "degree" : "東京大学大学院 人文社会系研究科",
      "affiliation" : "東京大学大学院 人文社会系研究科",
      "profile-link" : "https://researchmap.jp/junki1129/?lang=ja",
      "lecturerPhoto": './img/lecturer_miura_junki.jpg'
    },
    lecture:{
      "lectureName" : "テスト　テスト",
      "lectureSubtitle" :"テスト　テスト",
      "lecturePurpose" : "テスト　テスト",
      "lectureStartDate" : new Date(2021, 0, 16),
      "lectureEndDate" : new Date(2021, 1, 6),
      "liveLectureDate" : [new Date(2021, 0, 16), new Date(2021, 0, 23), new Date(2021, 0, 30), new Date(2021, 1, 6)],
      "lectureTime" : ["11:00-12:30","11:00-12:30","11:00-12:30","11:00-12:30"],
      "minimumAtendee": 5,
      "price": 6000,
      "prerequisite": "特にありません",
      "courseMaterial": "書籍のみ",
      "lectureOverview": `今から約400年前、現代科学の礎が築かれた科学革命の時代、ルネ・デカルト（1596–1650）という一人の天才が、新たな哲学を打ち立てるために奮闘していたことをご存知でしょうか。この講義では、そんな彼の努力のなかで生み出された稀代の名著『方法序説』（1637）を三週間かけて一緒に読んでゆくことになります。\n\nこの本を読んで得られるものを一言で表すならば、〈考えるための方法〉ということになるでしょう。彼の生きた17世紀は「方法の世紀」とも呼ばれる時代でした。なぜ方法なのか。それは、新たなものごとの誕生には常にそれを遂行するための方法が伴わなければならないからです。前の時代と同じやり方では同じ結果になってしまう。彼らは方法を打ち立てることで、新たな科学を、そして新たな哲学を打ち立てようと試みたのではないかと私は考えています。\n\n『方法序説』はそんな方法の世紀においても、随一の影響力と破壊力をもつ書物でした。その内容を見ると、現代科学では否定されている事実や、批判されがちな心身の二元論などが登場してきます。しかし、本書を読む上で重要なのは、デカルトがそのような考えに至ったのはなぜか、という点です。そこにこそ方法があるからです。そのような思考の方法は、いつの時代にも妥当しうるものとして、現代の我々にとっても大いに参考になることでしょう。\n\n使用テクスト：『方法序説』は岩波文庫や中公クラシックス、白水Uブックス等から翻訳が出ています。各自手に入れやすいものをご用意ください。それぞれで訳が異なる部分があると思いますが、そういった違いがなぜ生じてくるのかを考えることも含めて楽しみましょう。`,
      "eachLectureDetail": [`山に登ったことがある方はご存知かもしれませんが、道具を揃えたり、地図を確認したりする準備作業は、山登りそのものと同じくらい、あるいそれ以上に大事な作業です。最初の講義では、『方法序説』を読み進めるための入念な準備をしてゆきます。古典を読む上での難しさのひとつに、それが書かれた時代の人々と問題意識を共有できていないということが挙げられます。この講義では、なぜデカルトが『方法序説』を書かなければならなかったのか、ということについて他の哲学者たちや、歴史的出来事との関係でみてゆくことになるでしょう。また、地図を確認するように、この著作の全体像についても忘れずに確認しなければなりませんね。`, `この講義では『方法序説』第1部から第3部を扱います。この箇所では、この著作に至るまでのデカルト自身の来歴が回想されながら、学問や実践のための規則や格率が示されています。それらの中身について吟味し、それらを通じて彼が伝えようとしていたことを掴み取りましょう。`, `この講義では『方法序説』第4部を扱います。この箇所では、デカルトの形而上学的な思想が展開されています（有名な「我思う故に我あり」も登場します）。伝統的な哲学用語や哲学的な意味での「神」に関する議論は、初めて読む方々にとっては少し難しいかもしれません。でも心配いりません！この講義では初めから丁寧に解説してゆきます。`, `この講義では『方法序説』第5部から第6部を扱います。この箇所では、デカルトの自然学に関する思想が展開されています。物理や医学、宇宙などについて考えることはどれも、「自然」というものについて考えることです。ここでは、よく批判される、動物を単なる機械とみなす考え方も登場してきます。でも、デカルトは実際どんな言い方をしていたのでしょうか。自分自身の目で彼の言い分を吟味してみましょう。`],
      "message" : `こんにちは。東京大学大学院で哲学を研究している三浦隼暉（みうらじゅんき）と申します。「哲学研究って何をしているの？」と聞かれることがしばしばあります。研究の進め方は人によって様々ですが、私の場合、約300–400年前のヨーロッパで書かれたものを読みながら、その内容を、時代も文化も全く異なる現代の我々にも理解できるような仕方で提示し直すような研究をしています。\n\n哲学との出会いはいつだって早くも遅くもない、と私は考えています。大事なのは、どんな風に出会うか、ということなのです。私は幸い素敵な先生に導かれて哲学書を上手に読み始めることができました。もしみなさんにとって私がそのような存在になれたら、なんと素晴らしいことでしょうか。\n\nけれど、上手に読むことよりもっと大事なことがあります。それは「哲学は留保なしに愉しい」と感じることです。一緒に哲学書を紐解くことで、そのような愉しさを経験するお手伝いができればと考えています。最後に、私の恩師が残した言葉を送ります。「本は一人で読むものですが、ときには窓を開けて一緒に哲学をしましょう」。`,
      "peatixURL": "https://the-five-books-discourse-on-the-method.peatix.com"
    }
  },
  {
  book : {
  "name" : "世論(上・下)",
  "author" : "W.リップマン",
  "publisher" : "岩波文庫",
  "image" : "./img/世論.jpg",
  },
  lecturer:{
    "name" : "佐藤 信吾",
    "expertise" : "ジャーナリズム論",
    "degree" : "慶應義塾大学大学院 社会学研究科",
    "affiliation" : "慶應義塾大学大学院 社会学研究科",
    "profile-link" : "https://researchmap.jp/shingosato",
    "lecturerPhoto": './img/lecturer_sato_shingo.jpg'
  },
  lecture:{
    "lectureName" : "テスト　テスト",
    "lectureSubtitle" :"テスト　テスト",
    "lecturePurpose" : "テスト　テスト",
    "lectureStartDate" : new Date(2021, 1, 13),
    "lectureEndDate" : new Date(2021, 2, 13),
    "liveLectureDate" : [new Date(2021, 1, 13), new Date(2021, 1, 20), new Date(2021, 1, 27), new Date(2021, 2, 6), new Date(2021, 2, 13)],
    "lectureTime" : ["10:30-12:00","10:30-12:00","10:30-12:00","10:30-12:00","10:30-12:00"],
    "minimumAtendee": 10,
    "price": 7500,
    "prerequisite": "特にありません",
    "courseMaterial": "書籍のみ",
    "lectureOverview": `1922年にアメリカのジャーナリスト、ウォルター・リップマンによって執筆されたのが『世論』です。100年程度前（第1次世界大戦と第2次世界大戦の戦間期）に書かれた本書ですが、その内容は全く古びておらず、現在のメディア社会を生きる読者にも多くの示唆を与えてくれます。\n\nリップマンの射程は単にジャーナリズムやマス・メディア（新聞）に留まらず、社会的動物である人間の認知や理解、人間同士の相互作用にまで及んでいます。氾濫する簡便なマスコミ批判や安易な情報社会論とは一線を画する『世論』は、繰り返し読み返す価値のある本と言えるのではないでしょうか。\n\n当時と現在ではメディア環境、政治状況、戦争の形態などが大きく変化しましたが、リップマンの声に耳を傾けながら、問題の連続性や変化を考えることで、私たちの社会を一緒に反省的に検討していきたいと思っています。
`,
    "eachLectureDetail": [`　まず『世論』を著したリップマンの経歴、および『世論』が著された時代のメディア論、ジャーナリズム論的背景を説明をします。20世紀はマス・メディアの世紀と考えられるほどに新聞・ラジオ・テレビが隆盛を極めた時代といえます。リップマンはまさにその初頭から終盤まで活躍したジャーナリストであり、時代背景とともに彼の議論を理解することで『世論』をより深く読むことができると考えます。その中で、リップマンの視点を現在と接続するために、インターネットを含めた現代社会の概観も行います。`, `　『世論』第一部から第二部までの範囲の講義を行います。まずは、受講者の方々がSlackに投稿した論点や疑問点を踏まえたうえで、今回の講読範囲の要点をまとめます。さらに、批判的読解をするうえで見逃すことのできない次の論点を提示して、受講者の皆さまと議論を深めたいと思います。その論点とは、「疑似環境」と「名付け」をめぐるものです。`, `『世論』第三部から第四部までの範囲の講義を行います。まずは、受講者の方々がSlackに投稿した論点や疑問点を踏まえたうえで、今回の講読範囲の要点をまとめます。さらに、批判的読解をするうえで見逃すことのできない次の論点を提示して、受講者の皆さまと議論を深めたいと思います。その論点とは、「ステレオタイプ」をめぐるものです。`, `　『世論』第五部から第六部までの範囲の講義を行います。まずは、受講者の方々がSlackに投稿した論点や疑問点を踏まえたうえで、今回の講読範囲の要点をまとめます。さらに、批判的読解をするうえで見逃すことのできない次の論点を提示して、受講者の皆さまと議論を深めたいと思います。その論点とは、「論争と合意」と「指導者と大衆」をめぐるものです。`,`『世論』第七部から第八部までの範囲の講義を行います。まずは、受講者の方々がSlackに投稿した論点や疑問点を踏まえたうえで、今回の講読範囲の要点をまとめます。さらに、批判的読解をするうえで見逃すことのできない次の論点を提示して、受講者の皆さまと議論を深めたいと思います。その論点とは、「メディアの経済性」と「選挙」をめぐるものです。`],
    "message" : `慶應義塾大学の佐藤信吾と申します。専門はジャーナリズム論、集合的記憶論です。これまでは戦争の記憶のジャーナリズムによる構築などを研究してきました。現在は戦後日本政治の疑獄事件や改革などのイメージをジャーナリズムがどのように構築してきたかといった点にも関心の範疇を広げています。\n\n今回は皆さんと『世論』を読んでいきます。本書は1922年、もちろん自分が生まれる前に書かれたものです。ジャーナリストであるリップマンの文章は、もちろんジャーナリズム論の古典であるとともに、社会心理学や政治学の文脈でも読める、本当に多様な文章です。私もあくまで一つの視点からしか読めておりませんので、ぜひ参加者の皆さんのご意見も伺いたいです。\n\nThe Five Booksは学生の方から社会人の方まで、職種や関心も様々な方がご参加されていると伺っております。今から、皆様にお会いできるのが楽しみです。`,
    "peatixURL": "https://the-five-books-public-opinion.peatix.com"
    }
  },
  {
  book : {
  "name" : "人倫の形而上学の基礎づけ",
  "author" : "イマヌエル・カント",
  "publisher" : "中央公論新社",
  "image" : "./img/人倫の形而上学の基礎づけ.jpg",
  },
  lecturer:{
    "name" : "髙木 裕貴",
    "expertise" : "哲学/倫理学",
    "degree" : "京都大学大学院 文学研究科",
    "affiliation" : "京都大学大学院 文学研究科",
    "profile-link" : "https://researchmap.jp/YukiTakaki",
    "lecturerPhoto": './img/lecturer_takaki_yuki.jpg'
  },
  lecture:{
    "lectureName" : "テスト　テスト",
    "lectureSubtitle" :"テスト　テスト",
    "lecturePurpose" : "テスト　テスト",
    "lectureStartDate" : new Date(2021, 1, 7),
    "lectureEndDate" : new Date(2021, 2, 7),
    "liveLectureDate" : [new Date(2021, 1, 7), new Date(2021, 1, 14), new Date(2021, 1, 21), new Date(2021, 1, 28), new Date(2021, 2, 7)],
    "lectureTime" : ["11:00-12:30","11:00-12:30","11:00-12:30","11:00-12:30","11:00-12:30"],
    "minimumAtendee": 5,
    "price": 7500,
    "prerequisite": "特にありません",
    "courseMaterial": "書籍のみ",
    "lectureOverview": `イマヌエル・カント（1724-1804）の主著『人倫の形而上学の基礎づけ』（1785年。以下『基礎づけ』と略記します）を四週間使って読んでいきます。中公クラシックスの翻訳書（野田又夫訳・中央公論新社）をご準備ください。この訳書には『基礎づけ』のほかに『プロレゴーメナ』という重要著作も含まれており、『基礎づけ』を読む際にも『プロレゴーメナ』は重要なヒントになります。\n\nカントはおそらく多くの方が耳にしたことのある哲学者かもしれません。しかし、その著作は（時には哲学者にとってすら）難解であることはよく知られています。ちなみに当時のある大哲学者はカントに対して「あなたの著作は私の体調がいい時にしか読めません。だからあなたの著作は私の体調を測るパラメーターです」という旨の手紙を送っています。カントの著作は当時の大御所哲学者にとっても難解だったのです。だからこそ、本講義は非常によい機会だと思います。今回は、ぜいたくにも四週間を使って『基礎づけ』のみをわかりやすく解説していきます（ただし、四週間使っても他の講義より難しくなることは否めません。細かな論点は省かざるを得ませんが、気になる点はいくらでもSlackにてご質問ください）。\n\n我々が読んでいく『基礎づけ』は哲学の中でも道徳哲学、もしくは倫理学に関する著作です。道徳哲学とは、行為の正不正、または善悪を扱う部門であると言えます。例えば、他人の嘘をつくことはつねに不正でしょうか、それともその嘘によって人が幸せになるのであればその嘘は正しいのでしょうか。今回の講義では、このような道徳哲学に関するカントの見解を『基礎づけ』に基づいて解説していきます。もちろん、四週間の講義ではこれ以上を望むことは難しいですが、可能であればカントの見解をさらに批判的に検討していきたいと思っていきます。\n\nぜひこの機会に、『基礎づけ』を手に取って本講義に参加していただきたいです。誰も「置いてけぼり」にはしません。それでは、講義でお会いしましょう！！`,
    "eachLectureDetail": [`【イントロダクション】\nカントのごく簡単な経歴とともに、哲学史・倫理学史におけるカントの位置づけを紹介します。次に、哲学史・倫理学史における『基礎づけ』の位置づけとその重要性や影響を解説します。カントが「古臭い古典」にとどまらないことを強調しておきたいです。これに加えて、『基礎づけ』を読み解くヒントやキータームを共有したいと思っています。カントは独特の言葉遣いをするので、注意が必要です。次回以降のために十分な準備をしておきましょう。`, `講義範囲：序文と第一章\n古典的著作においてはその序文が最も難解であることが多々あります。『基礎づけ』の序文も例外ではありませんが、それでも比較的短く、理解しやすい方なはずです。ここではカントが『基礎づけ』において設定している目標が開示されています。また、第一章も比較的平易に執筆されており、また具体例も多く含んでいるため、読みやすいと思います。カントの出発点は、道徳的な善さは行為ではなく、行為の結果でもなく、行為の動機にある、という「常識的な」考えです。第一章でカントはこの「常識」を分析することで、暫定的な結論に至ります。`, `講義範囲：第二章前半\n第二章前半は第二章後半のための準備作業とでも呼べる箇所です。そのテーマは端的に言えば「通俗道徳哲学の批判」です。この箇所は「何が正しいのかを検討する前に、何が少なくとも間違っているのかを明確にしておく」という作業として理解できます。この回は比較的余裕がありそうなので、このカントの批判をさらに批判的に検討してみたいと思っています。`, `講義範囲：第二章後半\n『基礎づけ』の見どころは第二章後半にあると言っても過言ではありません。カントは当時の通俗道徳哲学を批判した上で、第二章後半にて己の道徳形而上学を展開していきます。この箇所でカントはやっとこさ自説を積極的に展開していくのです。この箇所こそ、現代に至るまで大きな影響を与えてきた箇所です。ここでカントは、「普遍性」「目的それ自体（人間の尊厳）」「自律」「目的の国」というキータームを展開していきます。`,`講義範囲：第三章\n第三章は『基礎づけ』の中でも最も難解であり、かつ解釈上も多くの論争を引き起こしてきた箇所です。この箇所では「自由」が扱われます。カントの問いは、「我々は自由であるとどうして言えるのか」であり、端的に言えば自由の証明に関わります。これまでにカントが展開してきた道徳は、人間が自由であることを証明できなければ無に帰してしまいます。この点では第三章は非常に重要な個所です。ここを読み解くポイントは、『純粋理性批判』や『プロレゴメナ』に代表される認識論を参照することです（カントの著作の内容はすべて繋がってます）。`],
    "message" : `哲学は面白い！！！！私が胸を張って言いたいのはこれです。他方で、哲学は難しいし、意味がないと思われる方は少なくありません。確かに私もいつもこのように自問自答しています。ここでさしあたりこの「疑惑」に私なりに答えるならば、次のようになります。「簡単な学問なんか要らない。そもそも簡単な学問なんてありえないし、さらに簡単さはやりがいを削いでしまう。また、確かに哲学は利益を生み出すことはないが、そもそも目に見えて役立つような哲学は要らない。哲学はなにより、面白いという意味がある！！」この哲学の面白さを伝えたくてたまらない！！ぜひ講義でお会いしましょう！！`,
    "peatixURL": "https://the-five-books-kant-metaphics-of-morals.peatix.com"
    }
  },
  {
    book : {
      "name" : "歴史とは何か",
      "author" : "E.H.カー",
      "publisher" : "岩波新書",
      "image" : "./img/歴史とは何か.jpg",
      },
    lecturer:{
      "name" : "山野 弘樹",
      "expertise" : "現代フランス哲学",
      "degree" : "東京大学大学院 総合文化研究科",
      "affiliation" : "東京大学大学院 総合文化研究科",
      "profile-link" : "https://researchmap.jp/HirokiYamano/?lang=english",
      "lecturerPhoto": './img/lecturer_yamano_hiroki.jpg'
      },
    lecture:{
      "lectureName" : "テスト　テスト",
      "lectureSubtitle" :"テスト　テスト",
      "lecturePurpose" : "テスト　テスト",
      "lectureStartDate" : new Date(2021, 1, 17),
      "lectureEndDate" : new Date(2021, 2, 10),
      "liveLectureDate" : [new Date(2021, 1, 17), new Date(2021, 1, 24), new Date(2021, 2, 3), new Date(2021, 2, 10)],
      "lectureTime" : ["20:00-21:30","20:00-21:45","20:00-21:45","20:00-21:45"],
      "minimumAtendee": 10,
      "price": 7500,
      "prerequisite": "特にありません",
      "courseMaterial": "書籍のみ",
      "lectureOverview": `多くの読書家にとって、「新書」とは最も馴染みのある書籍のジャンルの一つでしょう。そうした新書の中で、〈伝説的な名著〉と名高いロングセラー書籍があることを、皆さまはご存じでしょうか？ その名も、イギリスの歴史家E. H. カーによる『歴史とは何か』（清水幾太郎訳）という著作です。\n\n「歴史とは何か」――タイトルの通り、それこそが本書の中で問われている根本問題です。ですが……この問題提起、少し不思議だとは思いませんか？ 「歴史」とは、ふつう「過去の事実」を示す言葉ですよね。こんな自明なことを、なぜE. H. カーという歴史家は大まじめに探究するのでしょうか？\n\nその理由は簡単です。\n\n「歴史とは何か？」という問いは、20世紀のみならず、21世紀においても数多くの哲学者・歴史家・教育者たちを悩ませ続けている、人類史上最大の難問の一つだからです。\n\n「歴史」と呼ばれる事象について徹底的に考えていくためには、私たちは数多くの哲学の議論――存在論・認識論・他者論・言語哲学・物語論・フィクション論等――を通過していかねばなりません。これらすべての哲学の基本問題をおさえた上で、ようやく挑戦することのできる哲学の応用問題こそが、「歴史とは何か？」という根本問題なのです。\n\n2021年を迎え、今や私たちは「フェイク・ニュース」や「デマ」、「陰謀論」の類に対抗せねばならない時局となりました。「何が正しい情報なのか？」、「どのような事実が実際そこで起こったのか？」……こうした問題は、コロナ禍にあえぐ私たちの日常生活にさえ浸透しています。こうした意味で、「歴史とは何か？」という問いは、まさに現代的な意義を持つ問いの一つであるとも言えるでしょう。\n\n本講義においては、E. H. カー『歴史とは何か』の精読に軸足を置きつつ、「歴史の哲学」に関する広範な哲学的問題を〈分かりやすい言葉で〉皆さまに解説していきたいと思います。常識的な知性を揺さぶるような難問が続きますが、本講義（全4回）を通して得られるものは極めて大きいと確信しております。\n\n皆さまの積極的なご参加をお待ちしております。`,
      "eachLectureDetail": [`まずは、『歴史とは何か』をより効果的に精読するための準備段階として、「歴史の哲学」という主題に含まれた数多くの哲学の難問に関して解説をしてまいりたいと思います。とりわけ、初回講義においては、「言語論的転回（linguistic turn）」および「歴史の物語論（narrative theory of history）」と呼ばれる議論に焦点を当てて解説を行います。\n\n初回から非常に重厚な哲学の議論が続きますが、「歴史の哲学」の根本問題を押さえることができるだけでなく、〈哲学的思考〉のトレーニングとしても極めて有効であると思われます。`, `第二回から、実際に『歴史とは何か』を読み進めてまいります。まずは第一章「歴史家と事実」および第二章「社会と個人」の講義を行います。あらかじめ述べておきますと、E. H. カーは「過去の事実」＝「歴史」という議論を展開しておりません。「歴史」とは、〈それとは別の何か〉なのです。それでは、果たして「歴史」とは一体何なのでしょうか？　そして、なぜカーはそのような着想を抱くに至ったのでしょうか？\n\n本講義においては、単にE. H. カーの議論の解説に留まるのではなく、カーの議論が立脚している前提を、現代哲学の見地から建設的に批判してまいりたいと思います。そのことで、本講義においてしか体得できない『歴史とは何か』の読書体験を得ることができると思われます。`, `第三回においては、『歴史とは何か』の第三章「歴史と科学と道徳」および第四章「歴史における因果関係」の講義を行います。第三章において問われているのは、「歴史学は科学の一部か？」という問いです。これは「学問論」の観点から考察されるべきトピックです。そして第四章において問われているのは、「因果関係と意志とはいかなる関係にあるのか？」という問いです。これは「存在論」および「行為論」の観点から考察されるべきトピックです。\n\n本講義においては、『歴史とは何か』第三章・第四章をじっくりと精読するために必要な哲学（史）的な枠組みの解説を丁寧に行ってまいりたいと思います。その中で、「科学的思考とは？」、「人間はなぜ何らかの行為を行うのか？」といった根本的な問題にも私たちは取り組むことになるでしょう。`, `第四回においては、『歴史とは何か』の第五章「進歩としての歴史」および第六章「広がる地平線」の講義を行います。極めて大きな普遍性を有している第一章「歴史家と事実」および第二章「社会と個人」とは異なり、第五章・第六章は、今日においては大きな「時代的制約」を受けてしまっている章であるように見えるかもしれません。E. H. カーの時代と私たちの時代の間には、大きな隔たりが存在しています。ですが、そのような議論の中においても、やはり21世紀において受け継がれるべき卓越した洞察がいくつも存在するのは事実です。ですので私たちは、いったい何をカーの議論から継承し、何をカーの議論において批判すべきなのか――そうした点を、丁寧に辿ってまいりたいと思います。それこそが、E. H. カーが望んだ「対話」を成就させる契機にも繋がるでしょう。\n\n私たちは――今からちょうど六十年前に行われたケンブリッジ大学の連続講演の受講者たちと同じように――E. H. カーとの「対話」の場に参席することになります。そしてそれは、紛れもなく、「古典」を介した思想家との〈終わりなき対話〉に他ならないのです。`],
      "message" : `はじめまして。東京大学で哲学の研究を行っている山野弘樹と申します。\n\n普段はポール・リクール(Paul Ricœur, 1913-2005)という現代フランスの哲学者の研究をしているのですが、「より多くの方々に哲学の〈意義〉と〈魅力〉を知ってもらいたい」という理念のもと、一般の方向けの哲学系イベント（オンライン）も数多く主催しております。（すでに累計1000人以上の方々にご参加していただいております。）\n\n私は大学時代に『読書について』を読んだことをきっかけに、哲学の世界へと足を踏み入れました。それ以降、数多くの哲学書を読破することを通して、「批判的読解力」や「論理的思考力」を獲得してまいりました。（その成果は、私の研究論文の業績数に直接反映されております。）\n\n私は「The Five Books」の講義において、これまで東京大学で体得してきた〈読書の方法〉および〈哲学的な思考の方法〉を、分かりやすい言葉で受講者の皆さまにご提示したいと思います。\n\n「これまで一冊も哲学書を読んだ経験がありません！」という方でも大丈夫です。\n\n日々の生活を変えるための、そして、これからの人生を変えるための〈メタ思考能力〉を向上させたいすべての方（中高生・社会人・シニア世代の方）のご参加を、心よりお待ちしております。`,
      "peatixURL": "https://the-five-books-on-history.peatix.com"
    }
  },
  {
      book : {
        "name" : "思考と動き",
        "author" : "H.ベルクソン",
        "publisher" : "平凡社",
        "image" : "./img/思考と動き.jpg",
        },
      lecturer:{
        "name" : "濱田 明日郎",
        "expertise" : "哲学",
        "degree" : "京都大学大学院 人間・環境学研究科",
        "affiliation" : "京都大学大学院 人間・環境学研究科",
        "profile-link" : "https://researchmap.jp/HAMADA_TOMOROH",
        "lecturerPhoto": './img/lecturer_hamada_tomoro.jpg'
        },
      lecture:{
        "lectureName" : "テスト　テスト",
        "lectureSubtitle" :"テスト　テスト",
        "lecturePurpose" : "テスト　テスト",
        "lectureStartDate" : new Date(2021, 2, 27),
        "lectureEndDate" : new Date(2021, 3, 24),
        "liveLectureDate" : [new Date(2021, 2, 27), new Date(2021, 3, 3), new Date(2021, 3, 10), new Date(2021, 3, 17), new Date(2021, 3, 24)],
        "lectureTime" : ["11:00-12:30","11:00-12:30","11:00-12:30","11:00-12:30","11:00-12:30"],
        "minimumAtendee": 5,
        "price": 7500,
        "prerequisite": "特にありません",
        "courseMaterial": "書籍のみ",
        "lectureOverview": `何かの仕事を少しずつ進めるとき、自分なりに文章を書きはじめるとき、あるいはなんてことない生活の一瞬に、――「こうして自分のやっていることは、結局は誰かによってやり尽くされていて、別に今さら自分がやる意味もないのかな」と、ふと思うことはありませんか。\n\nある哲学者がこんなことを言います。「私は以前に論じた問題、宇宙で続いていると思われる予見不可能な新しさの連続的な創造についてもういちど述べたい。自分のことを言えば、私はそれを絶えず経験していると思っている」……。（『思考と動き』、平凡社ライブラリー、141頁）。\n\n過去の反復ではなく、新しい何かが常に〈創造〉されている。―これが彼の哲学の「学説」です。生活態度や気持ちの問題ではありません。彼は、いまここで起こっている〈創造〉を厳密な事実として語ろうとしています。そのために彼は困難な理論的努力や独特の工夫を積み重ねていきます。\n\n哲学者の名はアンリ・ベルクソン（1859-1941）。生前から著名な哲学者でしたが、没後80年、今でも多くの研究者たちによって集中的に再読され、ベルクソンならではのアイデアの発掘が進み、その輝きはむしろ増しているように見えます。\n\nこの講義では、先にも引用した、彼の小論・講演集である『思考と動き』 （1934）という著作を読みます。先に述べたように講演の名手として知られるベルクソンですが、この本に所収の文章たちもまた独特の美しさと凄みを備えていると思います。『思考と動き』には、哲学の〈方法〉、〈創造〉を思考する際に彼がどうしても必要とした方法に関する論述が集められています。\n\n今回の『思考と動き』講義は、哲学および哲学史一般に興味を持つ方だけではなく、以下のような方にもおすすめします（詳しい内容は「各講義の内容」をご覧ください）。\n\n—創造性の話題に関心を持つ方。\n—哲学的な思考法、哲学的な仕事の方法論に関心を持つ方。\n—これまでの巨大な「知の蓄積」との付きあいかたを再考したい方。\n\n哲学書に触れたことがない方でも、ベルクソンの思考の面白さとの出会いに貢献できるような講義を行う所存です。みなさまの積極的なご参加をお待ちしております。\n*なお、『思考と動き』は、平凡社訳に加え、レグルス文庫『思考と運動』、白水社『思考と動くもの』、岩波文庫『思想と動くもの』も発刊されています。参加者はいずれの訳書でご参加いただいても構いません。`,
        "eachLectureDetail": [`『思考と動き』は比較的読みやすい文章で書かれていますが、内容が易しいわけではありません。精読に必要な前段階として、用いられている哲学的概念についての解説を行います。哲学史的な重みを備えた諸概念―「可能」・「現実」という対概念や、「存在」・「無」・「無秩序」といった概念―の持つ含意を展開しておきましょう。\n\n……とはいえ、難しく考える必要もまたありません。これらが長いこと論じられてきた概念だということは、むしろわれわれに身近すぎるほど身近な概念だということです。第一回はわれわれの日常的な世界の把握の仕方を改めて見直す、という回になるはずです。その意味で、この講義は〈哲学的思考〉のスタート地点になります。`, ` 第二回講義では、『思考と動き』第3章「可能と現実」の読解・議論を行います。\nこの際には、事前にSlackで共有された疑問・質問・提案・相談・意見・アイデア・雑談・事例などと相互作用しつつ、われわれの読み筋を構築していくことができます。\n\n「可能と現実」のテーマはずばり「創造行為」、クリエイティヴな活動です。「『ハムレット』といった天才的作品が創造される時、どのようなことが起こっていたのか？」「われわれはその「新しさ」をどのように感受できるのか？」といった問いに対して、「可能」と「現実」という対概念をフル活用して挑むことになります。その道中でわれわれは、日常的な「行為」や「意志」にまつわるふつうの思考習慣に変化を迫るような、スリリングな哲学の経験を味わうことができるはずです。`, `第三回講義では、第4章「哲学的直観」の読解・議論に入ります。\n哲学という営みには、抽象的概念をピースとしたパズルを大昔からやっている、というイメージがついて回ります。もしそうであれば、みな似たようなピースでパズルを繰り返しているわけだから、主義A＋主義B=主義C といった足し算・引き算で得られるものが哲学の全体像だということになる。しかし、そんなものは「盛り合わせサラダ」（！）でしかない、とベルクソンは述べ、むしろ単純な〈直観〉をこそ重んじる哲学の手法について語ります。\n\n「哲学的直観」は、この特殊な方法によるベルクソンなりの〈哲学史〉の読み方も提示しています。そこで、今回の講義では、大量の情報を「まとめ」て効率よく摂取することがほとんど日常となったわれわれにとっても、極めてアクチュアルな問題が取り扱われることにもなります。つまりこうです―「人類にとってますます重くなる「知の蓄積」といかに向き合うのか」。`, `第四回講義では、第5章「変化の知覚」の読解・議論に入ります。\nタイトル通り、何らかの「変化」をわれわれが「知覚」することを取り扱います。パッとしないテーマとも見えますが、「変化の知覚」に立ち返ること、それこそがベルクソンにとっての〈哲学〉に他なりません。彼にとって哲学とは結局どういう営みなのでしょうか？\n\n講義では、カントの『純粋理性批判』に対するベルクソンの態度など、避けては通れない文脈について確認します。その上で、「芸術」「記憶」「生命」「時間」について超スピードで論じていく、実にベルクソンらしい議論を追跡します。`,`第五回講義では、第6章「形而上学入門」の読解・議論に入ります。\n講義の最終回にふさわしく、他のものと比べればヴォリュームもあり、凝縮された文体で専門性の高い議論が続きます。しかし第1回～第4回の蓄積があれば、かなり内容に入っていきやすいはずです。\n\nベルクソンは既存の概念・既存の学説に彼なりの意味を充填しなおし、彼の学説を代表するアイデアである「持続」の実在を論じていきます。当時のベルクソンが惜しむことなく理論的成果を盛り込んだ、内容豊富な論文です。「科学」と「哲学」の関係といった、現代的な話題の広がりも持ち合わせています。時間の許す限り、彼のアイデアを丁寧にすくい上げていきましょう。`],
        "message" : `はじめまして。京都大学の濱田明日郎と申します。\nふだんは、アンリ・ベルクソンというフランスの哲学者の著作の解釈を通じて、哲学研究に携わっております。とりわけ、上でも挙げた〈創造〉の話題に関心があります。\n\nベルクソンの思考のおもしろいところは、ある問題について論争中の両陣営がともに立っている前提そのものを突き崩し、その問題がもはや問題とならないような、別の地平を開いてしまうことです。その結果として得られる、世界の見方が一新されるような経験には、何物にも代えがたい、長続きする喜びがあります。もしそのような喜びが少しでも共有できたら、本当に素晴らしいことです。\n\n皆様のご参加を心よりお待ちしております。`,
        "peatixURL": "https://the-five-books-bergson-the-creative-mind.peatix.com"
      }
    }
]

export default LecturesInfo
