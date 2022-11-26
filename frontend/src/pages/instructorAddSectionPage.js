import React from 'react'
import Navbar from '../Components/General/Navbar/navbar'
import InstructorAddSectionComponent from '../Components/Instructor/instructorAddSectionComponent'
import "../Components/css/instructorAddSectionPage.css"

export default function InstructorAddSectionPage() {
  return (
    
    <div>
        <Navbar/>
        <div className="section_comp">
            <InstructorAddSectionComponent/>
        </div>
        
    </div>
  )
}
