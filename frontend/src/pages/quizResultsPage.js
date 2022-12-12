import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import QuizResultCard from '../Components/Cards/quizResultCard';
import Navbar from '../Components/General/Navbar/navbar';
import NavyButton from '../Components/General/Buttons/navyButton';

export default function QuizResultsPage() {

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

      console.log(questions)

  return (
    <div>
        <Navbar/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h1>&nbsp;&nbsp;Quiz Model Answer</h1>
        {questions && questions.map((question) =>(
          <QuizResultCard question={question}/>
        ))}

        <Link to={`/trainee`}>
            <button>Done</button>
        </Link>

    </div>
    
  )
}
