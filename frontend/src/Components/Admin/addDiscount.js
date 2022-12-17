import React, { useState } from 'react'
import axios from 'axios'
import img1 from "../images/createCourse.png"

export default function AddAdminDiscount({adminID,courseID}) {
    const [discountName,setDiscountName] = useState('')
    const [percentage,setPercentage] = useState(null)
    const [startDate,setStartDate] = useState(null)
    const [endDate,setEndDate] = useState(null)

    const addDiscountByAdmin = async () => {
        const res = await axios.post("http://localhost:3000/admin/adminAddDiscount" , {
            _id: adminID, name:discountName, percentage: percentage, start_date: startDate , end_date:endDate,
            course_id: courseID
        })
        .catch((err) => console.log(err));
        const data = await res.data;
       
        return data;
        
      };

    const handleSubmit=(e)=>{
        e.preventDefault()

        addDiscountByAdmin()

    }

    console.log(adminID)
    console.log(courseID)

  return (
    <div>
        <div className="rateCourse_frame">
        <form onSubmit={handleSubmit}> 
        <div className="rateCourse_container">
          <div className="rateCourse_header">
            <div className="rateCourse-icon1">
              <img src={img1} alt="icon"/>
            </div>
            <div className="rateCourse-title">
              <h1>Add Course Discount </h1>
            </div>
          </div>
          <div className="rateCourse_inputs">
          
            <div className="rateCourse_instructorName">
              <input onChange={(e) => setDiscountName(e.target.value)}
              value={discountName}
              type = "textbox" placeholder="Discount Name"/>
            </div>

            <div className="rateCourse_line1">
              <hr></hr>
            </div>
            <div className="rateCourse_rating">
              <input onChange={(e) => setPercentage(e.target.value)}
              value={percentage}
              type = "textbox" placeholder="Discount Percentage"/>
            </div><br/>

            <div className="rateCourse_rating">
              <input onChange={(e) => setStartDate(e.target.value)}
              value={startDate}
              type = "textbox" placeholder="Start Date"/>
            </div><br/>

            <div className="rateCourse_rating">
              <input onChange={(e) => setEndDate(e.target.value)}
              value={endDate}
              type = "textbox" placeholder="End Date"/>
            </div><br/>

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
