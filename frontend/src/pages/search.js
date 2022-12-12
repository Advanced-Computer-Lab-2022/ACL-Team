import React from 'react'
import TraineeNavbar from '../Components/General/Navbar/TraineeNavbar'
import CourseCard from '../Components/Cards/courseCard'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Search() {
    const [courses,setCourses] = useState(null)
    
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
  return (
    <div>
        <TraineeNavbar/>
        <div className="allCourses_traineeSearch">
           
                
        
        </div>

    </div>
  )
}
