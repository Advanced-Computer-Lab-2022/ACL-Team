
import img1 from "../images/createCourse.png"
import React , {useState} from 'react'
import axios from 'axios'


export default function EditBio({instructorID}) {
const[newBiography,setNewBio] =useState('')

const changeBio = async () => {
  // console.log("boodaa")
  const res = await axios
    .post("http://localhost:3000/instructor/changeBiography", {
     _id:instructorID,newBiography:newBiography
    })
    .catch((err) => console.log(err));
    const data = await res.data;
  return data;
};
const handleSubmitt=(e)=>{
  e.preventDefault()
  console.log("yarab")


  

  changeBio().then((data) => console.log(data))
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
              <h1>Edit Biography</h1>
            </div>
          </div>
          <form onSubmit={handleSubmitt}>
          <div className="rateCourse_inputs">
            <div className="rateCourse_instructorName">
              <input 
              onChange={(e) => setNewBio(e.target.value)}
              value={newBiography}
              type = "textbox" placeholder="Edit Biography"/>
            </div>
            {/* <div className="rateCourse_courseTitle">
              <input type = "textbox" placeholder="Course Title"/>
            </div> */}
            {/* <div className="rateCourse_line1">
              <hr></hr>
            </div> */}
            {/* <div className="rateCourse_rating">
              <input type = "textbox" placeholder="Rating"/>
            </div> */}

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
