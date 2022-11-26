import React from 'react'
import NavyButton from '../General/Buttons/navyButton'
import "../css/instructorCard.css"
import img1 from "../images/Rectangle 123.png"
import img2 from "../images/NumofCourses.png"
import img3 from "../images/NumofStudents.png"
import img4 from "../images/Star.png"

export default function InstructorCard() {
  return (
    <div>
        <div className="instructor_card">
            
            <div className="instructor_image">
                <img src= {img1} alt="instructor_image"/>
            </div>

            <div className="instructor_info">
                <label><span id="inst_name">Pandy Deem</span></label><br/>
                <label id="field">Web Developer</label>
            </div>

            <div className="instructor_button">
                <NavyButton button_text="Join now"/>
            </div>

            <div className="instructor_rating">
                <label><img src={img2} alt="?" />14</label>
                <label><img src={img3} alt="?" />20,000</label>
                <label><img src={img4} alt="?" />4.3</label>
            </div>

        </div>
    </div>
  )
}
