import React from 'react'
import img1 from "../images/Course Image.png"
import { Link } from 'react-router-dom'
import VideoPage from '../Video Page/videoPage'

export default function SubtitleCard({subtitle, traineeID}) {

  const Video = subtitle.subtitlePreviewVideoUrl;

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
                  <Link to={`/trainee/MaterialPage/${subtitle.course_id}&${subtitle.section_id}&${traineeID}`}>
                    <button>View Material</button>
                  </Link>   
                </p>
                <p>
                  <Link to={`/Videopage/${subtitle.course_id}`} state={`${Video}`}> 
                    <button>View Video</button>
                  </Link>   
                </p>
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
