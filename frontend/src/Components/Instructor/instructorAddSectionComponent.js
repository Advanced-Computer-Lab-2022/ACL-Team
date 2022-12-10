import React from 'react'
import img1 from "../images/createCourse.png"
import "../css/instructorAddSectionComponent.css"
import  {useState} from 'react'
import axios from 'axios'
export default function InstructorAddSectionComponent({courseID}) {
  const[subtitlePreviewVideoUrl,setURL] =useState('')
  const[subtitelTitle,setSubtitleTitle] =useState('')
  const[sectionTitle,setSectionTitle] =useState('')
  const instructorAddSection = async () => {
    // console.log("boodaa")
    const res = await axios
      .post("http://localhost:3000/instructor/addCourseSection", {
       course_id:courseID,sectionTitle:sectionTitle,subtitelTitle:subtitelTitle,subtitlePreviewVideoUrl:subtitlePreviewVideoUrl
      })
      .catch((err) => console.log(err));
      const data = await res.data;
    return data;
  };
  const handleSubmitt=(e)=>{
    e.preventDefault()
    console.log("yarab")
  
  
    
  
    instructorAddSection().then((data) => console.log(data))
    console.log("hiiii")
  
  }

  return (
    <div>
        <div className="instructor-addSection">
            <div className="section-icon1">
                <img src={img1} alt="icon"/>
            </div>
            <div className="section-title">
            <h1>Create Course Section</h1>
            </div>
            <form onSubmit={handleSubmitt}>
            <div className="section_name">
            <input type="textbox" placeholder='Course Instructor Name'/>
            </div>
            <div className="section_line1">
            <hr></hr>
            </div>
            <div className="section_price">
              
            <input onChange={(e) => setSectionTitle(e.target.value)}
            value={sectionTitle}
             type="textbox" placeholder='Section Title'/>
            </div>
            <div className="section_line2">
            <hr></hr>
            </div>
            <div className="section-subtitle">
            <h1>Create Section Subtitle</h1>
            </div>
            <div className="section_subtitleName">
            <input onChange={(e) => setSubtitleTitle(e.target.value)}
            value={subtitelTitle}
             type="textbox" placeholder='Subtitle Name'/>
            </div>
            <div className="section_subtitledescription">
            <input type="textbox" placeholder='Subtitle Video Descriotion'/>
            </div>
            <div className="section_VideoURL">
            <input onChange={(e) => setURL(e.target.value)}
            value={subtitlePreviewVideoUrl}
            type="textbox" placeholder='Subtitle Preview Video Youtube Link'/>
            </div>
            <div className="section_Button">
            <button className="Navy_Button"> Create Section </button>


            </div>
            </form>

        </div>

    </div>
  )
}
