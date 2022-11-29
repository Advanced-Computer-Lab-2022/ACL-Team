import React from 'react'
import InstructorAddSubtitle from '../Components/Instructor/instructorAddSubtitle'
import Navbar from '../Components/General/Navbar/navbar'
import CourseCard from "../Components/Cards/courseCard"
import InstructorCourseCard from '../Components/Instructor/instructorCourseCard'
export default function InstructorCoursePage() {
  return (
    
    <div>
        <Navbar/>
        <div className="coursepage_component1">
          <InstructorCourseCard/>
        </div>
        
        <div className="coursepage_component2">
          <InstructorAddSubtitle/>
        </div>
        
    </div>
  )
}
