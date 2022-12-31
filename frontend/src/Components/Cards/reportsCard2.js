import React from 'react';
import { useState , useEffect} from 'react';
import axios from 'axios';
import "../css/reportsCard.css"
import img1 from "../images/Course Image.png"

export default function ReportsCard2({issue}) {

  return (
    <div className='border'> 
      <div className='course-details'>
      <div className="course-img">
    
    <img src={img1} alt="Course Img" />
 </div>

 <div className="course-text">

    <h5>Issue: <label id="light-font">{issue.issue}</label></h5>

    <h6>Type: <label id="light-font">{issue.type}</label></h6>
    <h6>Status: <label id="light-font">{issue.status}</label></h6>
    <p>
      {issue.resolverComment}
    </p>    
    
 </div>

      </div>

    </div>
  );
}
