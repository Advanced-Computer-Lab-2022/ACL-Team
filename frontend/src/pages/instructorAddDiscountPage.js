import React from 'react'
import { useParams } from 'react-router-dom'
import "../Components/css/instructorAddDiscountPage.css"
import Navbar from '../Components/General/Navbar/navbar'
import InstructorAddDiscountComponent from '../Components/Instructor/instructorAddDiscountComponent'

export default function InstructorAddDiscountPage() {

  const {courseID} = useParams();
  const {instructorID} = useParams();

  return (
    <div>
      <Navbar/>
      <div className="discount_component">
        <InstructorAddDiscountComponent courseID={courseID} instructorID={instructorID}/>
      </div>
        
    </div>
  )
}
