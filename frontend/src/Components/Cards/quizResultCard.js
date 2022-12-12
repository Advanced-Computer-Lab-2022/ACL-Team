import React, { useState } from "react";
import img1 from "../images/Blogging-bro 1.png"


export default function QuizResultCard({question}) {

  const questionAnswer = question.answer;

  return (
    <div className='border'> 
    <div className='course-details'>
    <div className="course-img">
  
  <img src={img1} alt="Course Img" />
</div>

<div className="course-text">
    <h4>{question.question}</h4>

     {questionAnswer == "choice_1" && <h6>Correct Answer: {question.choices[0].choice_1}</h6>}
     {questionAnswer == "choice_2" && <h6>Correct Answer: {question.choices[0].choice_2}</h6>}
     {questionAnswer == "choice_3" && <h6>Correct Answer: {question.choices[0].choice_3}</h6>}
     {questionAnswer == "choice_4" && <h6>Correct Answer: {question.choices[0].choice_4}</h6>}
    

  {/* <h6>Correct Answer: {(question.choices[0]) + "." + `${questionAnswer}`}</h6> */}

</div>

<div className="course-info">

</div>
    </div>

  </div>
);
}
