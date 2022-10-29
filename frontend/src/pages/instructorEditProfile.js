import React from 'react'
import EditBio from '../Components/Instructor/editBio'
import EditEmail from '../Components/Instructor/editEmail'
import { useState } from 'react'

export const InstructorEditProfile = () => {
  const[choose,setChoose]=useState()
    
        return(
        <div>
            <h1>Instructor Profile</h1>   
            <button onClick={()=>{
                setChoose("editEmail")
            }}>
                
                Edit Profile
             </button> 
             <button onClick={()=>{
                setChoose("editBio")
            }}>
                Instructor
             </button>   
              
             {
               choose==="editEmail"&&<EditEmail/>

             }
             {
                choose==="editBio"&&<EditBio/>

             }
      

             
    

             
        </div>
  )
  }