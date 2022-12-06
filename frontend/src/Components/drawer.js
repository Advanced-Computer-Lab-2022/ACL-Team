import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import CourseCard from './Cards/courseCard'

export default function Drawer() {
  const [courses,setCourses] = useState(null)
  const [category,setCategory] = useState('')
  const [price,setPrice] = useState(null)
  const [rating,setRating] = useState(null)

  const getCourseByCategory = async () => {
    const res = await axios.post("http://localhost:3000/course/getCourseByCategory" , {
      category:category
    })
    .catch((err) => console.log(err));
    const data = await res.data;

    return data;
  };

  const getCourseByPrice = async () => {
    const res = await axios.post("http://localhost:3000/course/getCoursesByPrice" , {
      price:price
    })
    .catch((err) => console.log(err));
    const data = await res.data;

    return data;
  };

  const getCourseByRating = async () => {
    const res = await axios.post("http://localhost:3000/course/getCoursesByRating" , {
      rating:rating
    })
    .catch((err) => console.log(err));
    const data = await res.data;

    return data;
  };

  const getCourses = async () => {
    console.log("boodaa")
    const res = await axios.get("http://localhost:3000/course/getAllCourses")
    .catch((err) => console.log(err));
    const data = await res.data;
    
    return data;
    
  };

  useEffect(() =>{
    getCourses().then((data) => setCourses(data))

  },[])

  useEffect(() => {
    getCourseByCategory().then((data) => setCourses(data))
  },[category])

  useEffect(() => {
    getCourseByPrice().then((data) => setCourses(data))
  },[price])

  



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


                        <div onSubmit={getCourseByPrice()}>
                          <label>Price</label><br/>
                          <input type="number"
                          onChange={(e) => setPrice(e.target.value)}
                          value={price}

                          className="form-control"

                          aria-describedby="emailHelp" 
                          placeholder="Enter a price to filer by"
                          ></input>
                          <button className="button" onClick={getCourseByPrice()}>Submit</button>
                        </div><hr/>


                        <div onSubmit={getCourseByCategory()}>
                          <label>Category</label><br></br>
                          <input type="text" 
                          onChange={(e) => setCategory(e.target.value)}
                          value={category}
    
                          className="form-control" 
     
                          aria-describedby="emailHelp" 
                          placeholder="Enter a subject to filer by"
                        />
                        <button className="button" onClick={getCourseByCategory()}>Submit</button>
                        </div><hr/>



                        <div onSubmit={getCourseByRating()}>
                          <label>Ratings</label><br></br>
                          <input type="number" 
                          onChange={(e) => setRating(e.target.value)}
                          value={rating}
    
                          className="form-control" 
     
                          aria-describedby="emailHelp" 
                          placeholder="Enter a subject to filer by"
                        />
                        <button className="button" onClick={getCourseByRating()}>Submit</button>
                        </div><hr/>
                        
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


  
 
  
  
