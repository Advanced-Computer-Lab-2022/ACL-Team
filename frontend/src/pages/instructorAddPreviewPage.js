import React from 'react'
import { useParams } from 'react-router-dom'
import InstructorAddPreviewURL from '../Components/Instructor/instructorAddPreviewURL'

export default function InstructorAddPreviewPage() {
  const{courseID} = useParams()  
  return (
    <div>
        <InstructorAddPreviewURL courseID={courseID}/>
    </div>
  )
}
