import React from 'react'
import "../css/rating.css"
import img1 from "../images/Avatar.png"
import img2 from "../images/Group.png"
export default function Rating(review,reviewer_id) {
  return (
    <div>
        <div className="rating_card">
            <h1>{review.type}</h1>
            <h2>{reviewer_id.reviewer_id}</h2>
            {/* <img src="Images\Avatar (1).svg" alt="Avatar logo"></img> */}
            <label>94 Courses</label>
            <label1>13 Reviews</label1>
            <label2> 3 years ago</label2>
            <p>{review.reviewString}</p>
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
