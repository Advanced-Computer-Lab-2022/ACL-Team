import React ,{useState} from 'react'
import Navbar from '../General/Navbar/navbar'
import "../css/videoPage.css"
import ReactPlayer from 'react-player/youtube'
import { useLocation } from 'react-router-dom'

export default function VideoPage() {

  const location = useLocation();
  const videoLink = location.state;

  const x = 5;
  const number_of_notes = 15;
  const c = "El course dah msh a7san 7aga 3matan"
  const p = "In this video, we will see how we loop through arrays and fetch data from it using indexes";
  const i = "El ragel dah 3shara 3la 3shara!"

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
            <label><span>Course Name:</span></label>
          </li>

          <li>
            <label><span id="sub_videoDescriptions">Course Description:</span><br/><p id='description'>{c}</p></label>
          </li>
        </ul>
        
        
      </div>

      <div 
      width="1213"
      height="556"  
      className = "video_component">
      <ReactPlayer url={videoLink}/>
      </div> 
      <div className="video_description">
        <ul className="label_list">
          <li>
          <label><span>Lecture {x}</span></label>      
          </li>
          <li>
            <label><span id="sub_videoDescriptions">Video Description:</span><br/><p id='description'>{p}</p></label>
          </li>
          <li>
            <label><span id="sub_videoDescriptions">Instructor Info:</span><br/><p id="description"> {i} </p></label>
          </li> 
        </ul>  
      </div>

      <div className="notes_container">  
        <div className="notes_text_box">
          <label>View Notes( {number_of_notes} )</label><br/>

          
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
