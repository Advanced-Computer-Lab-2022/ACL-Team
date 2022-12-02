import React from 'react'
import NavyButton from '../General/Buttons/navyButton'
import "../css/instructorCardBig.css"
import img1 from "../images/Rectangle 123.png"
import img2 from "../images/NumofCourses.png"
import img3 from "../images/NumofStudents.png"
import img4 from "../images/Star.png"

export default function InstructorCardBig() {
  return (
    <div>
        <div className="instructor_card_big">
            
            <div className="instructor_image_big">
                <img src= {img1} alt="instructor_image"/>
            </div>

            <div className="instructor_info_big">
                <label><span id="inst_name">Mazen Hejazy</span></label><br/>
                <label id="field">Web Developer</label>
            </div>

            <div className="instructor_button_big">
                <NavyButton button_text="Join Now"/>
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
