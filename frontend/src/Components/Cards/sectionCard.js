import React from 'react'
import img1 from "../images/Course Image.png"
import img2 from "../images/Clock Icon.png"
import img3 from "../images/Lesson Icon.png"
import img4 from "../images/Level Icon.png"
import "../css/sectionCard.css"
export default function SectionCard({section}) {
  return (
    <div>
        <div className="section-details"> 

            <div className="section-img">
                <img src={img1} alt="section Img" />
            </div>

            <div className="section-text">
                <h1>{section.sectionTitle}</h1>

                
                <p>
                 <button>View Subtitles</button>   
                </p>
            </div>

            <div className="section-info">


            </div>
            </div>
    </div>
  )
}
