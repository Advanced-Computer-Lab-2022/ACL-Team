import React, { useState , useEffect } from 'react'
import axios from 'axios';
import CourseRequest from '../Components/Cards/courseRequestCard';
import img1 from '../Components/images/Alert.svg'
import AdminNavbar from '../Components/General/Navbar/adminNavbar';

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
        <AdminNavbar/>
        {courseRequests && courseRequests.map((request) => (
            <CourseRequest request={request}/>
        ))}

        <div className="no-pending-courses-message">
          {courseRequests.length == 0 && <img src={img1}/>}
          {courseRequests.length == 0 && <h1>No Pending Requests</h1>}
        </div>

        

    </div>
  )
}
