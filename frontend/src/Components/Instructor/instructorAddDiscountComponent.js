
import img1 from "../images/createCourse.png"
import "../css/instructorAddDiscountComponent.css"
import React , {useState} from 'react'
import axios from 'axios'
export default function InstructorAddDiscountComponent({courseID,instructorID}) {
  // _id,
  //name,
 // percentage,
  //start_date,
  //end_date,
 // course_id
const[_id,set_id] =useState('')
const[name,setName] =useState('')
const[percentage,setPercentage] =useState('')
const[start_date,setStartdate] =useState('')
const[end_date,setEnddate] =useState('')
 const[course_id,setCourse_id] =useState('')

 const instructorAddDiscount = async () => {
  // console.log("boodaa")
  const res = await axios
    .post("http://localhost:3000/instructor/addDiscount", {
     _id:instructorID,name:name,percentage:percentage,start_date:start_date,end_date:end_date,course_id:courseID
    })
    .catch((err) => console.log(err));
    const data = await res.data;
  return data;
};
const handleSubmitt=(e)=>{
  e.preventDefault()
  console.log("yarab")


  

  instructorAddDiscount().then((data) => console.log(data))
  console.log("hiiii")

}
  
  return (
    <div>
         <div className="instructor-addDiscount">
            <div className="section-icon1">
                <img src={img1} alt="icon"/>
            </div>
            <div className="discount-title">
            <h1>Create Course Discount</h1>
            </div>

            <form onSubmit={handleSubmitt}>
            {/* <div className="discount_name">
            <input 
            onChange={(e) => set_id(e.target.value)}
            value={_id}
            type="textbox" placeholder='instructor id'/>
            </div> */}

            {/* <div className="discount_name">
            <input 
            onChange={(e) => setCourse_id(e.target.value)}
            value={course_id}
            type="textbox" placeholder='Course _id'/>
            </div> */}




            <div className="discount_LastName">
            <input
            onChange={(e) => setName(e.target.value)}
            value={name}
             type="textbox" placeholder='Discount Title'/>
            </div>



            <div className="discount_line1">
            <hr></hr>
            </div>

            <div className="discount_price">
            <input onChange={(e) => setPercentage(e.target.value)}
             value={percentage}
             type="textbox" placeholder='Discount Percentage'/>
            </div>

            <div className="discount_line2">
            <hr></hr>
            </div>

            <div className="discount-subtitle">
            <h1>Set Discount Date</h1>
            </div>

            <div className="discount_start">
            <input onChange={(e) => setStartdate(e.target.value)}
           value={start_date}
            type="textbox" placeholder='Start Date'/>
            </div>

            <div className="discount_end">
            <input onChange={(e) => setEnddate(e.target.value)}
          value={end_date} 
            type="textbox" placeholder='End Date'/>
            </div>
            
            <div className="discount_Button">
            <button className="Navy_Button"> Create Discount </button>

            </div>

            </form>
            

        </div>
    </div>
  )
}
