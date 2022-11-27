import React from 'react'
import InstructorAddQuizComponent from '../Components/Instructor/instructorAddQuizComponent'
import Navbar from '../Components/General/Navbar/navbar'

export default function instructorAddQuizPage() {
  return (
    <div>
      <Navbar/>
      <div className="page_comp">
        <InstructorAddQuizComponent/>
      </div>


    </div>
  )
}
