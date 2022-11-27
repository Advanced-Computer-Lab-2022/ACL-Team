import React from 'react'
import InstructorAddSubtitle from '../Components/Instructor/instructorAddSubtitle'
import Navbar from '../Components/General/Navbar/navbar'
import CourseCard from "../Components/Cards/courseCard"
export default function InstructorCoursePage() {
  return (
    
    <div>
        <Navbar/>
        
        <div className="coursepage_component">
          <InstructorAddSubtitle/>
        </div>
        
    </div>
  )
}
