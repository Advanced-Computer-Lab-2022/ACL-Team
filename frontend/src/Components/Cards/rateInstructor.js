
import "../css/rateInstructor.css"
import img1 from "../images/createCourse.png"
import React , {useState} from 'react'
import axios from 'axios'
import Rating from "./rating"

export default function RateInstructor() {
  

  return (
    <div>
      <div className="rateInstructor_frame">
      
        <div className="rateInstructor_container">
          <div className="rateInstructor_header">
            <div className="rateInstructor-icon1">
              <img src={img1} alt="icon"/>
            </div>
            <div className="rateInstructor-title">
              <h1>Rate Instructor </h1>
            </div>
          </div>
          <div className="rateInstructor_inputs">
            
            <div className="rateInstructor_instructorName">
              <input type = "textbox" placeholder=" Instructor Name"/>
            </div>
            
            <div className="rateInstructor_line1">
              <hr></hr>
            </div>
            <div className="rateInstructor_rating">
              <input type = "textbox" placeholder="Rating"/>
            </div>

          </div>
          <div className="rateInstructor_button">
            <button className="Navy_Button" type="submit"> Rate Instructor </button>
          </div>
          
          

        </div>
        
     
      </div>
      

    </div>
  )
}
