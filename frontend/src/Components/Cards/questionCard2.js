import React, { useState } from "react";
import img1 from "../images/Blogging-bro 1.png"


export default function QuestionCard2({question}) {

  const [answer,setAnswer] = useState();
  const [questionGrade,setQuestionGrade] = useState(0);
  const [submitted , setSubmit] = useState('');
  
  const handleSubmit =(e)=>{
    e.preventDefault()

    if(answer == question.answer){
      questionGrade += 1;
      console.log(questionGrade)
    }
    else{
      console.log(question.answer)


    }

    // setSubmit(true);
  }



  return (
    <div className='border'> 
      <div className='course-details'>
      <div className="course-img">
    
      <img src={img1} alt="Course Img" />
    </div>

    <form onSubmit={handleSubmit}>
    <div className="course-text">
      <h3>{question.question}</h3>

      {/* {Object.keys(question.choices[0]).map((choice, index) => {
        return (
          <div>
            <h6>
              <input
                type="radio"
                name="answer"
                onChange={(e) => setAnswer(e.target.value)}
                value={"choice" + "_" + (index + 1)}
              />{choice}
            </h6>
            {submitted && ("choice" + "_" + (index + 1) == question.answer) && <p>Correct</p>}
            {submitted && (choice == answer && "choice" + "_" + (index + 1) !== question.answer) && <p>Incorrect</p>}
          </div>
        )
      })} */}

      <h6><input 
      type="radio"
      name="answer"
      onChange={(e) => setAnswer(e.target.value)}
      value="choice_1"
      />{question.choices[0].choice_1}</h6>

      <h6><input 
      type="radio"
      name="answer"
      onChange={(e) => setAnswer(e.target.value)}
      value="choice_2" 
      />{question.choices[0].choice_2}</h6>

      <h6><input 
      type="radio"
      name="answer"
      onChange={(e) => setAnswer(e.target.value)}
      value="choice_3" 
      />{question.choices[0].choice_3}</h6>

      <h6><input 
      type="radio"
      name="answer"
      onChange={(e) => setAnswer(e.target.value)}
      value="choice_4" 
      />{question.choices[0].choice_4}
      </h6>


    </div>

    <button>Submit</button>


    </form>


    
      </div>

    </div>
  );
}
