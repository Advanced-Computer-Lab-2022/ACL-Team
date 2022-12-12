import React from 'react'
import Navbar from '../Components/General/Navbar/navbar'
import InstructorAddSectionComponent from '../Components/Instructor/instructorAddSectionComponent'
import "../Components/css/instructorAddSectionPage.css"
import { useParams } from 'react-router-dom'

export default function InstructorAddSectionPage() {

  const {courseID} = useParams();

  return (
    
    <div>
        <Navbar/>
        <div className="section_comp">
            <InstructorAddSectionComponent courseID={courseID} />
        </div>
        
    </div>
  )
}
