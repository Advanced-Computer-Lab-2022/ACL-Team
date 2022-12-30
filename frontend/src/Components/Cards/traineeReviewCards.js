import React from 'react';
import { useState , useEffect} from 'react';
import axios from 'axios';
import "../css/reportsCard.css"
import { Link } from 'react-router-dom';
import img1 from "../images/Course Image.png"

export default function TraineeReview({review}) {

    const [reviewed,setReviewed] = useState([]);

    const getReviewed= async () => {
        const res = await axios.get(`http://localhost:3000/instructor/getInstructor?_id=${review.reviewed_id}`)
        .catch((err) => console.log(err));
        const data = await res.data;
        
        return data;
        
      };
    
      useEffect(() =>{
        getReviewed().then((data) => setReviewed(data))
    
      },[])

      const deleteReview = async () => {
        const res = await axios.post("http://localhost:3000/trainee/deleteInstructorReview", {review_id: review._id})
        .catch((err) => console.log(err));
        const data = await res.data;
       
        return data;
        
      };

    const handleDelete=(e)=>{
        e.preventDefault()

        deleteReview()
    }




  return (
    <div className='border'> 
      <div className='course-details'>
      <div className="course-img">
    
    <img src={img1} alt="Course Img" />
 </div>

 <div className="course-text">

    <h4>{review.review}</h4>
    <h6><label id="light-font"></label></h6>

    <h6>Review Type: <label id="light-font">{review.type}</label></h6>
    <h6>Instructor: <label id="light-font">{reviewed.name}</label></h6>

    <ul className="buttons-resolved-pending2">
        <li><button><Link to={`/trainee/editMyReview/${review._id}`}>Edit</Link></button></li>
        <li><button id="Deny-red" onClick={handleDelete}>Delete</button></li>
    </ul>

 </div>

      </div>

    </div>
  );
}
