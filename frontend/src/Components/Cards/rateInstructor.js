
import "../css/rateInstructor.css"
import img1 from "../images/createCourse.png"
import React , {useState} from 'react'
import axios from 'axios'
import Rating from "./rating"

export default function RateInstructor() {
  const[name,setName] =useState('')
const[rating,setRating] =useState('')
const rateInstructor = async () => {
  // console.log("boodaa")
  const res = await axios
    .post("http://localhost:3000/trainee/rateCourse", {
     name:name,rating:rating
    })
    .catch((err) => console.log(err));
    const data = await res.data;
  return data;
};
const handleSubmitt=(e)=>{
  e.preventDefault()
  console.log("yarab")


  

  rateInstructor().then((data) => console.log(data))
  console.log("hiiii")

}

  return (
    <div>
      <div className="rateInstructor_frame">
      <form onSubmit={handleSubmitt}>
        <div className="rateInstructor_container">
          <div className="rateInstructor_header">
            <div className="rateInstructor-icon1">
              <img src={img1} alt="icon"/>
            </div>
            <div className="rateInstructor-title">
              <h1>Rate Instructor </h1>
            </div>
          </div>
          <div className="rateInstructor_inputs">
            
            <div className="rateInstructor_instructorName">
              <input 
              onChange={(e) => setName(e.target.value)}
            value={name}
              type = "textbox" placeholder=" Instructor Name"/>
            </div>
            
            <div className="rateInstructor_line1">
              <hr></hr>
            </div>
            <div className="rateInstructor_rating">
              <input
               onChange={(e) => setRating(e.target.value)}
            value={rating}

               type = "textbox" placeholder="Rating"/>
            </div>

          </div>
          <div className="rateInstructor_button">
            <button className="Navy_Button" type="submit"> Rate Instructor </button>
          </div>
          
          

        </div>
        
        </form>
      </div>
      

    </div>
  )
}
