import React from 'react'
import img1 from "../images/Course Image.png"
import { Link } from 'react-router-dom'

export default function SubtitleCard({subtitle}) {
  return (
    <div>
        <div>
        <div className="section-details"> 

            <div className="section-img">
                <img src={img1} alt="section Img" />
            </div>

            <div className="section-text">
                <h1>{subtitle.title}</h1> 
                {/* Make sure of el title variable bta3 el subtitle */}

                
                <p>
                  <Link to={`/trainee/MaterialPage/${subtitle.course_id}&${subtitle.section_id}`}>
                    <button>View Material</button>
                  </Link>   
                </p>
                <p></p>
                {/* <p>
                  {subtitle.quizes.object._id}
                </p> */}
            </div>

            <div className="section-info">


            </div>
            </div>
    </div>
    </div>
  )
}
