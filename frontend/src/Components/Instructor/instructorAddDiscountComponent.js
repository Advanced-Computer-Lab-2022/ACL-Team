import React from 'react'
import img1 from "../images/createCourse.png"
import "../css/instructorAddDiscountComponent.css"
export default function InstructorAddDiscountComponent() {
  return (
    <div>
         <div className="instructor-addDiscount">
            <div className="section-icon1">
                <img src={img1} alt="icon"/>
            </div>
            <div className="discount-title">
            <h1>Create Course Discount</h1>
            </div>
            <div className="discount_name">
            <input type="textbox" placeholder='Course Instructor Name'/>
            </div>
            <div className="discount_LastName">
            <input type="textbox" placeholder='Discount Title'/>
            </div>
            <div className="discount_line1">
            <hr></hr>
            </div>
            <div className="discount_price">
            <input type="textbox" placeholder='Discount Percentage'/>
            </div>
            <div className="discount_line2">
            <hr></hr>
            </div>
            <div className="discount-subtitle">
            <h1>Set Discount Date</h1>
            </div>
            <div className="discount_start">
            <input type="textbox" placeholder='Start Date'/>
            </div>
            <div className="discount_end">
            <input type="textbox" placeholder='End Date'/>
            </div>
            
            <div className="discount_Button">
            <button className="Navy_Button"> Create Discount </button>

            </div>
            

        </div>
    </div>
  )
}
