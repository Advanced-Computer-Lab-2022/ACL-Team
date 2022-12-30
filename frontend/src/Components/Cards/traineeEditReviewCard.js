
import "../css/rateInstructor.css"
import img1 from "../images/createCourse.png"
import React , {useState} from 'react'
import axios from 'axios'


export default function TraineeEditReviewCard({reviewID}) {

const[type,setType] =useState('')
const[reviewString,setreviewString] =useState('')

const EditReview = async () => {
  const res = await axios
  .post("http://localhost:3000/trainee/editInstructorReview", {
    review_id: reviewID , type: type, review: reviewString
    })
    .catch((err) => console.log(err));
    const data = await res.data;
  return data;
};

const handleSubmitt=(e)=>{
  e.preventDefault()
  
  EditReview();

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
              <h1>Edit Review</h1>
            </div>
          </div>

          <form onSubmit={handleSubmitt} >
          <div className="rateInstructor_inputs">
            

          <div className="rateInstructor_instructorName">
              <input 
              onChange={(e) => setType(e.target.value)}
              value={type}
              type = "textbox" placeholder=" type"/>
        </div><br/>

            <div className="rateInstructor_instructorName">
              <input 
              onChange={(e) => setreviewString(e.target.value)}
              value={reviewString}
              type = "textbox" placeholder="Review..."/>
            </div>
            




            

          </div>
          <div className="rateInstructor_button">
            <button className="Navy_Button" type="submit"> Submit </button>
          </div>
          </form>
          
          
          

        </div>
        
     
      </div>
      

    </div>
  )
}
