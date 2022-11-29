import React from 'react'
import "../css/instructorCourseCard.css"
import img1 from "../images/Course Image.png"
import img2 from "../images/Level Icon.png"
import img3 from "../images/Clock Icon.png"
import img4 from "../images/Lesson Icon.png"
import img5 from "../images/students.png"
export default function InstructorCourseCard() {
  return (
    <div>
        <div className="InstructorCourse_frame">
            <div className="InstructorCourse_container">
                <div className="InstructorCourse_image">
                    <img src = {img1} alt = "image1"></img>
                </div>
                <div className="InstructorCourse_title_container">
                    <div className="InstructorCourse_category">
                        <h1>>>  Networks</h1>
                    </div>
                    <div className="InstructorCourse_title">
                        <h1>CCNP All-in-1 Video Boot Camp With Chris Bryant</h1>
                    </div>
                    <div className="InstructorCourse_description">
                        <p>ou're in the right place at the right time to earn your CCNP with my clear, comprehensive CCNP All-In-One Video Boot Camp!</p>
                    </div>
                </div>
                <div className="InstructorCourse_buttons">
                    <div className="InstructorCourse_button1">
                        <button className="Navy_Button"><a href="/instructor/addSection">Create Section</a>  </button>
                    </div>
                    <div className="InstructorCourse_button2">
                        <button className="Navy_Button"><a href="/instructor/addquiz">Create Quiz</a>  </button>
                    </div>
                    <div className="InstructorCourse_button3">
                        <button className="Navy_Button"><a href="/instructor/addDiscount">Offer Discount</a>  </button>
                    </div>
                </div>
                <div className="InstructorCourse_footer">
                    <div className="InstructorCourse_level">
                        <img src = {img2} alt="level"/>
                        <label>Medium level</label>
                    </div>
                    <div className="InstructorCourse_hours">
                        <img src = {img3} alt="level"/>
                        <label>42 hours</label>
                    </div>
                    <div className="InstructorCourse_lessons">
                        <img src = {img4} alt="level"/>
                        <label>31 lessons</label>
                    </div>
                    <div className="InstructorCourse_students">
                        <img src = {img5} alt="level"/>
                        <label>25,599 Students</label>
                    </div>
                    <div className="InstructorCourse_price">
                        <img src = {img4} alt="level"/>
                        <label>2000 EGP</label>
                    </div>
                </div>
                <div className="InstructorCourse_body">
                    <div className="InstructorCourse_body_sections">
                        <label>3</label>
                        <label>Sections</label>
                    </div>
                    <div className="InstructorCourse_body_tutorials">
                        <label>12</label>
                        <label>Tutorials</label>
                    </div>
                    <div className="InstructorCourse_body_videos">
                        <label>6</label>
                        <label>Videos</label>
                    </div>
                    <div className="InstructorCourse_body_quizez">
                        <label>3</label>
                        <label>Quizez</label>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}
