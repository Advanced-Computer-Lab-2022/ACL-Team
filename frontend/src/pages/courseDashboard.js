import React from 'react'
import CourseCard from '../Components/Course/courseCard'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from '../Components/General/navbar';
import Sidebar from '../Components/drawer';

export const CourseDashboard = () => {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
    </div>
  )
}
