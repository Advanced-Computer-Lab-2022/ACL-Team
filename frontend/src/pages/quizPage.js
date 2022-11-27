import React from 'react'
import QuestionCard from '../Components/Cards/questionCard'
import QuizTitle from '../Components/Cards/quizTitle'
import Navbar from '../Components/General/Navbar/navbar'
import QuestionsComponents from '../Components/Instructor/questionsComponents'
import "../Components/css/quizPage.css"

export default function QuizPage() {
  return (
    <div>
      <Navbar/>
      <div classname="title_comp">
        <QuizTitle/>
      </div>
      
      <div className="question_comp">
        <QuestionsComponents/>

      </div>
    </div>
  )
}
