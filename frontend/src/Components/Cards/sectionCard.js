import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'
import img1 from "../images/Course Image.png"
import img2 from "../images/Clock Icon.png"
import img3 from "../images/Lesson Icon.png"
import img4 from "../images/Level Icon.png"
import "../css/sectionCard.css"
import { Link } from 'react-router-dom'

export default function SectionCard({section, traineeID}) {

  return (
    <div>
        <div className="section-details"> 

            <div className="section-img">
                <img src={img1} alt="section Img" />
            </div>

            <div className="section-text">
                <h1>{section.sectionTitle}</h1>

                
                <p>
                  <Link to={`/trainee/SubtitlePage/${section.course_id}&${section._id}&${traineeID}`}>
                    <button>View Subtitles</button>
                  </Link>   
                </p>
            </div>

            <div className="section-info">


            </div>
            </div>
    </div>
  )
}
