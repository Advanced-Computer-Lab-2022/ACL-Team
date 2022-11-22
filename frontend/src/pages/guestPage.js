import React from 'react'
// import Dropdown from '../Components/General/Buttons/ButtonsList'
import Navbar from '../Components/General/Navbar/navbar'
import InstructorCard from '../Components/Instructor/instructorCard'
import "../pages/guestPage.css"



export default function GuestPage() {
  return (
    <div className="PageColor">

      <Navbar/>
      <InstructorCard/>
      <InstructorCard/>
    </div>
    
  )

}
