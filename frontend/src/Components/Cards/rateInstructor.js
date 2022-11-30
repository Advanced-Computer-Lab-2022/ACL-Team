
import "../css/rateInstructor.css"
import img1 from "../images/createCourse.png"
import React , {useState} from 'react'
import axios from 'axios'


export default function ReviewInstructor() {
const[_id,set_id] =useState('')
const[instructor_id,setInstructor_id] =useState('')
const[type,setType] =useState('')
const[reviewString,setreviewString] =useState('')

const ReviewInstructor = async () => {
  // console.log("boodaa")
  const res = await axios
  .post("http://localhost:3000/trainee/reviewInstructor", {
     _id:_id,instructor_id:instructor_id,type:type,reviewString:reviewString
    })
    .catch((err) => console.log(err));
    const data = await res.data;
  return data;
};
const handleSubmitt=(e)=>{
  e.preventDefault()
  console.log("yarab")


  

  ReviewInstructor().then((data) => console.log(data))
  console.log("hiiii")

}

  return (
    <div>
      <div className="rateInstructor_frame">
      
        <div className="rateInstructor_container">
          <div className="rateInstructor_header">
            <div className="rateInstructor-icon1">
              <img src={img1} alt="icon"/>
            </div>
            <div className="rateInstructor-title">
              <h1>Review Instructor </h1>
            </div>
          </div>
          <div className="rateInstructor_inputs">
            
            <div className="rateInstructor_instructorName">
              <input 
              onChange={(e) => setInstructor_id(e.target.value)}
            value={instructor_id}
              type = "textbox" placeholder=" Instructor Name"/>
            </div>
            
            <div className="rateInstructor_instructorName">
              <input 
              onChange={(e) => set_id(e.target.value)}
            value={_id}
              type = "textbox" placeholder=" user_id"/>
            </div>



            <div className="rateInstructor_instructorName">
              <input 
              onChange={(e) => setType(e.target.value)}
            value={type}
              type = "textbox" placeholder=" type"/>
            </div>

            <div className="rateInstructor_instructorName">
              <input 
              onChange={(e) => setreviewString(e.target.value)}
            value={reviewString}
              type = "textbox" placeholder=" your review"/>
            </div>
            <div className="rateInstructor_line1">
              <hr></hr>
            </div>


          </div>
          <div className="rateInstructor_button">
            <button className="Navy_Button" type="submit"> Rate Instructor </button>
          </div>
          
          

        </div>
        
     
      </div>
      

    </div>
  )
}
