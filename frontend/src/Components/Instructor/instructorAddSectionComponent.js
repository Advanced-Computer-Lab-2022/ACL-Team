import React from 'react'
import img1 from "../images/createCourse.png"
import "../css/instructorAddSectionComponent.css"
export default function InstructorAddSectionComponent() {
  return (
    <div>
        <div className="instructor-addSection">
            <div className="section-icon1">
                <img src={img1} alt="icon"/>
            </div>
            <div className="section-title">
            <h1>Create Course Section</h1>
            </div>
            <div className="section_name">
            <input type="textbox" placeholder='Course Instructor Name'/>
            </div>
            <div className="section_LastName">
            <input type="textbox" placeholder='Course Title'/>
            </div>
            <div className="section_line1">
            <hr></hr>
            </div>
            <div className="section_price">
            <input type="textbox" placeholder='Section Title'/>
            </div>
            <div className="section_line2">
            <hr></hr>
            </div>
            <div className="section-subtitle">
            <h1>Create Section Subtitle</h1>
            </div>
            <div className="section_subtitleName">
            <input type="textbox" placeholder='Subtitle Name'/>
            </div>
            <div className="section_subtitledescription">
            <input type="textbox" placeholder='Subtitle Video Descriotion'/>
            </div>
            <div className="section_VideoURL">
            <input type="textbox" placeholder='Subtitle Preview Video Youtube Link'/>
            </div>
            <div className="section_Button">
            <button className="Navy_Button"> Create Section </button>

            </div>
            

        </div>

    </div>
  )
}
