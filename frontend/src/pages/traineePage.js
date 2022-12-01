import React from 'react'
import CourseCard from '../Components/Cards/courseCard'

import {useState,useEffect} from 'react';
import axios from 'axios';

import "../Components/css/traineePage.css"
import InstructorCard from '../Components/Instructor/instructorCard'

// import image1 from "../Components/images/image1.svg"
// import image2 from "../Components/images/Learn.svg"
// import image3 from "../Components/images/sponser.svg"
// import image4 from "../Components/images/Mission.svg"
import image5 from "../Components/images/profile1.svg"
import image9 from "../Components/images/profile2.png"
import image10 from "../Components/images/profile3.png"
import image11 from "../Components/images/profile4.svg"
import image6 from "../Components/images/hat.svg"
import image7 from "../Components/images/grad.svg"
import image8 from "../Components/images/star.svg"

export const TraineePage = () => {

  const [courses,setCourses] = useState([]);

  const getCourses = async () => {
    const res = await axios.get("http://localhost:3000/course/getAllCourses")
    .catch((err) => console.log(err));
    const data = await res.data;
    
    return data;
    
  };

  useEffect(() =>{
    getCourses().then((data) => setCourses(data))

  },[])

  const params = new URLSearchParams(window.location.search);
  const courseId = params.get('_id');
  console.log(courseId)


  return (
    <div className="trainee-page">

      <h1>Learn Through our Experts</h1>

      <div className="instructors_card">
        <div className='card1'>
          <img className='profile' src ={image5} alt ='image'></img>
          <button  className='button6'>Join now</button>
          <p className=" coursecount">19 Courses</p>
          <p className=" studentcount">25,599 Students</p>
          <p className=" starcount">3</p>
          <p className=" name">Abdullah shoeib</p>
          <p className=" job">UI/UX Designer</p>
          <img className='hat' src ={image6} alt ='image'></img>
          <img className='grad' src ={image7} alt ='image'></img>
          <a href='/rateInstructor'>
          <img className='star' src ={image8} alt ='image'></img>
          </a>
        </div>

        <div className='card1'>
          <img className='profile' src ={image9} alt ='image'></img>
          <button  className='button7'>Join now</button>
          <p className=" coursecount">19 Coursesd </p>
          <p className=" studentcount">25,599 Students</p>
          <p className=" starcount">3</p>
          <p className=" name">Mazen Hejazy</p>
          <p className=" job">UI/UX Designer</p>
          <img className='hat' src ={image6} alt ='image'></img>
          <img className='grad' src ={image7} alt ='image'></img>
          <a href='/rateInstructor'>
          <img className='star' src ={image8} alt ='image'></img>
          </a>
        </div>

        <div className='card1'>
          <img className='profile' src ={image10} alt ='image'></img>
          <button  className='button7'>Join now</button>
          <p className=" coursecount">19 Courses</p>
          <p className=" studentcount">25,599 Students</p>
          <p className=" starcount">3</p>
          <p className=" name">Marwan Ashraf</p>
          <p className=" job">UI/UX Designer</p>
          <img className='hat' src ={image6} alt ='image'></img>
          <img className='grad' src ={image7} alt ='image'></img>
          <a href='/rateInstructor'>
          <img className='star' src ={image8} alt ='image'></img>
          </a>
        </div>

        <div className='card1'>
          <img className='profile4' src ={image11} alt ='image'></img>
          <button  className='button7'>Join now</button>
          <p className=" coursecount">19 Courses</p>
          <p className=" studentcount">25,599 Students</p>
          <p className=" starcount">3</p>
          <p className=" name">Ghazouly El-hendy</p>
          <p className=" job">UI/UX Designer</p>
          <img className='hat' src ={image6} alt ='image'></img>
          <img className='grad' src ={image7} alt ='image'></img>
          <a href='/rateInstructor'>
          <img className='star' src ={image8} alt ='image'></img>
          </a>
        </div>
        
      </div>

      {courses && courses.map((course) =>(
        <CourseCard course={course}/>
      ))} 
      
      
    </div>
  )
}
