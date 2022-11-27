import React from 'react'
import InstructorAddCourseComponent from '../Components/Instructor/instructorAddCourseComponent'
import "../Components/css/instructorAddCoursePage.css"
import Navbar from '../Components/General/Navbar/navbar'
export const InstructorAddCourse = () => {
  return (
    <div>
      <Navbar/>
      <div className="Add_course">
        <InstructorAddCourseComponent/>
      </div>
      
    </div>

  )
}