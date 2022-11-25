import React from 'react'
import BuyCourseCard from '../Components/Cards/buyCourseCard'
import Rating from '../Components/Cards/rating'
import RatingsCard from '../Components/Course/ratingsCard'
import Navbar from '../Components/General/Navbar/navbar'

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
      <div>
        
      </div>
    </div>
    
  )
}
