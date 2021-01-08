import React from "react"

const Footer = () => {
  const content =
  <div className="d-flex flex-column align-items-center justify-content-center">
    <div className="mx-2">Copyright &copy; 2021 &nbsp;The Five Books.com</div>
    <div className="d-flex flex-wrap align-items-center justify-content-center">
      <span>Icons made by</span>
      <span>&nbsp;</span>
      <a href="https://www.flaticon.com/authors/ddara" title="dDara">dDara</a>
        <span>&nbsp;and&nbsp;</span>
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
        <span>&nbsp;</span>
      from <span> &nbsp;</span>
<a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>

    </div>
  </div>

  return(
    <div className="footer">
      {content}
    </div>
  )
}
export default Footer
