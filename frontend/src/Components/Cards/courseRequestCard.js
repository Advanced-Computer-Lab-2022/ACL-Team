import React from 'react';
import { useState , useEffect} from 'react';
import axios from 'axios';
import "../css/reportsCard.css"
import img1 from "../images/Course Image.png"

export default function CoureRequest({request}) {

    const [course,setCourse] = useState([]);
    const [trainee,setTrainee] = useState([]);

    const getCourseById = async () => {
        const res = await axios.get(`http://localhost:3000/course/?_id=${request.course_id}`)
        .catch((err) => console.log(err));
        const data = await res.data;
        
        return data;
        
      };

      useEffect(() =>{
        getCourseById().then((data) => setCourse(data))
      },[])

      const getTraineeById = async () => {
        const res = await axios.get(`http://localhost:3000/trainee/getTrainee?_id=${request.requester_id}`)
        .catch((err) => console.log(err));
        const data = await res.data;
       
        return data;
        
      };
    
      useEffect(() =>{
        getTraineeById().then((data) => setTrainee(data))
      },[])

      const handleAccept=(e)=>{
        e.preventDefault()


     
    }


  return (
    <div className='border'> 
      <div className='course-details'>
      <div className="course-img">
    
    <img src={img1} alt="Course Img" />
 </div>

 <div className="course-text">

    <h4>{course.title}</h4>
    <h6><label id="light-font">{course.category}</label></h6>

    <h6>status: <label id="light-font">{request.status}</label></h6>
    <h6>Requester: <label id="light-font">{trainee.name}</label></h6>

    <ul className="buttons-resolved-pending2">
        <li><button onClick={handleAccept}>Accept</button></li>
        <li><button id="Deny-red">Deny</button></li>
    </ul>

 </div>

      </div>

    </div>
  );
}
