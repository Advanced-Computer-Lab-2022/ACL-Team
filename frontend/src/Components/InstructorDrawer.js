import React from 'react'
import InstNavbar from './General/Navbar/instructorNavbar'

export default function InstructorDrawer() {
    
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


                        <div>
                          <label>Price</label><br/>
                          <input type="number"
                          

                          className="form-control"

                          aria-describedby="emailHelp" 
                          placeholder="Enter a price to filter by"
                          ></input>
                          <button className="button" >Submit</button>
                        </div><hr/>


                        <div>
                          <label>Category</label><br></br>
                          <input type="text" 
                          
                          className="form-control" 
     
                          aria-describedby="emailHelp" 
                          placeholder="Enter a subject to filter by"
                        />
                        <button className="button" >Submit</button>
                        </div><hr/>



                        <div>
                          <label>Ratings</label><br></br>
                          <input type="number" 
                          
    
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
        {/* <div class="col py-3">
        {courses && courses.map((course) =>(
        <CourseCard key={course._id} course={course}/>
      ))} 
        </div> */}
    </div>
</div>
    </div>
  )
}
