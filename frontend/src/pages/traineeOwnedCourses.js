import React, { useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import CourseCard from '../Components/Cards/courseCard';
import TraineeCourseCard from '../Components/Cards/traineeCourseCard';

export default function TraineeOwnedCourses() {

    const {traineeID} = useParams();

    const [trainee,setTrainee] = useState([]);
    const [traineeCourses,setTraineeCourses] = useState([]);

    const getTraineeById = async () => {
        const res = await axios.get(`http://localhost:3000/trainee/getTrainee?_id=${traineeID}`)
        .catch((err) => console.log(err));
        const data = await res.data;
       
        return data;
        
      };
    
      useEffect(() =>{
        getTraineeById().then((data) => setTrainee(data))
        getTraineeById().then((data) => setTraineeCourses(data.ownedCourses))
      },[])

    //   console.log(trainee)
    //   console.log(traineeCourses)

  return (
    <div>

        {traineeCourses && traineeCourses.map((course) =>(
            // <p>{course.course_id}</p>
            <TraineeCourseCard course={course} traineeId={ traineeID }/>
        
        
        ))} 

        

    </div>
  )
}
