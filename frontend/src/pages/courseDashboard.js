import React from 'react'
import CourseCard from '../Components/courseCard'
import { useEffect, useState } from 'react'
import axios from 'axios';

export const CourseDashboard = () => {
  const [courses,setCourses] = useState([])

  const getCourses = async () => {
    console.log("boodaa")
    const res = await axios.get("http://localhost:3000/course/getCourses")
    .catch((err) => console.log(err));
    const data = await res.data;
    
    return data;
    
  };

  useEffect(() =>{
    getCourses().then((data) => setCourses(data))

  },[])

  return (
    <div>
      {courses && courses.map((course) =>(
        <CourseCard key={course.id} course={course}/>
      ))} 
    </div>
  )
}
