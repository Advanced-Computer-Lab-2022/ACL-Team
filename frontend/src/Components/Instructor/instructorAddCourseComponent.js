import React, { useState } from 'react';
import axios from 'axios'

  const InstructorAddCourseComponent = () => {
    const[title,setTitle] =useState('')
    const[price,setPrice] =useState('')
    const[category,setCategory] =useState('')
    const[subject,setSubject] =useState('')
    const[instructor_id,setInstructorId] =useState('')
    const[totalHours,setTotalhours] =useState('')
    const[summary,setSummary] =useState('')


    const addCourse = async () => {
        console.log("boodaa")
        const res = await axios
          .post("http:localhost:3000/instructor/addCourse" , {
            title:title,price:price,category:category,subject:subject,instructor_id:instructor_id,totalHours:totalHours,summary:summary
          })
          .catch((err) => console.log(err));
        const data = await res.data
        console.log(data)
        return data;
      };
      const handleSubmitt=(e)=>{
        e.preventDefault()
        console.log("boodaa33333")
        

        addCourse().then((data) => console.log(data))
      }
  return (
    <div>
     <form onSubmit={handleSubmitt}>
  <div class="form-group">
    <label for="exampleInputEmail1">Course Title</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Please enter the course title"
    onChange={(e) => setTitle(e.target.value)}
    value={title}/>
    
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">price</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password"
    onChange={(e) => setPrice(e.target.value)}
    value={price}/>
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">category</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="A reasonable price is better"
    onChange={(e) => setCategory(e.target.value)}
    value={category}/>
    <small id="emailHelp" class="form-text text-muted">Can always be changed later.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">subject </label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Minumum 20 words"
    onChange={(e) => setSubject(e.target.value)}
    value={subject}/>

  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">instructor_id </label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Minumum 20 words"
    onChange={(e) => setInstructorId(e.target.value)}
    value={instructor_id}/>

  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">totalHours </label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Minumum 20 words"
    onChange={(e) => setTotalhours(e.target.value)}
    value={totalHours}/>

  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">summary </label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Minumum 20 words"
    onChange={(e) => setSummary(e.target.value)}
    value={summary}/>

  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

    </div>
  )
}
export default InstructorAddCourseComponent;