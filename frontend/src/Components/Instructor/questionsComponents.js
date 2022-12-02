import React from 'react'
import QuestionCard from '../Cards/questionCard'
import "../css/questionsComponents.css"

export default function QuestionsComponents() {
  return (
    <div className="marwan_ashraf">
        <div className="question_frame">
            <div className="question1_comp">
            <QuestionCard/>
            </div>
            <div className="question2_comp">
            <QuestionCard/>
            </div>
            <div className="question3_comp">
            <QuestionCard/>
            </div>
            <div className="question4_comp">
            <QuestionCard/>
            </div>
            <div className="submit_button">
              <button className="Navy_Button"> Submit </button>
            </div>
        </div>
    </div>
  )
}
