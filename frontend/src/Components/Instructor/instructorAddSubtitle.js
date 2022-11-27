import React from 'react'
import "../css/instructorAddSubtitle.css"
import img1 from "../images/createCourse.png"

export default function InstructorAddSubtitle() {
  return (
    <div>
        <div className="subtitle_frame">
            <div className="addsubtitle">
                <div className="subtitle_icon1">
                    <img src={img1} alt="icon"/>
                </div>

                <div className="subtitle_title">
                    <h1>Create Subtitle </h1>
                </div>
                <div className="component_container">
                    <div className="subtitle_coursetitle">
                        <input type="textbox" placeholder="Course Title"/>
                    </div>
                    <div className="subtitle_sectiontitle">
                        <input type="textbox" placeholder="Course Subtitle"/>
                    </div>
                    <div className="subtitle_URL">
                        <input type="textbox" placeholder="Subtitle Preview Url"/>
                    </div>
                    <div className="subtitle_ti">
                        <input type="textbox" placeholder="Subtitle Title"/>
                    </div>

                </div>
                <div className="subtitle_button">
                    <button className="Navy_Button" type="submit"> Create Subtitle </button>
                </div>

            </div>

        </div>
    </div>
  )
}
