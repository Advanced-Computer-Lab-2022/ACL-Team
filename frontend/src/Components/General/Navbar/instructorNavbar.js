import React from 'react'
import "../../css/navbar.css"
import search from "../../images/search.png"
import img1 from "../../images/Union.png"
import img2 from "../../images/notification.png"
import img3 from "../../images/question-circle.png"
import img4 from "../../images/settings.png"
import img5 from "../../images/Avatar.png" 
import img6 from "../../images/arrow.png"

import { InstructorEditProfile } from '../../../pages/instructorEditProfile'
import NavyButton from '../Buttons/navyButton'
import { Link } from 'react-router-dom'

export default function InstNavbar({props}) {
  return (
    <div className="Nav-signedIn">

        <div>
            <button className="sidemenu_button"><img className="setting_icon" src={img6} alt="back-page-icon" /></button>
        </div>

        <div className="Nav-title">
            <h2>LearnHub</h2>

        </div> 
       
        <div className="Nav-search">
            <input type="textbox" placeholder="  Search ..."/>
        </div> 

        <div className="Nav-actions">
            <ul>
                <li>
                    <Link to={`/instructor/ViewReviews/${props}`} >
                        My Reviews
                    </Link>
                </li>

                <li>
                    <Link to={`/instructor/filterCourses/${props}`} >
                        My Courses
                    </Link>
                </li>

                <li>
                    <a href="/instructor/addCourse">Add a course</a>
                </li>

                <li>
                    <a href="/instructor/editProfile">Edit Profile</a>
                </li>

                <li>
                    <a href="/FAQ">Reports</a>
                </li>

            </ul>

        </div>

        <div className="Nav-userInfo">
            <a href=""><img src={img1} alt="icon"/></a>
            <a href=""><img src={img2} alt="icon"/></a>
            <a href=""><img src={img3} alt="icon"/></a>
            <a href=""><img src={img4} alt="icon"/></a>
            <a href=""><img src={img5} alt="icon"/></a>

        </div>

    </div>
  )
}
