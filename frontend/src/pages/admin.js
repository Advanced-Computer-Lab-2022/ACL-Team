import React from 'react'
import AdminComp from '../Components/Admin/adminComponent'
import { Link } from 'react-router-dom'

export default function AdminSignup(){
  return (
    <div>
      <Link to={`/admin/Reports`}> 
        <button>View Reports</button>
      </Link>
      
      <Link to={`/admin/courseRequests`}> 
        <button>Course Requests</button>
      </Link>

       <AdminComp/>
    </div>
  )
}