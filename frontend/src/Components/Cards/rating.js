import React from 'react'
import "./rating.css"
import img1 from "../images/Avatar.png"
import img2 from "../images/Group.png"
export default function Rating() {
  return (
    <div>
        <div className="rating_card">
            <h1>Featured review</h1>
            <h2>Coley Samuels</h2>
            {/* <img src="Images\Avatar (1).svg" alt="Avatar logo"></img> */}
            <label>94 Courses</label>
            <label1>13 Reviews</label1>
            <label2> 3 years ago</label2>
            <p>Great Course, really appreciate the explanations and reiteration. Just got CCNP, this course was a huge help. I constantly use the video's for review when I encounter a problem explained in this course. Great instructor with practical advice and a good sense of humor to keep the detailed video's lite. Thanks Chris.</p>
            <label3>Was this review helpful ?</label3>
            <img src= {img1} alt="Avatar Logo"/>
            <div className="star1">
            <img src= {img2} alt = "rating"/> 
            </div>
            <div className="star2">
            <img src= {img2} alt = "rating"/> 
            </div>
            <div className="star3">
            <img src= {img2} alt = "rating"/> 
            </div>
            <div className="star4">
            <img src= {img2} alt = "rating"/> 
            </div>
            <div className="star5">
            <img src= {img2} alt = "rating"/> 
            </div>

        </div>
    </div>
  )
}
