import React from 'react';
import { useState , useEffect} from 'react';
import axios from 'axios';
import "../css/courseCard.css"
import img1 from "../images/Course Image.png"
import img2 from "../images/Clock Icon.png"
import img3 from "../images/Lesson Icon.png"
import img4 from "../images/Level Icon.png"
import { Link } from 'react-router-dom';

export default function ReposrtsCard({issue}) {
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
 </div>

      </div>

    </div>
  );
}
