import React from 'react'
import "../css/quizTitle.css"

export default function QuizTitle({title}) {
  return (
    <div>
        <div className="title_frame">
            <label> {title} </label>
            <label1>Section II</label1>
            <label2>Tutorial III</label2>
            <label3>Quiz I</label3>
            <label4>This Excercise is a great way to demonstrate your understanding of lecture 3 and to apply</label4>
        </div>

    </div>
  )
}
