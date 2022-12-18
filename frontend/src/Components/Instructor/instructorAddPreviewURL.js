import React, { useState } from 'react'
import axios from 'axios';
import "../css/instructorAddPreviewURL.css"
export default function InstructorAddPreviewURL({courseID}) {
    const [previewUrl , setPreviewURL] = useState('')
    const instructorAddCoursePreview = async () => {
        
        // console.log("boodaa")
        const res = await axios
          .post("http://localhost:3000/instructor/setCoursePreview", {
            previewUrl:previewUrl , course_id:courseID
          })
          .catch((err) => console.log(err));
          const data = await res.data;
        return data;
      };

    const handleSubmitt=(e)=>{
        e.preventDefault()
        console.log("yarab")
      
      
        
      
        instructorAddCoursePreview().then((data) => console.log(data))
        console.log("hiiii")
      
    }  
  return (
    <div>
        <div className="URL_Frame">
            <div className="URL_Title">
                <h1>Add Course Preview Video URL</h1>
            </div>
            <form onSubmit={handleSubmitt}>
            <div className="URL_previewURl">
                <input onChange={(e) => setPreviewURL(e.target.value)}
                value={previewUrl}
                type="text" placeholder="Enter the URl of the Video"/>
            </div>
            <div className="URL_button">
                <button className="Navy_Button"><a>submit</a></button>
            </div>
            </form>
        </div>
    </div>
  )
}
