import "../css/rateCourse.css"
import React , {useState} from 'react'
import axios from 'axios'
import img1 from "../images/createCourse.png"

export default function ReportIssueCard({traineeID,course_id}) {

    const [reportType,setReportType] = useState('');
    const [reportString,setReportString] = useState('');
    
    const reportIssue = async () => {
        console.log("boodaa")
        const res = await axios
        .post("http://localhost:3000/user/addCourseIssue", {_id:traineeID, course_id:course_id, type:reportType, 
        issueString: reportString})
        .catch((err) => console.log(err));
        
        const data = await res.data;
        return data;
        };

        const handleSubmitt=(e)=>{
            e.preventDefault()
            
            reportIssue();
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
              <h1>Report Course </h1>
            </div>
          </div>
          <div className="rateCourse_inputs">
            <div className="rateCourse_instructorName">
            <input onChange={(e) => setReportType(e.target.value)}
            value={reportType}
              type = "textbox" placeholder="Report Type"/>
            </div>
            {/* <div className="rateCourse_courseTitle">
              <input type = "textbox" placeholder="Course Title"/>
            </div> */}
            <div className="rateCourse_line1">
              <hr></hr>
            </div>
            <div className="rateCourse_rating">
              <input onChange={(e) => setReportString(e.target.value)}
            value={reportString}
              type = "textbox" placeholder="Type in your report"/>
            </div>

          </div>
          <div className="rateCourse_button">
            <button className="Navy_Button" type="submit"> Submit </button>
          </div>

        </div>
        </form>
      </div> 
    </div>
  )
}
