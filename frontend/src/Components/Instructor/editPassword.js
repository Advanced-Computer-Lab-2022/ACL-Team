import React from 'react'
import img1 from "../images/createCourse.png"

export default function EditPassword() {
  return (
    <div>
      <div className="rateCourse_frame">
        <div className="rateCourse_container">
          <div className="rateCourse_header">
            <div className="rateCourse-icon1">
              <img src={img1} alt="icon"/>
            </div>
            <div className="rateCourse-title">
              <h1>Email</h1>
            </div>
          </div>
          <div className="rateCourse_inputs">
            <div className="rateCourse_instructorName">
              <input type = "textbox" placeholder="Enter your Email"/>
            </div><hr/>
            <div className="rateCourse_courseTitle">
              <input type = "textbox" placeholder="Old Password"/>
            </div>
            <div className="rateCourse_line1">
              <hr></hr>
            </div>
            <div className="rateCourse_rating">
              <input type = "textbox" placeholder="New Password"/>
            </div>

          </div>
          <div className="rateCourse_button">
            <button className="Navy_Button" type="submit"> Submit </button>
          </div>

        </div>
      </div>

    </div>
  )
}
