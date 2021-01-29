import React, {useState, useCallback} from "react"
import {LectureProfile, MyCourse} from "./index"
import Database from "./Database"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from "axios"
import ReactCrop from "react-image-crop"
import {useDropzone} from 'react-dropzone';
import 'react-image-crop/dist/ReactCrop.css';

const LectureMyPage = (props) =>{
  const {name, expertise, affiliation, profileLink, lecturerPhoto, lectures} = Database
  const[imgSrc, setImgSrc] = useState("")
  const [crop, setCrop] = useState(
    { aspect: 1 / 1 });
  const[imagePreviewCanvasRef, setImagePreviewCanvasRef] = useState(React.createRef())
  const[cropedImage, setCropedImage] = useState("")

  const getFormatDate = (value) => {
   return `${value.getFullYear()}${('0' + (value.getMonth() + 1)).slice(-2)}${('0' + value.getDate()).slice(-2)}`;
   }
  const accept = "image/*"
  const acceptFileArray = ["image/png", "image/jpg", "jmage/jpeg"]
  const maxSize = 2000000
  const multiple = false

 const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
   if (rejectedFiles[0] && rejectedFiles[0].file.size > maxSize) {
     alert("ファイルサイズが2MBを超えています")
     return
   }
   else{
     if(acceptFileArray.includes(acceptedFiles[0].type)){
       const curretFile = acceptedFiles[0]
       const reader = new FileReader()
       reader.readAsDataURL(curretFile)
       reader.onloadend = () => {
         setImgSrc(reader.result)
       }
     }
     else{
       alert("画像はpng,jpeg,jpgのいずれかのフォーマットのみを受け付けております。")
     }
   }
 }, [])

  const {getRootProps, getInputProps} = useDropzone({onDrop, accept, maxSize, multiple });


    const downloadBase64File =(base64Data, filename) => {
    var element = document.createElement('a');
    element.setAttribute('href', base64Data);
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  const base64StringtoFile = (base64String, filename) => {
      var arr = base64String.split(','), mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while(n--){
          u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, {type:mime});
  }

  const image64toCanvasRef = (canvasRef, image64, pixelCrop) => {
    const canvas = canvasRef
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx = canvas.getContext('2d');
    const image = new Image()
    image.src = image64
    image.onload = function() {
        ctx.drawImage(
          image,
          pixelCrop.x,
          pixelCrop.y,
          pixelCrop.width,
          pixelCrop.height,
          0,
          0,
          pixelCrop.width,
          pixelCrop.height
        )
      }
  }

  const handleImageLoaded = (image) => {
    console.log(image);
  }

  const handleOnCropComplete = (crop, pixelCrop) => {
    console.log(crop, pixelCrop);
    // pixelcropを再度イメージとして表示するには？
  }


  const imageDrop =
  <div>
    <div {...getRootProps({className: 'dropzone'})}>
       <input {...getInputProps()} />
       <p>講師写真をこちらにアップロード(png/jpegファイルのみ、最大2MBまで)</p>
     </div>
     <div>
       {imgSrc !== null? <img width="200" height="200"src={imgSrc} rounded alt="test"/> : ""}
     </div>
     <div className="w-100">
       <ReactCrop
         src={imgSrc}
         crop={crop}
         onChange={newCrop => setCrop(newCrop)}
         onImageLoaded = {(newCrop)=>handleImageLoaded(newCrop)}
         onComplete={(crop, newCrop)=>handleOnCropComplete(crop, newCrop)}
         />
     </div>
     <div>
       <p>プレビュー</p>
       <img src={cropedImage} alt=""/>
     </div>
  </div>

  return(
    <Container fluid>
      <Row>
        <Col sm={12}>
          <h4 className="text-center">Profile</h4>
          <LectureProfile
            name = {name}
            affiliation = {affiliation}
            expertise = {expertise}
            profileLink = {profileLink}
            lecturerPhoto = {lecturerPhoto}
          />
        </Col>
        <Col sm={12}>
          {imageDrop}
        </Col>
        <Col sm={12}>
          <MyCourse
            lectures = {lectures}
            getFormatDate = {getFormatDate}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default LectureMyPage
