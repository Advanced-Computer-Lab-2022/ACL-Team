import React from 'react'
import CourseCard from '../Components/Cards/courseCard';
import TraineeNavbar from "../Components/General/Navbar/TraineeNavbar"
import {useState,useEffect} from 'react';
import axios from 'axios';
import '../Components/css/allCourses.css'

export default function AllCourses() {
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
  return (
    <div>
        <TraineeNavbar/>
        <p className='all'> AllCourses </p>

        {courses && courses.map((course ) =>(
        
        <CourseCard course={course}/>
        
      ))} 

    </div>
  )
}

