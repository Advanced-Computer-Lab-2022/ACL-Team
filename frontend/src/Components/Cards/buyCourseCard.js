import React from 'react'
import img1 from "../images/Hotel.png"
import img2 from "../images/Swimming.png"
import img3 from "../images/Wi-Fi.png"
import img4 from "../images/Restaurant.png"
import img5 from "../images/Group.png"
import img6 from "../images/Lesson.png"
import img7 from "../images/Level.png"
import img8 from "../images/Clock.png"
import img9 from "../images/students.png"

import "../css/buyCourseCard.css"
export default function BuyCourseCard({courseID}) {
  return (
    <div>
        <div className="card_frame">
            <div className="image">
                <img src = {img1} alt = "course photo"/>
            </div>
            <div className="title">
                <label>{courseID._title}</label>

            </div>
            <div className="category">
                <label></label>
                <label1>{courseID.category}</label1>
            </div>
            <div className="icons">
                <img src={img2} alt="icon1"/>
                <img src={img3} alt="icon2"/>
                <img src={img4} alt="icon3"/>
            </div>
            <div className="subtitle">
                <p>CCNP All-in-1 Video Boot Camp With Chris Bryant</p>
            </div>
            <div className="ratings">
                <div className="star1">
                    <img src= {img5} alt = "rating"/> 
                </div>
                <div className="star2">
                    <img src= {img5} alt = "rating"/> 
                 </div>
                <div className="star3">
                    <img src= {img5} alt = "rating"/> 
                </div>
                <div className="star4">
                    <img src= {img5} alt = "rating"/> 
                </div>
                <div className="star5">
                    <img src= {img5} alt = "rating"/> 
                </div>
            </div>
            <div className="ratings_label">
                <label>Top Rated</label>
            </div>
            <div className="price_icon">
                <img src={img6} alt="price"/>
            </div>
            <div className="price_label">
                <label>{courseID.price}</label>
            </div>
            <div className="currency_label">
                <label>EGP</label>
            </div>
            <div className="level_icon">
                <img src={img7} alt="level Icon"/>
            </div>
            <div className="level_label">
                <label>{courseID.level} level</label>
            </div>
            <div className="hours_icon">
                <img src={img8} alt="level Icon"/>
            </div>
            <div className="hours_label">
                <label>{courseID.totalHours} hours</label>
            </div>
            <div className="lessons_icon">
                <img src={img6} alt="level Icon"/>
            </div>
            <div className="lessons_label">
                <label>31 lessons</label>
            </div>
            <div className="students_icon">
                <img src={img9} alt="level Icon"/>
            </div>
            <div className="students_label">
                <label>25,599 Students</label>
            </div>
            <div className="description_course">
                <p>
                    {courseID.summary}
                </p>
            </div>
            <div className="buy_button">
                <button className="buy_Course"><label>Buy Course</label>  </button>
            </div>
        </div>


    </div>
  )
}
