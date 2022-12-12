import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import QuizTitle from '../Components/Cards/quizTitle'
import Navbar from '../Components/General/Navbar/navbar'
import QuestionsComponents from '../Components/Instructor/questionsComponents'
import "../Components/css/quizPage.css"
import { useParams } from 'react-router-dom'
import QuestionCard from '../Components/Cards/questionCard'
import QuestionCard2 from '../Components/Cards/questionCard2'
import { Link } from 'react-router-dom'

export default function QuizPage() {

  const { materialID } = useParams();
  const [questions, setQuestion] = useState([]);

  const getMaterialByID = async () => {
    const res = await axios.get(`http://localhost:3000/lib/CourseMaterial?material_id=${materialID}`)
    .catch((err) => console.log(err));
    const data = await res.data;
    return data;

  };

  useEffect(() =>{
    getMaterialByID().then((data) => setQuestion(data.material.questions))
  },[])

  // console.log(questions)

  console.log()


  return (
    <div>
      <Navbar/>

      {questions && questions.map((question) =>(
          <QuestionCard2 question={question}/>
      ))}

      <Link to={`/quizResult/${materialID}`}>
        <button>Submit Quiz</button>
      </Link>

    </div>
  )
}
