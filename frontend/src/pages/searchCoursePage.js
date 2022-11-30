import React from 'react'
// import Sidebar from '../Components/drawer'
import Sidebar from '../Components/General/sidebar';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from '../Components/General/Navbar/navbar';
import axios from 'axios';
import {useState, useEffect} from 'react';
import CourseCard from '../Components/Cards/courseCard';


export default function ShowCoursePage() {
  const [courses,setCourses] = useState(null)
  const [subject,setSubject] = useState('')
  const [price,setPrice] = useState(null)
  const [rating,setRating] = useState(null)

  const getCourseBySubject = async () => {
    const res = await axios.post("http://localhost:3000/course/getCourseBySubject" , {
      subject:subject
    })
    .catch((err) => console.log(err));
    const data = await res.data;

    return data;
  };

  const getCourseByPrice = async () => {
    const res = await axios.post("http://localhost:3000/course/getCoursesByPrice" , {
      price:price
    })
    .catch((err) => console.log(err));
    const data = await res.data;

    return data;
  };

  const getCourseByRating = async () => {
    const res = await axios.post("http://localhost:3000/course/getCoursesByRating" , {
      rating:rating
    })
    .catch((err) => console.log(err));
    const data = await res.data;

    return data;
  };

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

  useEffect(() => {
    getCourseBySubject().then((data) => setCourses(data))
  },[subject])

  useEffect(() => {
    getCourseByPrice().then((data) => setCourses(data))
  },[price])

  return (
    <div>
        <Navbar/>
        
        <div className="show-all-courses">
          <Sidebar/>
          <div>
            {courses && courses.map((course) =>(
            <CourseCard key={course._id} course={course}/>
            ))} 
          </div>

        </div>
        

    </div>
  )
}
