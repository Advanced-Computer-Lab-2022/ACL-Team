import React from 'react';
import { useState , useEffect} from 'react';
import axios from 'axios';
import "../css/courseCard.css"
import img1 from "../images/Course Image.png"

export default function ReposrtsCard({issue}) {

    // const setIssueToPending = async () => {
    //     const res = await axios.get("http://localhost:3000/admin/resolvedIssues")
    //     .catch((err) => console.log(err));
    //     const data = await res.data;
        
    //     return data;
        
    //   };

    //   useEffect(() =>{
    //     getresolvedissues().then((data) => setResolvedIssues(data.issues))
    //   },[])

    // const handleSetPending=(e)=>{
    //     e.preventDefault()
     
    // }

  return (
    <div className='border'> 
      <div className='course-details'>
      <div className="course-img">
    
    <img src={img1} alt="Course Img" />
 </div>

 <div className="course-text">

    <h5>Issue: <label id="light-font">{issue.issue}</label></h5>

    <h6>Type: <label id="light-font">{issue.type}</label></h6>
    <p>
      {issue.resolverComment}
    </p>

    {/* <button onClick={handleSetPending}>Mark as Pending</button> */}
 </div>

      </div>

    </div>
  );
}
