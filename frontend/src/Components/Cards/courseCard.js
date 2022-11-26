import React from 'react';
import "../css/courseCard.css"
import img1 from "../images/Course Image.png"
import img2 from "../images/Clock Icon.png"
import img3 from "../images/Lesson Icon.png"
import img4 from "../images/Level Icon.png"

export default function CourseCard({course}) {
  const x = "Mazen Mahmoud Hejazy"

  return (
    <div className="course-details"> 

     <div className="course-img">
        <img src={img1} alt="Course Img" />
     </div>

     <div className="course-text">
        <h3>React-The Comlpete Guide</h3>
        <h6><label id="light-font">by {x} </label></h6>
        <p>
          Dive in and learn React 16.8 from scratch! Learn Reactjs, Hooks, Redux, 
          React Routing, Animations, Next.js and way more!
        </p>
     </div>

     <div className="course-info">
      <label><img src={img2} alt=""/>&nbsp;&nbsp;<span id="bold">42</span>&nbsp;hours</label>
      <label><img src={img3} alt=""/>&nbsp;&nbsp;<span id="bold">31</span>&nbsp;lessons</label>
      <label><img src={img4} alt=""/>&nbsp;&nbsp;<span id="bold">Meduim</span>&nbsp;Level</label>
      <label><img src={img3} alt=""/>&nbsp;&nbsp;<span id="bold">2000</span>&nbsp;EGP</label>

     </div>
    </div>
  );
}
