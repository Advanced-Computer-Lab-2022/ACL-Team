import React, { useState , useEffect} from 'react'
import axios from 'axios';



export default function QuestionCard2({question_id}) {

  const [question,setQuestion] = useState([]);

  const getQuestionByID = async () => {
    const res = await axios.get(`http://localhost:3000/lib/Question?_id=${question_id}`)
    .catch((err) => console.log(err));
    const data = await res.data;
    return data;

  };

  useEffect(() =>{
    getQuestionByID().then((data) => setQuestion(data))
  },[])

  // console.log(question.choices[0].choice_1);


  return (
    <div>
        <h2>{question.questionTitle}</h2>
        <h2>Q: {question.question}</h2>
        {/* <h2>a: {question.choices[0].choice_1}</h2>
        <h2>b: {question.choices[0].choice_2}</h2> 
        <h2>c: {question.choices[0].choice_3}</h2>
        <h2>d: {question.choices[0].choice_4}</h2> <hr/> */}
    </div>
  )
}
