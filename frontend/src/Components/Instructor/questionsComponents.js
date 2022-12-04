import React, { useState ,useEffect } from 'react'
import axios from 'axios';
import QuestionCard from '../Cards/questionCard'
// import "../css/questionsComponents.css"
import QuestionCard2 from '../Cards/questionCard2';


export default function QuestionsComponents({questionID}) {

  const [question,setQuestion] = useState([]);

  const getQuestionByID = async () => {
    const res = await axios.get(`http://localhost:3000/lib/Question?_id=${questionID}`)
    .catch((err) => console.log(err));
    const data = await res.data;
    return data;

  };

  useEffect(() =>{
    getQuestionByID().then((data) => setQuestion(data))
  },[])

  return (
    <div >
        <QuestionCard2 question={question} />
        {/* <div className="question_frame">
            <div className="question1_comp">
              <QuestionCard question={question}/>
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
        </div> */}
    </div>
  )
}
