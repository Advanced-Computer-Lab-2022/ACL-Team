import React from 'react'
import { useParams } from 'react-router-dom'
import EditBio from '../Components/Instructor/editBio'

export default function InstructorEditBio() {
  const {instructorID} = useParams();
  return (
    <div>
        <EditBio instructorID={instructorID}/>
    </div>
  )
}
