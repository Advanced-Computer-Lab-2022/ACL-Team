import React from 'react'
import { useParams } from 'react-router-dom'

export default function TraineeInstructorReviews() {
    
    const {traineeID} = useParams();

  return (
    <div>
        {traineeID}
    </div>
  )
}
