import React, { useState , useEffect } from 'react'
import axios from 'axios';
import CoureRequest from '../Components/Cards/courseRequestCard';

export default function AdminCourseRequests() {

    const [courseRequests,setCourseRequests] = useState([]);


    const getAllCourseRequests = async () => {
        const res = await axios.get("http://localhost:3000/admin/pendingCourseRequests")
        .catch((err) => console.log(err));
        const data = await res.data;
        
        return data;
        
      };

      useEffect(() =>{
        getAllCourseRequests().then((data) => setCourseRequests(data.requests))
      },[])

      console.log(courseRequests)


  return (
    <div>
        
        {courseRequests && courseRequests.map((request) => (
            <CoureRequest request={request}/>
        ))}

    </div>
  )
}
