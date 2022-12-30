import React from 'react'
import InstructorAddCourseComponent from '../Components/Instructor/instructorAddCourseComponent'
import "../Components/css/instructorAddCoursePage.css"
import Navbar from '../Components/General/Navbar/navbar'
import { useParams } from 'react-router-dom'
export const InstructorAddCourse = () => {
  const {instructorID} = useParams();
  return (
    <div>
      <Navbar/>
      <div className="Add_course">
        <InstructorAddCourseComponent instructorID = {instructorID}/>
      </div>
      
    </div>

  )
}