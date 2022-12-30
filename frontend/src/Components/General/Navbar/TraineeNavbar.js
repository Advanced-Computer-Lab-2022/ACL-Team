import React from 'react'
// import "../../css/navbar.css"
import "../../css/traineeNavbar.css"
import search from "../../images/search.png"
import img1 from "../../images/Union.png"
import img2 from "../../images/notification.png"
import img3 from "../../images/question-circle.png"
import img4 from "../../images/settings.png"
import img5 from "../../images/Avatar.png" 
import img6 from "../../images/arrow.png"
import Dropdown2 from '../Buttons/CategoryChoices'
import { InstructorEditProfile } from '../../../pages/instructorEditProfile'
import NavyButton from '../Buttons/navyButton'
import { useState,useEffect } from 'react'
import CourseCard from '../../Cards/courseCard'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function TraineeNavbar() {
    const [searchedword,setSearchedword] = useState('')
    const [courses,setCourses] = useState([])
    const courseSearch = async () => {
        console.log("boodaa")
        const res = await axios.post("http://localhost:3000/course/search" , {
            searchedword:searchedword
        })
        .catch((err) => console.log(err));
        const data = await res.data;
        
        return data;
        
      };
      const getCourses = async () => {
        console.log("boodaa")
        const res = await axios.get("http://localhost:3000/course/getAllCourses")
        .catch((err) => console.log(err));
        const data = await res.data;
        
        return data;
        
      };
    useEffect(() =>{
        getCourses().then((data) => setCourses(data))
    
      },[])
      useEffect(() =>{
        courseSearch().then((data) => setCourses(data))
    
      },[])  
      


  return (
    <div>
    <div className="Nav-signedIn2">

        <div>
            <button className="sidemenu_button"><img className="setting_icon" src={img6} alt="back-page-icon" /></button>
        </div>

        <div className="Nav-title">
            <h2>LearnHub</h2>
        </div> 
       
        <div  className="Nav-search" onSubmit={courseSearch()}>
        <a href='/search'><button className="Navy_Button" >Search</button></a>
        </div> 

        <div className="Nav-actions">
            <ul>
            <li>
                    <Link to={`/`} >
                        Log Out
                    </Link>
                </li>

                <li>
                    <a href="/TraineeEditProfile">Edit Profile</a>
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

       

</div>

  )
}
