import React from 'react'
import img1 from "../images/createCourse.png"

export default function EditEmail() {
  return (
    <div>
      <div className="rateCourse_frame">
        <div className="rateCourse_container">
          <div className="rateCourse_header">
            <div className="rateCourse-icon1">
              <img src={img1} alt="icon"/>
            </div>
            <div className="rateCourse-title">
              <h1>Edit Email</h1>
            </div>
          </div>
          <div className="rateCourse_inputs">
            <div className="rateCourse_instructorName">
              <input type = "textbox" placeholder="Old Email"/>
            </div><hr/>
            {/* <div className="rateCourse_courseTitle">
              <input type = "textbox" placeholder="Course Title"/>
            </div> */}
            {/* <div className="rateCourse_line1">
              <hr></hr>
            </div> */}
            <div className="rateCourse_rating">
              <input type = "textbox" placeholder="New Email"/>
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
