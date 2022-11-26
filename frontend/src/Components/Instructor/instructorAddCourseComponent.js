import React from 'react'
import "../css/instructorAddCourseComponent.css"
import img1 from "../images/createCourse.png"

export default function InstructorAddCourseComponent() {
  return (
    <div>
      <div className="instructor-addCourse">
        <div className="instructor-icon1">
          <img src={img1} alt="icon"/>
        </div>
        <div className="instructor-title">
          <h1>Create Course </h1>
        </div>
        <div className="instructor_name">
          <input type="textbox" placeholder='Course Instructor Name'/>
        </div>
        <div className="instructor_LastName">
          <input type="textbox" placeholder='Course Title'/>
        </div>
        <div className="line1">
          <hr></hr>
        </div>
        <div className="instructor_price">
          <input type="textbox" placeholder='Price'/>
        </div>
        <div className="instructor_URL">
          <input type="textbox" placeholder='Course Preview Video Url'/>
        </div>
        <div className="line2">
          <hr></hr>
        </div>
        <div className="instructor_Category">
          
        </div>
        <div className="line3">
          <hr></hr>
        </div>
        <div className="instructor_Summary">
          <input type="textbox" placeholder='Course Summary'/>
        </div>
        <div className="instructor_Button">
          <button className="Navy_Button"> Create Course </button>

        </div>
        

      </div>
    </div>
  )
}
