import React from 'react';
import { useState , useEffect} from 'react';
import axios from 'axios';
import "../css/reportsCard.css"
import img1 from "../images/Course Image.png"

export default function ReposrtsCard({issue}) {

    const setIssueToPending = async () => {
        const res = await axios.post("http://localhost:3000/admin/markIssueAsPending",{_id:issue._id,issue_id:issue._id,
        comment:issue.comment})
        .catch((err) => console.log(err));
        const data = await res.data;
        
        return data;
        
      };

      const setIssueToResolved = async () => {
        const res = await axios.post("http://localhost:3000/admin/markIssueAsResolved",{_id:issue._id})
        .catch((err) => console.log(err));
        const data = await res.data;
        
        return data;
        
      };

    const handleSetResolved=(e)=>{
        e.preventDefault()

        setIssueToResolved();
     
    }

    const handleSetPending=(e)=>{
        e.preventDefault()

        setIssueToPending();
     
    }

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

    <ul className="buttons-resolved-pending">
      <li><button onClick={handleSetPending}>Mark as Pending</button></li>
      <li><button onClick={handleSetResolved}>Mark as Resolved</button></li>
    </ul>

    
    
 </div>

      </div>

    </div>
  );
}
