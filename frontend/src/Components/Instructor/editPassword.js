
import img1 from "../images/createCourse.png"
import React , {useState} from 'react'
import axios from 'axios'

export default function EditPassword() {

const[email,setEmail] =useState('')
const[oldPassword,setOldPassword] =useState('')
const[newPassword,setNewPassword] =useState('')

const changePassword = async () => {
  // console.log("boodaa")
  const res = await axios
    .post("http://localhost:3000/login/changePassword", {
     email:email,oldPassword:oldPassword,newPassword:newPassword
    })
    .catch((err) => console.log(err));
    const data = await res.data;
  return data;
};
const handleSubmitt=(e)=>{
  e.preventDefault()
  console.log("yarab")


  

  changePassword().then((data) => console.log(data))
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
              <h1>Edit Your Password</h1>
            </div>
          </div>
          <form onSubmit={handleSubmitt}>
          <div className="rateCourse_inputs">
            <div className="rateCourse_instructorName">
              <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type = "textbox" placeholder="Enter your Email"/>
            </div><hr/>
            <div className="rateCourse_courseTitle">
              <input 
              onChange={(e) => setOldPassword(e.target.value)}
              value={oldPassword}
              type = "textbox" placeholder="Old Password"/>
            </div>
            <div className="rateCourse_line1">
              <hr></hr>
            </div>
            <div className="rateCourse_rating">
              <input 
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
              type = "textbox" placeholder="New Password"/>
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
