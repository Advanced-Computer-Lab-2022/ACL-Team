import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BuyCourseCard from '../Components/Cards/buyCourseCard'
import Rating from '../Components/Cards/rating'
import RatingsCard from '../Components/Course/ratingsCard'
import Navbar from '../Components/General/Navbar/navbar'
import "../Components/css/coursePage.css"
import InstructorCardBig from '../Components/Instructor/instructorCardBig'
import TraineeNavbar from '../Components/General/Navbar/TraineeNavbar'

export const CoursePage = () => {

  const { id } = useParams();
  const { traineeID } = useParams();

  const [course,setCourse] = useState([]);
  const [instructor,setInstructor] = useState([]);

    const getCourseById = async () => {
        const res = await axios.get(`http://localhost:3000/course/?_id=${id}`)
        .catch((err) => console.log(err));
        const data = await res.data;
        
        return data;
        
      };

      // const getInstructor = async () => {
      //   const res = await axios.get(`http://localhost:3000/instructor/getInstructor?_id=${course.instructorid}`)
      //   .catch((err) => console.log(err));
      //   const Instdata = await res.data;
        
      //   return Instdata;
        
      // };

      // useEffect(() =>{
      //   getInstructor().then((Instdata) => setInstructor(Instdata))
    
      // },[])

      useEffect(() =>{
        getCourseById().then((data) => setCourse(data))
      },[])

      console.log(course)

  return (
    <div>
      <TraineeNavbar/>
     
      <div className="buy-course-card-pos">
        <BuyCourseCard course={course} traineeID={traineeID}/>  
      </div>
      {/* <div className="inst_card">
        <InstructorCardBig/>
      </div> */}
      <div>
        
      </div>
    </div>
    
  )
}
