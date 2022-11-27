import React , {useState} from 'react'
import axios from 'axios'
import "../css/instructorAddCourseComponent.css"
import img1 from "../images/createCourse.png"
import CategoryChoices from "../General/Buttons/CategoryChoices"

export default function InstructorAddCourseComponent() {
  const [InstructorName , setInstructorName ] = useState('')
  const [CourseTitle , setCourseTitle ] = useState('')
  const[price,setPrice] =useState('')
  const [URL , setURL] = useState('')
  const [Category,setCategory] = useState('')
  const[summary,setSummary] =useState('')
  
  const addCourse = async () => {
    const res  = await axios
    .post("http:localhost:3000/instructor/addCourse" , 
    {InstructorName:InstructorName , CourseTitle:CourseTitle , price:price , URL:URL, Category:Category , summary:summary})
    .catch((err) => console.log(err));
    const data = await res.data
    console.log(data)
    return data;
  };
  const handleSubmit = (e) =>{
    e.preventDefault()
    addCourse().then((data)  => console.log(data))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className="instructor-addCourse">
        <div className="instructor-icon1">
          <img src={img1} alt="icon"/>
        </div>
        <div className="instructor-title">
          <h1>Create Course </h1>
        </div>
        <div className="instructor_name">
          <input type="textbox" placeholder='Course Instructor Name' onChange={(e) => setInstructorName(e.target.value)} value = {InstructorName}/>
        </div>
        <div className="instructor_LastName">
          <input type="textbox" placeholder='Course Title' onChange={(e) => setCourseTitle(e.target.value)} value = {CourseTitle}/>
        </div>
        <div className="line1">
          <hr></hr>
        </div>
        <div className="instructor_price">
          <input type="textbox" placeholder='Price' onChange={(e)  => setPrice(e.target.value)}  value = {price}/>
        </div>
        <div className="instructor_URL">
          <input type="textbox" placeholder='Course Preview Video Url' onChange={(e) => setURL(e.target.value)} value = {URL}/>
        </div>
        <div className="line2">
          <hr></hr>
        </div>
        <div className="instructor_Category">
          <CategoryChoices onChange={(e) => setCategory(e.target.value)} value = {Category}/>
        </div>
        <div className="line3">
          <hr></hr>
        </div>
        <div className="instructor_Summary">
          <input type="textbox" placeholder='Course Summary' onChange={(e) => setSummary(e.target.value)} value={summary}/>
        </div>
        <div className="instructor_Button">
          <button className="Navy_Button" type="submit"> Create Course </button>

        </div>
        

      </div>
      </form>
    </div>
  )
}
