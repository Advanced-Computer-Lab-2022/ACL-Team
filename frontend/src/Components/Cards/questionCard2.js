import React, { useState } from 'react'



export default function QuestionCard2({question}) {


  return (
    <div>
        <h2>Hello</h2>
        <h2>{question.question}</h2>
        <h2>{question.questionTitle}</h2>
        <h2>{question.answer}</h2>
        <h2>{question.choices[0].choice_1}</h2>
        <h2>{question.choices[0].choice_2}</h2>

        {/* {choices && choices.map((choice) =>(
          <p>{choice.choice_1}</p>
        ))} */}
        
    </div>
  )
}
