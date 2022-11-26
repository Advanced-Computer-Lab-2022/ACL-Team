import React from 'react'
import "../Components/css/instructorAddDiscountPage.css"
import Navbar from '../Components/General/Navbar/navbar'
import InstructorAddDiscountComponent from '../Components/Instructor/instructorAddDiscountComponent'

export default function InstructorAddDiscountPage() {
  return (
    <div>
      <Navbar/>
      <div className="discount_component">
        <InstructorAddDiscountComponent/>
      </div>
        
    </div>
  )
}
