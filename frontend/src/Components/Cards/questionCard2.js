import React, { useState , useEffect} from "react";
import axios from "axios";
import img1 from "../images/Blogging-bro 1.png"


export default function QuestionCard2({courseID,sectionID,materialID,question, traineeID}) {

  const [youranswer,setYourAnswer] = useState();

  const [questionGrade,setQuestionGrade] = useState(0); //ana hagarab fl variable dah

  const [submitted , setSubmit] = useState('');
  const [counter,setCounter]=useState(0)
  const [grade ,setGrade]=useState(0);
  const [temp,setTemp]=useState(0);

  const answerQuestion = async () => {
    const res = await axios.post("http://localhost:3000/trainee/answerQuestion" ,{
      user_id: traineeID, course_id: courseID, section_id: sectionID, material_id: materialID ,
      question_id: question.question_id , choice: youranswer
    }) 
    .catch((err) => console.log(err));
    const data = await res.data;
    return data;

  };
  console.log(traineeID)
  console.log(courseID)
  console.log(sectionID)
  console.log(materialID)
  console.log(question.question_id)
  console.log(youranswer)

  // useEffect(() =>{
  //   getMaterialByID().then((data) => setQuestion(data.material.questions))
  // },[])

  const handleSubmit =(e)=>{
    e.preventDefault()
    
    answerQuestion();
   
    
    console.log(answerQuestion)
    


  
    // setSubmit(true);
  }

  console.log(question)


  return (
    <div className='border'> 
      <div className='course-details'>
      <div className="course-img">
    
      <img src={img1} alt="Course Img" />
    </div>

    <form onSubmit={handleSubmit}>
    <div className="course-text">
      <h3>{question.question}</h3>


      <h6><input 
      type="radio"
      name="answer"
      onChange={(e) => setYourAnswer(e.target.value)}
      value="choice_1"
      />{question.choices[0].choice_1}</h6>

      <h6><input 
      type="radio"
      name="answer"
      onChange={(e) => setYourAnswer(e.target.value)}
      value="choice_2" 
      />{question.choices[0].choice_2}</h6>

      <h6><input 
      type="radio"
      name="answer"
      onChange={(e) => setYourAnswer(e.target.value)}
      value="choice_3" 
      />{question.choices[0].choice_3}</h6>

      <h6><input 
      type="radio"
      name="answer"
      onChange={(e) => setYourAnswer(e.target.value)}
      value="choice_4" 
      />{question.choices[0].choice_4}
      </h6>


    </div>

    <button>Submit</button>


    </form>
      <h2>{counter}</h2>
      

    
      </div>
      
    </div>
  );
}
