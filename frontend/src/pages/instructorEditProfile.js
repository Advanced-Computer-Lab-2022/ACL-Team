import React from 'react'
import EditBio from '../Components/Instructor/editBio'
import EditEmail from '../Components/Instructor/editEmail'
import { useState } from 'react'
import NavyButton from '../Components/General/Buttons/navyButton'

export const InstructorEditProfile = () => {
  const[choose,setChoose]=useState()
    
        return(
          <div>
            <a href='/instructor/editMail'><NavyButton button_text="Edit Email"/></a>
            <a href='/instructor/editPassword'><NavyButton button_text="Edit Password"/></a>
            <a href='/instructor/editBio'><NavyButton button_text="Edit Biography"/></a>
          </div>
  )
  }