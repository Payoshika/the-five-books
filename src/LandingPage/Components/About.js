import React from "react"

const About = () => {
  const content =
  <div>
    <h3>事業者名: <span>The Five Books</span></h3>
    <h3>運営者: <span>大石　航平</span></h3>
    <h3>略歴: <span>略歴記載</span></h3>
  </div>
  return(
    <div>
      <h2>The Five Booksについて</h2>
      {content}
    </div>
  )
}


export default About
