import React from 'react'
import BuyCourseCard from '../Components/Cards/buyCourseCard'
import Rating from '../Components/Cards/rating'
import RatingsCard from '../Components/Course/ratingsCard'
import Navbar from '../Components/General/Navbar/navbar'
import "../Components/css/coursePage.css"
import InstructorCardBig from '../Components/Instructor/instructorCardBig'

export const CoursePage = () => {
  return (
    <div>
      <Navbar/>
      
     
      <div>
        <RatingsCard/>
      </div>
      <div>
        <BuyCourseCard/>
      </div>
      <div className="inst_card">
        <InstructorCardBig/>
      </div>
      <div>
        
      </div>
    </div>
    
  )
}
