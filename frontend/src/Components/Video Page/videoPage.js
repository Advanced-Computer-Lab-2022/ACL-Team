import React from 'react'
import Navbar from '../General/Navbar/navbar'
import "./videoPage.css"

export default function VideoPage() {
  return (
    <div className="container">
      <Navbar/>
      <div className = "video_component">
        <iframe src="https://youtu.be/gx4MC8zgX38" width="1213" height="556"></iframe>
      </div>

      <div className="video_description">
        <ul className="label_list">
          <li>
            <label>Lecture Number:</label>
          </li>
          <li>
            <label>Course Description:</label>
          </li>
          <li>
            <label>Instructor Info:</label>
          </li> 
        </ul>  
      </div>

      <div className="notes_container">  
        <div className="notes_text_box">
          <label>View Notes()</label><br/>
          <input type="text" placeholder="Add a note" className="note_textBox"></input>
          <button>Submit</button>
        </div>           
      </div>

    </div>
  )
}
