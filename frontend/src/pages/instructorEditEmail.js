import React from 'react'
import EditEmail from '../Components/Instructor/editEmail'
import { useParams } from 'react-router-dom';
export default function InstructorEditEmail() {
  const {instructorID} = useParams();
  return (
    <div>
        <EditEmail instructorID={instructorID}/>
    </div>
  )
}
