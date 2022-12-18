import React, {useState,useEffect} from 'react'
import axios from 'axios';
import AdminCourseCard from '../Components/Admin/adminCourseCard';
import { useParams } from 'react-router-dom';


export default function AdminViewCourses() {

const {adminID} = useParams();
    
const [courses,setCourses] = useState([]);

const getCourses = async () => {
    const res = await axios.get("http://localhost:3000/course/getAllCourses")
    .catch((err) => console.log(err));
    const data = await res.data;
    
    return data;
    
  };

  useEffect(() =>{
    getCourses().then((data) => setCourses(data))

  },[])

  
  return (
    <div>

    {courses && courses.map((course ) =>( 
        <AdminCourseCard course={course} adminID={adminID} />    
    ))} 

    </div>
  )
}
