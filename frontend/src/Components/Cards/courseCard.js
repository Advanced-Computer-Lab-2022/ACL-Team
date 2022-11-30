import React from 'react';
import { useState , useEffect} from 'react';
import axios from 'axios';
import "../css/courseCard.css"
import img1 from "../images/Course Image.png"
import img2 from "../images/Clock Icon.png"
import img3 from "../images/Lesson Icon.png"
import img4 from "../images/Level Icon.png"

export default function CourseCard({course}) {
  const [instructorName,setInstructorName] = useState('');

  const getInstructor = async () => {
    const res = await axios.get("http://localhost:3000/instructor/getInstructor" , {_id: course.instructor_id})
    .catch((err) => console.log(err));
    const data = await res.data;
    
    return data;
    
  };

  useEffect(() =>{
    
    getInstructor().then((data) => setInstructorName(data.name))

  },[])

console.log(course.instructor_id); 
  return (
    <div className="course-details"> 

     <div className="course-img">
        <img src={img1} alt="Course Img" />
     </div>

     <div className="course-text">
        <h3>{course.title}</h3>
        <h6><label id="light-font">by {course.instructor_id}</label></h6>
        <p>
          {course.summary}
        </p>
     </div>

     <div className="course-info">
      <label><img src={img2} alt=""/>&nbsp;&nbsp;<span id="bold">{course.totalHours}</span>&nbsp;hours</label>
      <label><img src={img3} alt=""/>&nbsp;&nbsp;<span id="bold">31</span>&nbsp;lessons</label>
      <label><img src={img4} alt=""/>&nbsp;&nbsp;<span id="bold">{course.level}</span>&nbsp;Level</label>
      <label><img src={img3} alt=""/>&nbsp;&nbsp;<span id="bold">{course.price}</span>&nbsp;EGP</label>

     </div>
    </div>
  );
}
