import React from 'react'
import InstructorAddQuizComponent from '../Components/Instructor/instructorAddQuizComponent'
import Navbar from '../Components/General/Navbar/navbar'
import { useParams } from 'react-router-dom'

export default function InstructorAddQuizPage() {

  const {courseID} = useParams();

  return (
    <div>
      <Navbar/>
      <div className="page_comp">
        <InstructorAddQuizComponent courseID={courseID} />
      </div>


    </div>
  )
}
