import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import Navbar from '../General/Navbar/navbar'
import "../css/videoPage.css"
import ReactPlayer from 'react-player/youtube'
import { useLocation, useParams } from 'react-router-dom'

export default function VideoPage() {

  const location = useLocation();
  const videoLink = location.state;
  const {courseID} = useParams();

  const [course,setCourse] = useState([]);

  const getCourseById = async () => {
    const res = await axios.get(
      `http://localhost:3000/course/?_id=${courseID}`)
    .catch((err) => console.log(err));
    const data = await res.data;
    // console.log(data);
    return data;
    
    
  };

  useEffect(() =>{
    getCourseById().then((data) => setCourse(data))

  },[])

  // we need to send back the notes to the arrays of notes and make handle submitt+on click(downloadTXT)
 const downloadTxt = () => {
  const element = document.createElement("a");
  const file = new Blob([document.getElementById('input').value],
  {
    type:"text/plain;charset=utf-8"
  }
  );

  element.href=URL.createObjectURL(file);
  element.download="YOUR NOTES.txt"
  document.body.appendChild(element);
  element.click();
 };
  return (
    <div className="video-page">
      <Navbar/>

      <div className="course_description">
        <ul className="label_list">
          <li>
            <label><span>Course Name:</span> {course.title}</label>
          </li>

          <li>
            <label><span id="sub_videoDescriptions">Course Description:</span><br/><p id='description'> {course.summary} </p></label>
          </li>
        </ul>
        
        
      </div>

      <div 
      width="1213"
      height="556"  
      className = "video_component">
      <ReactPlayer url={videoLink}/>
      </div> 
      {/* <div className="video_description">
        <ul className="label_list">
          <li>
          <label><span>Lecture</span></label>      
          </li>
          <li>
            <label><span id="sub_videoDescriptions">Video Description:</span><br/><p id='description'></p></label>
          </li>
          <li>
            <label><span id="sub_videoDescriptions">Instructor Info:</span><br/><p id="description">  </p></label>
          </li> 
        </ul>  
      </div> */}

      <div className="notes_container">  
        <div className="notes_text_box">
          <label>View Notes</label><br/>

          
          <div>
          <input id="input"/>
            {/* <input type="text" placeholder="Add a note" className="note_textBox"></input> */}
          <button primary="true" onClick={downloadTxt} className="button2" >download</button>
          </div>
          
        </div>   
      </div>
    </div>
  )
}
