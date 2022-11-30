import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CourseCard from '../Components/Cards/courseCard';

//import InstructorComp from '../Components/Instructor/instructorComponent'
export default function InstructorPage(){
  const [InstCourses,setInstCourses] = useState([]);

  const params = new URLSearchParams(Window.location.search);
  // const instId = params.get('user._id');
  const instId = '6385171ad519acc29b21ec0b';
  console.log(instId);


  const getInstructorCourses = async () =>{
    await axios.get(`http://localhost:3000/instructor/courseShow?_id=${instId}`)
    .then(
      (res) => {
        const courses = res.data;
        setInstCourses(InstCourses)
        return courses;
        
      }
    )
  }

  useEffect(() => {
    getInstructorCourses().then((courses) => setInstCourses(courses));
  },[]);
  
  
  return (
    <div>
      {InstCourses.map((InstCourse) => (
        <CourseCard course={InstCourse}/>
    ))}
    </div>
  )
}
