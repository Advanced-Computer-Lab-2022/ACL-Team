
import img1 from "../images/createCourse.png"
import React , {useState} from 'react'
import axios from 'axios'


export default function EditEmail() {
const[_id,set_id] =useState('')
const[email,setEmail] =useState('')
const[newEmail,setNewEmail] =useState('')

const changeEmail = async () => {
  // console.log("boodaa")
  const res = await axios
    .post("http://localhost:3000/instructor/changeEmail", {
     _id:_id,email:email,newEmail:newEmail
    })
    .catch((err) => console.log(err));
    const data = await res.data;
  return data;
};
const handleSubmitt=(e)=>{
  e.preventDefault()
  console.log("yarab")


  

  changeEmail().then((data) => console.log(data))
  console.log("hiiii")

}

  return (
    <div>
      <div className="rateCourse_frame">
        <div className="rateCourse_container">
          <div className="rateCourse_header">
            <div className="rateCourse-icon1">
              <img src={img1} alt="icon"/>
            </div>
            <div className="rateCourse-title">
              <h1>Edit Email</h1>
            </div>
          </div>
          <form onSubmit={handleSubmitt}>
          <div className="rateCourse_inputs">
            <div className="rateCourse_instructorName">
              <input
              onChange={(e) => set_id(e.target.value)}
              value={_id}
               type = "textbox" placeholder="instructor_id"/>
            </div>
            <div className="rateCourse_instructorName">
              <input 
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type = "textbox" placeholder="Old Email"/>
            </div><hr/>
            {/* <div className="rateCourse_courseTitle">
              <input type = "textbox" placeholder="Course Title"/>
            </div> */}
            {/* <div className="rateCourse_line1">
              <hr></hr>
            </div> */}
            <div className="rateCourse_rating">
              <input 
              onChange={(e) => setNewEmail(e.target.value)}
              value={newEmail}
              type = "textbox" placeholder="New Email"/>
            </div>

          </div>
          <div className="rateCourse_button">
            <button className="Navy_Button" type="submit"> Submit </button>
          </div>
          </form>

        </div>
      </div>

    </div>
  )
}
