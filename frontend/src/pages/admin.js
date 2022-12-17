import React from 'react'
import AdminComp from '../Components/Admin/adminComponent'
import { useParams } from 'react-router-dom'
import AdminNavbar from '../Components/General/Navbar/adminNavbar'

export default function AdminSignup(){

  const {adminID} = useParams()
  return (
    <div>
      <AdminNavbar props={adminID}/>
        <AdminComp/>
    </div>
  )
}