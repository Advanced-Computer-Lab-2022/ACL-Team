import React, { useState } from 'react'
import img1 from "../images/createCourse.png"
import "../css/instructorAddQuizComponent.css"
import axios from 'axios'


export default function InstructorAddQuizComponent({courseID}) {
  const [course_id,setCourse_id] = useState('')
  const [section_id,setSection_id] = useState('')
  const [subtitle_id,setSubtitle_id] = useState('') 
  const [material_id,setMaterial_id] = useState('')
  const [quizDuration,setQuizDuration] = useState('') 
  const [quizPoints, setQuizPoints] = useState('')

  const [quizName , setQuizname] = useState('')
 
  const [question_name,setQuestionName] = useState('')
  const [question,setQuestion] = useState('')
  const [choice_1,setChoice1] = useState('')
  const [choice_2,setChoice2] = useState('')
  const [choice_3,setChoice3] = useState('')
  const [choice_4,setChoice4] = useState('')
  const [answer,setAnswer] = useState('')
  const [grade,setGrade] = useState('')
  const course_id1 = course_id
  const section_id1 = section_id
  const Subtitle_id1 = subtitle_id
  const material_id1=material_id
  const duration = quizDuration;
  const points = quizPoints;
  const instructorAddQuiz = async () => {
    // console.log("boodaa")
    const res = await axios
      .post("http://localhost:3000/instructor/addQuiz", {
        course_id:courseID,section_id:section_id,subtitle_id:subtitle_id,quizName:quizName,
        duration:duration, points:quizPoints

      })
      .catch((err) => console.log(err));
      const data = await res.data;
    return data;
  };
  const instructorAddQuestion = async () => {
    // console.log("boodaa")
    const res = await axios
      .post("http://localhost:3000/instructor/addQuestion", {
        course_id:course_id1,section_id:section_id1,subtitle_id:Subtitle_id1,material_id:material_id1,
        question_name:question_name,question:question,choice_1:choice_1,choice_2:choice_2,choice_3:choice_3,
        choice_4:choice_4,answer:answer,grade:grade


      })
      .catch((err) => console.log(err));
      const data = await res.data;
    return data;
  };
  const handleSubmitt=(e)=>{
    e.preventDefault()
    console.log("yarab")
    instructorAddQuiz().then((data) => console.log(data))
    
    console.log("hiiii")
  
  }
  const handleSubmitt1=(e)=>{
    e.preventDefault()
    console.log("yarab")
    console.log(course_id1)
    console.log(section_id1)
    console.log(Subtitle_id1)
    console.log(material_id1)
    instructorAddQuestion().then((data) => console.log(data))
    



    
    console.log("hiiii")
  }
  

        
  return (
    <div>
        <div className="quiz_frame">
          <div className="quiz-icon1">
            <img src={img1} alt="icon"/>
          </div>
          <div className="quiz-title">
            <h1>Create Quiz </h1>
          </div>
          <form onSubmit={handleSubmitt}>
            
            <div className="quiz_name">
              <input type="textbox" placeholder='Course Instructor Name' />
            </div>
            
            <div className="quiz_name">
              <input onChange={(e) => setCourse_id(e.target.value)}
              value={course_id}
              type="textbox" placeholder='Course_id' />
            </div>
            <div className="quiz_name">
              <input onChange={(e) => setSection_id(e.target.value)}
              value={section_id}
              type="textbox" placeholder='Section_id' />
            </div>
            <div className="quiz_name">
              <input onChange={(e) => setSubtitle_id(e.target.value)}
              value={subtitle_id}
              type="textbox" placeholder='Subtitle_id' />
            </div>
            <div className="quiz_name">
              <input onChange={(e) => setQuizDuration(e.target.value)}
              value={quizDuration}
              type="textbox" placeholder='Duration' />
            </div>
            <div className="quiz_name">
              <input onChange={(e) => setQuizPoints(e.target.value)}
              value={quizPoints}
              type="textbox" placeholder='Points' />
            </div>
            <div className="quiz_LastName">
    
              <input onChange={(e) => setQuizname(e.target.value)}
                value={quizName}
               type="textbox" placeholder='Quiz Title' />
               
               
            </div>
            <div className="quiz_button">
            <button className="Navy_Button" type="submit"> Create Quiz </button>
           </div>

          
          
          <div className="quiz_name">
            <input onChange={(e) => setMaterial_id(e.target.value)}
                value={material_id}
            type="textbox" placeholder='Material_id' />
          </div>
          
          </form>
          <div className="quiz_line1">
            <hr></hr>
          </div>
          
          <div className="quiz_line2">
            <hr></hr>
          </div>
          <div className="create_questions">
            <div className="question1">
              <form onSubmit={handleSubmitt1}>
              <div className="question1_title">
                <h1>Create Question 1</h1>
              </div>
              <div className="question1_name">
                <input onChange={(e) => setQuestionName(e.target.value)}
                value={question_name}
                 type="textbox" placeholder="Question Name"/>
              </div>
              <div className="question1_name">
                <input onChange={(e) => setQuestion(e.target.value)}
                value={question}
                type="textbox" placeholder="Question"/>
              </div>
              <div className="question1_answer">
                <input onChange={(e) => setAnswer(e.target.value)}
                value={answer}
                type="textbox" placeholder="Answer Number"/>
              </div>
              <div className="question1_choice1">
                <input onChange={(e) => setChoice1(e.target.value)}
                value={choice_1}
                type="textbox" placeholder="Choice 1"/>
              </div>
              <div className="question1_choice2">
                <input onChange={(e) => setChoice2(e.target.value)}
                value={choice_2}
                type="textbox" placeholder="Choice 2"/>
              </div>
              <div className="question1_choice3">
                <input onChange={(e) => setChoice3(e.target.value)}
                value={choice_3}
                type="textbox" placeholder="Choice 3"/>
              </div>
              <div className="question1_choice4">
                <input onChange={(e) => setChoice4(e.target.value)}
                value={choice_4}
                type="textbox" placeholder="Choice 4"/>
              </div>
              <div className="question1_choice4">
                <input onChange={(e) => setGrade(e.target.value)}
                value={grade}
                type="textbox" placeholder="Grade"/>
              </div>
              <div className="quiz_button">
                <button className="Navy_Button" type="submit"> Create Question 1 </button>
              </div>
              </form>
              <div className="question1_line">
                <hr></hr>
              </div>
            </div>
            <div className="question2">
              <div className="question2_title">
                <h1>Create Question 2</h1>
              </div>
              <form onSubmit={handleSubmitt1}>
              <div className="question2_name">
                <input onChange={(e) => setQuestionName(e.target.value)}
                value={question_name}
                 type="textbox" placeholder="Question Name"/>
              </div>
              <div className="question2_name">
                <input onChange={(e) => setQuestion(e.target.value)}
                value={question}
                type="textbox" placeholder="Question "/>
              </div>
              <div className="question2_answer">
                <input onChange={(e) => setAnswer(e.target.value)}
                value={answer}
                type="textbox" placeholder="Answer Number"/>
              </div>
              <div className="question2_choice1">
                <input onChange={(e) => setChoice1(e.target.value)}
                value={choice_1}
                type="textbox" placeholder="Choice 1"/>
              </div>
              <div className="question2_choice2">
                <input onChange={(e) => setChoice2(e.target.value)}
                value={choice_2}
                type="textbox" placeholder="Choice 2"/>
              </div>
              <div className="question2_choice3">
                <input onChange={(e) => setChoice3(e.target.value)}
                value={choice_3} 
                type="textbox" placeholder="Choice 3"/>
              </div>
              <div className="question2_choice4">
                <input onChange={(e) => setChoice4(e.target.value)}
                value={choice_4}
                type="textbox" placeholder="Choice 4"/>
              </div>
              <div className="quiz_button">
                <button className="Navy_Button" type="submit"> Create Question 2 </button>
              </div>
              </form>
              <div className="question2_line">
                <hr></hr>
              </div>
            </div>
            <div className="question3">
              <div className="question3_title">
                <h1>Create Question 3</h1>
              </div>
              <form onSubmit={handleSubmitt1}>
              <div className="question3_name">
                <input onChange={(e) => setQuestionName(e.target.value)}
                value={question_name} 
                type="textbox" placeholder="Question Name"/>
              </div>
              <div className="question3_name">
                <input onChange={(e) => setQuestion(e.target.value)}
                value={question} 
                type="textbox" placeholder="Question "/>
              </div>
              <div className="question3_answer">
                <input onChange={(e) => setAnswer(e.target.value)}
                value={answer} 
                type="textbox" placeholder="Answer Number"/>
              </div>
              <div className="question3_choice1">
                <input onChange={(e) => setChoice1(e.target.value)}
                value={choice_1} 
                type="textbox" placeholder="Choice 1"/>
              </div>
              <div className="question3_choice2">
                <input onChange={(e) => setChoice2(e.target.value)}
                value={choice_2} 
                type="textbox" placeholder="Choice 2"/>
              </div>
              <div className="question3_choice3">
                <input onChange={(e) => setChoice3(e.target.value)}
                value={choice_3}  
                type="textbox" placeholder="Choice 3"/>
              </div>
              <div className="question3_choice4">
                <input onChange={(e) => setChoice4(e.target.value)}
                value={choice_4} 
                type="textbox" placeholder="Choice 4"/>
              </div>
              <div className="quiz_button">
                <button className="Navy_Button" type="submit"> Create Question 3 </button>
              </div>
              </form>
              <div className="question3_line">
                <hr></hr>
              </div>
            </div>
            <div className="question4">
              <div className="question4_title">
                <h1>Create Question 4</h1>
              </div>
              <div className="question4_name">
                <input type="textbox" placeholder="THIS IS NOT WORKING"/>
              </div>
              <div className="question4_name">
                <input type="textbox" placeholder="Question"/>
              </div>
              <div className="question4_answer">
                <input type="textbox" placeholder="Answer Number"/>
              </div>
              <div className="question4_choice1">
                <input type="textbox" placeholder="Choice 1"/>
              </div>
              <div className="question4_choice2">
                <input type="textbox" placeholder="Choice 2"/>
              </div>
              <div className="question4_choice3">
                <input type="textbox" placeholder="Choice 3"/>
              </div>
              <div className="question4_choice4">
                <input type="textbox" placeholder="Choice 4"/>
              </div>
              <div className="question4_line">
                <hr></hr>
              </div>
            </div>
          </div>
          <div className="quiz_button">
            <button className="Navy_Button" type="submit"> Create Quiz </button>
          </div>
        </div>
    </div>
  )
}
