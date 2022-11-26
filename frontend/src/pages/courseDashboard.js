import React from 'react'
import CourseCard from '../Components/Cards/courseCard'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from '../Components/General/Navbar/navbar';
import Sidebar from '../Components/drawer';

export const CourseDashboard = () => {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
    </div>
  )
}
