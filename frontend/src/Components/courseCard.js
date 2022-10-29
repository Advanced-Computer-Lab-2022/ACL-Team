import React from 'react';


export default function CourseCard({course}) {

  return (
    <div className="course-details">  
      <h4>{course.title}</h4>
      <p><strong>Price: </strong>{course.price}</p>
      <p><strong>Ratings: </strong>{course.ratings}</p>
      <p><strong>Total Hours: </strong>{course.totalHours}</p>
      <p><strong>Summary: </strong>{course.summary}</p>
      <p>{course.createdAt}</p>
    </div>
  );
}
