import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import QuizResultCard from '../Components/Cards/quizResultCard';
import TraineeNavbar from '../Components/General/Navbar/TraineeNavbar';
import NavyButton from '../Components/General/Buttons/navyButton';

export default function QuizResultsPage() {


    const {courseID} = useParams()
    const {sectionID} = useParams()
    const { materialID } = useParams();
    const {traineeID} = useParams();

    const [questions, setQuestion] = useState([]);
    const [quizGrade,setQuizGrade] = useState([]);

    const getMaterialByID = async () => {
        const res = await axios.get(`http://localhost:3000/lib/CourseMaterial?material_id=${materialID}`)
        .catch((err) => console.log(err));
        const data = await res.data;
        return data;
        
      };
    
      

      const getQuizResult = async () => {
        const res = await axios.post("http://localhost:3000/trainee/quizGrade" ,{
          user_id: traineeID, course_id: courseID, section_id: sectionID,material_id: materialID
        }) 
        .catch((err) => console.log(err));
        const data = await res.data;
        return data;
    
      };

      useEffect(() =>{
        getMaterialByID().then((data) => setQuestion(data.material.questions))
        
      },[])

      useEffect(() =>{
        getQuizResult().then((data) => setQuizGrade(data.grade))
      },[])


      console.log(courseID)
      console.log(traineeID)
      console.log(sectionID)
      console.log(materialID)

      console.log("Your quiz grade: " + quizGrade);

  return (
    <div>
        <TraineeNavbar/>
        <h1>{quizGrade}</h1>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h1>&nbsp;&nbsp;Quiz Model Answer</h1>
        {questions && questions.map((question) =>(
          <QuizResultCard question={question}/>
        ))}

        <Link to={`/trainee/${traineeID}`}>
            <button>Done</button>
        </Link>

    </div>
    
  )
}
