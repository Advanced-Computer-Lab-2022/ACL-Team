import React , {useState} from 'react'
import axios from 'axios'
import "../css/instructorAddCourseComponent.css"
import img1 from "../images/createCourse.png"






export default function InstructorAddCourseComponent() {
 const[name,setName] =useState('')
const[title,setTitle] =useState('')
const[price,setPrice] =useState('')
const[coursePreviewUrl,SetVideo] =useState('')
const[summary,setSummary] =useState('')
 const[category,setCategory] =useState('')
 const[instructor_id,setinstructor_id] =useState('')
const instructorAddCourse = async () => {
  // console.log("boodaa")
  const res = await axios
    .post("http://localhost:3000/instructor/addCourse", {
      title:title,price:price,category:category,instructor_id:instructor_id,summary:summary,coursePreviewUrl:coursePreviewUrl,
    })
    .catch((err) => console.log(err));
    const data = await res.data;
  return data;
};
const handleSubmitt=(e)=>{
  e.preventDefault()
  console.log("yarab")


  

  instructorAddCourse().then((data) => console.log(data))
  console.log("hiiii")

}

  return (
    <div>
      
      <div className="instructor-addCourse">
        <div className="instructor-icon1">
          <img src={img1} alt="icon"/>
        </div>
        <div className="instructor-title">
          <h1>Create Course </h1>
        </div>

        <form onSubmit={handleSubmitt}>

         <div className="instructor_name">
          <input 
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="textbox" placeholder='Course Instructor Name'/>
        </div> 
        <div className="instructor_LastName">
          <input 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          type="textbox" placeholder='Course Title'/>
        </div>
        <div className="line1">
          <hr></hr>
        </div>
        <div className="instructor_price">
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price} 
          type="textbox" placeholder='Price'/>
        </div>
        <div className="instructor_URL">
          <input
            onChange={(e) => SetVideo(e.target.value)}
            value={coursePreviewUrl}
           type="textbox" placeholder='Course Preview Video Url'/>
        </div>
         <div className="instructor_category">
          <input
            onChange={(e) => setCategory(e.target.value)}
            value={category} 
          type="textbox" placeholder='category'/>
        </div> 

        <div className="instructor_id">
          <input
            onChange={(e) => setinstructor_id(e.target.value)}
            value={instructor_id} 
          type="textbox" placeholder='id'/>
        </div>
        <div className="line2">
          <hr></hr>
        </div>

        <div className="line3">
          <hr></hr>
        </div>
        <div className="instructor_Summary">
          <input 
            onChange={(e) => setSummary(e.target.value)}
            value={summary}
          type="textbox" placeholder='Course Summary'/>
        </div>
        <div className="instructor_Button">
          <button className="Navy_Button" type="submit"> Create Course </button>

        </div>

        </form>
        

      </div>
     
    </div>
  )
}
