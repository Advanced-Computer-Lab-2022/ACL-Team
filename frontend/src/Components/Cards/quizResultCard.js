import React, { useState } from "react";
import img1 from "../images/Blogging-bro 1.png"


export default function QuizResultCard({question}) {

  return (
    <div className='border'> 
    <div className='course-details'>
    <div className="course-img">
  
  <img src={img1} alt="Course Img" />
</div>

<div className="course-text">
    <h4>{question.question}</h4>
    

  <h6>Correct Answer: {question.answer}</h6>

</div>

<div className="course-info">

</div>
    </div>

  </div>
);
}
