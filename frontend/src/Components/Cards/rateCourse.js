
import "../css/rateCourse.css"
import React , {useState} from 'react'
import axios from 'axios'
import img1 from "../images/createCourse.png"

export default function RateCourse() {
  const[course_id,setCourseID] =useState('')
  const[user_id,setUser_id] =useState('')
  const[rating,setRating] =useState('')
const rateCourse = async () => {
  // console.log("boodaa")
  const res = await axios
    .post("http://localhost:3000/trainee/rateCourse", {
     user_id:user_id,course_id:course_id,rating:rating
    })
    .catch((err) => console.log(err));
    const data = await res.data;
  return data;
};
const handleSubmitt=(e)=>{
  e.preventDefault()
  console.log("yarab")


  

  rateCourse().then((data) => console.log(data))
  console.log("hiiii")

}
  return (
    <div>
      <div className="rateCourse_frame">
        <form onSubmit={handleSubmitt}>
        <div className="rateCourse_container">
          <div className="rateCourse_header">
            <div className="rateCourse-icon1">
              <img src={img1} alt="icon"/>
            </div>
            <div className="rateCourse-title">
              <h1>Rate Course </h1>
            </div>
          </div>
          <div className="rateCourse_inputs">
            <div className="rateCourse_instructorName">
              <input onChange={(e) => setCourseID(e.target.value)}
              value={course_id}
              type = "textbox" placeholder="Course ID"/>
            </div>
            <div className="rateCourse_instructorName">
              <input onChange={(e) => setUser_id(e.target.value)}
            value={user_id}
              type = "textbox" placeholder="User ID"/>
            </div>
            <div className="rateCourse_courseTitle">
              <input type = "textbox" placeholder="Course Title"/>
            </div>
            <div className="rateCourse_line1">
              <hr></hr>
            </div>
            <div className="rateCourse_rating">
              <input onChange={(e) => setRating(e.target.value)}
            value={rating}
              type = "textbox" placeholder="Rating"/>
            </div>

          </div>
          <div className="rateCourse_button">
            <button className="Navy_Button" type="submit"> Rate Course </button>
          </div>

        </div>
        </form>
      </div>

    </div>
  )
}
