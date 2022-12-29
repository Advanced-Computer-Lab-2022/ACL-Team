import React from 'react'
import "../css/instructorCourseCard.css"
import img1 from "../images/Course Image.png"
import img2 from "../images/Level Icon.png"
import img3 from "../images/Clock Icon.png"
import img4 from "../images/Lesson Icon.png"
import img5 from "../images/students.png"
import img6 from "../images/star.svg"

import { Link } from 'react-router-dom'
export default function InstructorCourseCard({course , instructor}) {
  return (
    <div>
        <div className="InstructorCourse_frame">
            <div className="InstructorCourse_container">
                <div className="InstructorCourse_image">
                    <img src = {img1} alt = "image1"></img>
                </div>
                <div className="InstructorCourse_title_container">
                    <div className="InstructorCourse_category">
                        <h1>>> {course.category} </h1>
                    </div>
                    <div className="InstructorCourse_title">
                        <h1> {course.title} With {instructor.name}</h1>
                    </div>
                    <div className="InstructorCourse_description">
                        <p>
                            {course.summary}
                        </p>
                    </div>
                </div>
                <div className="InstructorCourse_buttons">
                    <div className="InstructorCourse_button1">
                        <button className="Navy_Button">
                            <Link to={`/instructor/addSection/${course._id}`}>
                                Create Section
                            </Link>  
                        </button>
                    </div>
                    <div className="InstructorCourse_button2">
                        <button className="Navy_Button">
                            <Link to={`/instructor/addquiz/${course._id}`}>
                                Create Quiz
                            </Link>  
                        </button>
                    </div>
                    <div className="InstructorCourse_button3">
                        <button className="Navy_Button">
                            <Link to={`/instructor/addDiscount/${course._id}&${instructor._id}`}>
                                Offer Discount
                            </Link>  
                        </button>
                    </div>
                    <div className="InstructorCourse_button4">
                        <button className="Navy_Button">
                            <Link to={`/instructor/addCoursePreview/${course._id}`}>
                                Add Course Preview Video
                            </Link>  
                        </button>
                    </div>
                </div>
                <div className="InstructorCourse_footer">
                    <div className="InstructorCourse_level">
                        <img src = {img2} alt="level"/>
                        <label> {course.level} level</label>
                    </div>
                    <div className="InstructorCourse_hours">
                        <img src = {img3} alt="level"/>
                        <label> {course.totalHours} hours</label>
                    </div>
                    <div className="InstructorCourse_lessons">
                        <img src = {img4} alt="level"/>
                        <label>31 lessons</label>
                    </div>
                    <div className="InstructorCourse_students">
                        <img src = {img5} alt="level"/>
                        <label> {course.subscriberNumber} Students</label>
                    </div>
                    <div className="InstructorCourse_price">
                        <img src = {img4} alt="level"/>
                        <label> {course.price} EGP</label>
                    </div>
                    <div className="InstructorCourse_rating">
                        <img src = {img6} alt="level"/>
                        <label> Average {course.averageRating}</label>
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
