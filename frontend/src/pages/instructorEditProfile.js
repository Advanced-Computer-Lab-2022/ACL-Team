import React from 'react'
import EditBio from '../Components/Instructor/editBio'
import EditEmail from '../Components/Instructor/editEmail'
import { useState } from 'react'
import NavyButton from '../Components/General/Buttons/navyButton'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const InstructorEditProfile = () => {
  const[choose,setChoose]=useState()
  const {instructorID} = useParams();
    
        return(
          <div>
            <Link to={`/instructor/editMail/${instructorID}`} >
              <NavyButton button_text="Edit Email"/>
            </Link>
            <a href='/instructor/editPassword'><NavyButton button_text="Edit Password"/></a>
            <Link to={`/instructor/editBio/${instructorID}`} >
              <NavyButton button_text="Edit Biography"/>
            </Link>
          </div>
  )
  }