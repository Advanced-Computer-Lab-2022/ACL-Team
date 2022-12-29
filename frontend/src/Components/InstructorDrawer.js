import React from 'react'
import InstNavbar from './General/Navbar/instructorNavbar'
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import InstructorCourseCard from './Instructor/instructorCourseCard';

export default function InstructorDrawer() {
  const [instCourses, setInstCourses] = useState([]);
  const [instructor, setInstructor] = useState([]);
  const [price,setPrice] = useState();
  const [category,setCategory] = useState();
  const {instructorID} = useParams();

  const getInstructorCourses = async () => {
    const res = await axios.get(`http://localhost:3000/instructor/courseShow?_id=${instructorID}`)
    .catch((err) => console.log(err));
    const data = await res.data;
    
    return data;
    
  };
  
  useEffect(() =>{
    getInstructorCourses().then((data) => setInstCourses(data))

  },[])
  
  const getInstructor= async () => {
    const res = await axios.get(`http://localhost:3000/instructor/getInstructor?_id=${instructorID}`)
    .catch((err) => console.log(err));
    const data = await res.data;
    
    return data;
    
  };

  useEffect(() =>{
    getInstructor().then((data) => setInstructor(data))

  },[])

  const getCoursesByPrice = async () => {
    const res = await axios.post("http://localhost:3000/instructor/filterByPrice" , {
      instructor_id:instructorID , price:price
    })
    .catch((err) => console.log(err));
    const data = await res.data;

    return data;
  }
  useEffect(() => {
    getCoursesByPrice().then((data) => setInstCourses(data))
  },[price])

  const getCoursesByCategory = async () => {
    const res = await axios.post("http://localhost:3000/instructor/filterByCategory" , {
      instructor_id:instructorID , category:category
    })
    .catch((err) => console.log(err));
    const data = await res.data;

    return data;
  }

  useEffect(() => {
    getCoursesByCategory().then((data) => setInstCourses(data))
  },[category])
  return (
    <div>
      <InstNavbar/>
      <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Filter</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">


                        <div onSubmit={getCoursesByPrice()}>
                          <label>Price</label><br/>
                          <input type="number"
                          onChange={(e) => setPrice(e.target.value)}
                          value={price}

                          className="form-control"

                          aria-describedby="emailHelp" 
                          placeholder="Enter a price to filter by"
                          ></input>
                          <button className="button" >Submit</button>
                        </div><hr/>


                        <div onSubmit={getCoursesByCategory()}>
                          <label>Category</label><br></br>
                          <input type="text" 
                          onChange={(e) => setCategory(e.target.value)}
                          value={category}
                          className="form-control" 
     
                          aria-describedby="emailHelp" 
                          placeholder="Enter a subject to filter by"
                        />
                        <button className="button" >Submit</button>
                        </div><hr/>
                        
                    </li>
                </ul>
                <hr/>
            
            </div>
        </div>
        <div class="col py-3">
          {instCourses && instCourses.map((Course) =>(
              
              <InstructorCourseCard course={Course} instructor={instructor}/>
            ))}
        </div>
    </div>
</div>
    </div>
  )
}
