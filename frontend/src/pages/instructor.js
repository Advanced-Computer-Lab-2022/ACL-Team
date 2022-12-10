import React, {useState,useEffect} from 'react'
import axios from 'axios'
import InstructorAddSubtitle from '../Components/Instructor/instructorAddSubtitle'
import InstructorCourseCard from '../Components/Instructor/instructorCourseCard'
import InstNavbar from '../Components/General/Navbar/instructorNavbar'
import { useParams } from 'react-router-dom'
export default function InstructorHomePage() {

  const [instCourses, setInstCourses] = useState([]);
  const [instructor, setInstructor] = useState([]);

  const {id} = useParams();

  const getInstructorCourses = async () => {
    const res = await axios.get(`http://localhost:3000/instructor/courseShow?_id=${id}`)
    .catch((err) => console.log(err));
    const data = await res.data;
    
    return data;
    
  };
  
  useEffect(() =>{
    getInstructorCourses().then((data) => setInstCourses(data))

  },[])
  
  const getInstructor= async () => {
    const res = await axios.get(`http://localhost:3000/instructor/getInstructor?_id=${id}`)
    .catch((err) => console.log(err));
    const data = await res.data;
    
    return data;
    
  };

  useEffect(() =>{
    getInstructor().then((data) => setInstructor(data))

  },[])



  return (
    
    <div>
        <InstNavbar/>
        {/* <h2> {id} </h2>  */}
        <div className="coursepage_component1">
          
          {instCourses && instCourses.map((Course) =>(
            <InstructorCourseCard course={Course} instructor={instructor}/>
          ))}
        </div>
        
        {/* <div className="coursepage_component2">
          <InstructorAddSubtitle/>
        </div>
         */}
    </div>
  )
}
