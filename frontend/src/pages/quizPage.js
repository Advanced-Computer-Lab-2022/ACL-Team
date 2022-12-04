import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import QuestionCard from '../Components/Cards/questionCard'
import QuizTitle from '../Components/Cards/quizTitle'
import Navbar from '../Components/General/Navbar/navbar'
import QuestionsComponents from '../Components/Instructor/questionsComponents'
import "../Components/css/quizPage.css"
import { useParams } from 'react-router-dom'

export default function QuizPage() {

  const { materialID } = useParams();
  const [material, setMaterial] = useState([]);
  const [questions, setQuestion] = useState([]);

  const getMaterialByID = async () => {
    const res = await axios.get(`http://localhost:3000/lib/CourseMaterial?material_id=${materialID}`)
    .catch((err) => console.log(err));
    const data = await res.data;
    return data;

  };

  useEffect(() =>{
    getMaterialByID().then((data) => setMaterial(data.material))
  },[])

  useEffect(() =>{
    getMaterialByID().then((data) => setQuestion(data.material.questions))
  },[])


  return (
    <div>
      <Navbar/>
      <div classname="title_comp">
        {/* <QuizTitle title={material.title}/> */}
        {/* <p>Hello</p> */}
      </div>

      {questions && questions.map((question) =>(
          // <QuestionsComponents questionID={question._id}/>
          <p>{question._id}</p>
        ))}
      
      {/* <div className="question_comp">
        <QuestionsComponents/>

      </div> */}
    </div>
  )
}
