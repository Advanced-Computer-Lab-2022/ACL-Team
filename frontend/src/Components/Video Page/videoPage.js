import React from 'react'
import Navbar from '../General/Navbar/navbar'
import "../css/videoPage.css"
import ReactPlayer from 'react-player/youtube'

export default function VideoPage() {
  const x = 5;
  const number_of_notes = 15;
  const c = "El course dah msh a7san 7aga 3matan"
  const p = "In this video, we will see how we loop through arrays and fetch data from it using indexes";
  const i = "El ragel dah 3shara 3la 3shara!"
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
      <ReactPlayer 

      url={'https://www.youtube.com/watch?v=9b0BOLD7-iw'}/>
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
          <input type="text" placeholder="Add a note" className="note_textBox"></input>
          <button>Submit</button>
        </div>   
      </div>
    </div>
  )
}
