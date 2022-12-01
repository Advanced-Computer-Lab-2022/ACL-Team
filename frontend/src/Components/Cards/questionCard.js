import React , {useState}from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import "../css/questionCard.css"
import img1 from "../images/Blogging-bro 1.png"
import img2 from "../images/Lesson Icon.png"
export default function QuestionCard({question}) {
    const [questions,setQuestions] = useState([]);

  const getQuestions = async () => {
    const res = await axios.get("http://localhost:3000/user/getCourseMaterial")
    .catch((err) => console.log(err));
    const data = await res.data;
    
    return data;
    
  };

  useEffect(() =>{
    getQuestions().then((data) => setQuestions(data))

  },[])
  return (
    <div>
        
        <div className="questions_frame">
            <div className="question_container">
                <div className="question_image">
                    <img src={img1} alt = "question image"/>
                    <input  
                    type="textbox" placeholder="material_id"/>
                </div>
                <div className="question_title">
                    <h1>What is your name ?</h1>
                    <h2>further illustration</h2>
                </div>
                <div className="question_level">
                    <img src = {img2} alt ="level_icon"/>
                    <label>Easy</label>
                    <label1>Level</label1>
                </div>
                <div className="question_choices">
                    <div className="question_choice1and2">
                        <div className="question_choice1">
                            <input type = "radio" value="choice_1"/>
                            <label>marwan</label>
                        </div>
                        <div className="question_choice2">
                            <input type = "radio" value="choice_2"/>
                            <label>marwan</label>
                        </div>
                    </div>
                    <div className="question_choice3and4">
                        <div className="question_choice3">
                            <input type = "radio" value="choice_3"/>
                            <label>marwan</label>
                        </div>
                        <div className="question_choice4">
                            <input type = "radio" value="choice_4"/>
                            <label>marwan</label>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        {questions && questions.map((question) =>(
        <QuestionCard question={question}/>
      ))}
    </div>
  )
}
