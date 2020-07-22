import React from "react"
import service from './img/service.jpeg'
const ServiceFlow = () => {

  const content =
  <div className="title d-flex flex-column align-items-center">
    <h2>サービスの流れ</h2>
    <img src={service} alt="サービスの流れ" className="img-fluid"/>
  </div>
  
  return(
    <div>
      {content}
    </div>
  )
}


export default ServiceFlow
