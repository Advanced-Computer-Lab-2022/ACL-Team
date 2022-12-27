import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
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
import { Link } from 'react-router-dom'
export default function BuyCourseCard({course,traineeID,payPage}) {
    
    
    const [trainee,setTrainee] = useState(false);
   // const [trainee,setTrainee] = useState('');
    const [payPageLink,setPayPageLink] = useState('')
    const [isCorporate, setIsCorprate] = useState(false)
    var [isOwenedCourse, setIsOwnedCourse] = useState(false)
    var isCorprate = false  
    //var isOwnCourse = false

    const getTraineeById = async () => {
        
        const res = await axios.get(`http://localhost:3000/trainee/getTrainee?_id=${traineeID}`)
        .catch((err) => console.log(err));
        const data = await res.data;
        console.log(res.data)
        //isCorprate = res.data.isCorporate
        setIsCorprate(res.data.isCorporate)
        console.log("mazen is " + res.data.isCorporate)
        //console.log(" isCorporate "+isCorprate)
        var ownedCourses = trainee.ownedCourses
        
        for (let i = 0; i < res.data.ownedCourses.length; i++) {
                
                if(res.data.ownedCourses[i].course_id == course._id)
                {
                    console.log("ana da5alt")
                    setIsOwnedCourse(true)
                    //isOwnCourse = true
                    
                }
          }
          console.log(" isOwnCourse "+isOwenedCourse)
        return data;
        
      };
    //   const isTraineeOwnCourse = async () => {
    //     const trainee = data.getTraineeById;
    //       console.log(trainee);
    //   };
    
    
      useEffect(() =>{
        getTraineeById().then((data) => setTrainee(data))

        if(isCorporate && isOwenedCourse){
            console.log("hide the button")
        }
        


      },[])
      //console.log(isCorprate)
      //console.log(course._id)

    //   if(isCorprate){
    //     console.log("hide the buttons")
    //   }

    const sendCourseRequest = async () => {
        const res = await axios.post("http://localhost:3000/trainee/requestCourse",{_id:traineeID,course_id:course._id})
        .catch((err) => console.log(err));
        const data = await res.data;
        
        return data;
        
      };

    //   console.log(traineeID)
    //   console.log(course._id)

    //   console.log(isCorprate)
    
    const handleCourseRequest=(e)=>{
        e.preventDefault()

        if(isCorprate == true){
            sendCourseRequest();
        }
    }

    

    // const handlePayCourse=(e)=>{
    //     e.preventDefault()

    //     payCourse();
    // }

    //  console.log(payPageLink)



  return (
    <div>
        <div className="card_frame">
            <div className="image">
                <img src = {img1} alt = "course photo"/>
            </div>
            <div className="title">
                <label>{course.title}</label>

            </div>
            <div className="category">
                <label></label>
                <label1>{course.category}</label1>
            </div>
            <div className="icons">
                <img src={img2} alt="icon1"/>
                <img src={img3} alt="icon2"/>
                <img src={img4} alt="icon3"/>
            </div>
            <div className="subtitle">
                <p>{course.title} With Chris Bryant</p>
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
                <label>{course.price}</label>
            </div>
            <div className="currency_label">
                <label>EGP</label>
            </div>
            <div className="level_icon">
                <img src={img7} alt="level Icon"/>
            </div>
            <div className="level_label">
                <label>{course.level} level</label>
            </div>
            <div className="hours_icon">
                <img src={img8} alt="level Icon"/>
            </div>
            <div className="hours_label">
                <label>{course.totalHours} hours</label>
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
                    {course.summary}
                </p>
                

            </div>

            <div className="request-access-button">
                <button onClick={handleCourseRequest}>Request access</button>
            </div>
            
            
            <div className="buy_button">
                {/* <Link to={`https://${payPage}`}>  */}
              <a href={`${payPage}`}>
              <button  className="buy_Course"><label >Buy Course</label>  </button>
              </a>
             
              
                   
                {/* // </Link>   */}
            </div>
        </div>


    </div>
  )
}
