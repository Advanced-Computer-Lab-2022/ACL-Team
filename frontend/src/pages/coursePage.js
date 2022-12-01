import React from 'react'
import { useParams } from 'react-router-dom'
import BuyCourseCard from '../Components/Cards/buyCourseCard'
import Rating from '../Components/Cards/rating'
import RatingsCard from '../Components/Course/ratingsCard'
import Navbar from '../Components/General/Navbar/navbar'
import "../Components/css/coursePage.css"
import InstructorCardBig from '../Components/Instructor/instructorCardBig'

export const CoursePage = () => {

  const { id } = useParams();

  return (
    <div>
      <Navbar/>
      <h2>Course id - {id}</h2>
     
      <div>
        <RatingsCard/>
      </div>
      <div>
        <BuyCourseCard courseID ={id}/>
      </div>
      <div className="inst_card">
        <InstructorCardBig/>
      </div>
      <div>
        
      </div>
    </div>
    
  )
}
