import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import CourseCard from './Course/courseCard'

export default function Sidebar() {
  const [courses,setCourses] = useState(null)
  const [subject,setSubject] = useState('')
  const [price,setPrice] = useState(0)

  const getCourseBySubject = async () => {
    const res = await axios.post("http://localhost:3000/course/getCourseBySubject" , {
      subject:subject
    })
    .catch((err) => console.log(err));
    const data = await res.data;

    return data;
  };

  const getCourseByPrice = async () => {
    const res = await axios.post("http://localhost:3000/course/getCourseBySubject" , {
      subject:subject
    })
    .catch((err) => console.log(err));
    const data = await res.data;

    return data;
  };

  useEffect(() => {
    getCourseBySubject().then((data) => setCourses(data))
    getCourseByPrice().then((data) => setCourses(data))

  },[])



  return (
    <div>
      <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Filer</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        {/* <div>
                          <label>Price</label><br/>
                          <input type="number"
                          onChange={(e) => setPrice}
                          value={price}

                          className="form-control"

                          aria-describedby="emailHelp" 
                          placeholder="Enter a price to filer by"
                          ></input>
                        </div><hr/> */}
                        <div onSubmit={getCourseBySubject()}>
                          <label>Subject</label><br></br>
                          <input type="text" 
                          onChange={(e) => setSubject(e.target.value)}
                          value={subject}
    
                          className="form-control" 
     
                          aria-describedby="emailHelp" 
                          placeholder="Enter a subject to filer by"
                        />
                        <button onClick={getCourseBySubject()}>Submit</button>
                        </div><hr/>
                        <div>
                          <label>Rating</label><br></br>
                          <input type="radio" name="rating"/> &nbsp;5<br/>
                          <input type="radio" name="rating"/> &nbsp;3<br/>
                          <input type="radio" name="rating"/> &nbsp;1
                        </div><hr/>
                        <div>
                          <label>Duration</label><br></br>
                          <input type="radio" name="duration"/> &nbsp;60<br/>
                          <input type="radio" name="duration"/> &nbsp;30<br/>
                          <input type="radio" name="duration"/> &nbsp;15
                        </div>
                        
                    </li>
                </ul>
                <hr/>
            
            </div>
        </div>
        <div class="col py-3">
        {courses && courses.map((course) =>(
        <CourseCard key={course._id} course={course}/>
      ))} 
        </div>
    </div>
</div>
    </div>
  )
}


  
 
  
  
