import React from 'react';
import { useState , useEffect} from 'react';
import axios from 'axios';
import "../css/courseCard.css"
import img1 from "../images/Course Image.png"
import img2 from "../images/Clock Icon.png"
import img3 from "../images/Lesson Icon.png"
import img4 from "../images/Level Icon.png"
import { Link } from 'react-router-dom';
import ReportIssueCard from './reportIssueCard';

export default function TraineeCourseCard({course, traineeId}) {
  const [traineeCourse,setCourse] = useState([]);
  const [instructorName,setInstructorName] = useState('');
  const[isOpen,setIsOpen] = useState(false);

  const getCourseByID = async () => {
    const res = await axios.get(`http://localhost:3000/lib/Course?_id=${course.course_id}`)
    .catch((err) => console.log(err));
    const data = await res.data;
    
    return data;
    
  };

  useEffect(() =>{
    
    getCourseByID().then((data) => setCourse(data))

  },[]);

//   const getInstructor = async () => {
//     const res = await axios.get(`http://localhost:3000/instructor/getInstructor?_id=${traineeCourse.instructor_id}`)
//     .catch((err) => console.log(err));
//     const data = await res.data;
    
//     return data;
    
//   };

//   useEffect(() =>{
    
//     getInstructor().then((data) => setInstructorName(data.name))

//   },[]);



const handleReportSubmit=(e)=>{
    e.preventDefault()

    if(setIsOpen){
        setIsOpen(true)
    }
    else{
        setIsOpen(false)
    }
  }

console.log(traineeCourse)
console.log(traineeCourse.instructor_id)

  return (
    <div className='border'> 
      <div className='course-details'>
      <div className="course-img">
    
    <img src={img1} alt="Course Img" />
 </div>

 <div className="course-text">
    <Link to={`/trainee/sectionPage/${traineeCourse._id}`}>
      <h3>{traineeCourse.title}</h3>
    </Link>

    <h6><label id="light-font">by Mazen</label></h6>
    <p>
      {traineeCourse.summary}
    </p>

    <button onClick={handleReportSubmit}>
        Report Course   
    </button>

    {isOpen && <ReportIssueCard traineeID={traineeId} course_id={traineeCourse._id}/>}

 </div>

 <div className="course-info">
  <label><img src={img2} alt=""/>&nbsp;&nbsp;<span id="bold">{traineeCourse.totalHours}</span>&nbsp;hours</label>
  <label><img src={img3} alt=""/>&nbsp;&nbsp;<span id="bold">31</span>&nbsp;lessons</label>
  <label><img src={img4} alt=""/>&nbsp;&nbsp;<span id="bold">{traineeCourse.level}</span>&nbsp;Level</label>
  <label><img src={img3} alt=""/>&nbsp;&nbsp;<span id="bold">{traineeCourse.price}</span>&nbsp;EGP</label>
  

 </div>
      </div>

    </div>
  );
}
