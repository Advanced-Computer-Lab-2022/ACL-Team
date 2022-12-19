import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
export default function ResetPassword() {
    const {userID , token} = useParams()
    const [password,setPassword]= useState(null)  
    const resetPassword = async () => {

        const res = await axios
          .get(`http://localhost:3000/login/resetPassword/${userID}/${token}`, {
            
          } )
          .catch((err) => console.log(err));
        const data = await res.data;
        console.log(data.role)
        return data;
      }
      const resetPasswordpost = async () => {

        const res = await axios
          .post(`http://localhost:3000/login/resetPassword/${userID}/${token}`, {
            password:password
          } )
          .catch((err) => console.log(err));
        const data = await res.data;
        console.log(data)
        return data;
      }
      const handleSubmit =(e)=>{
        e.preventDefault()
        console.log("boodaa")

        resetPasswordpost().then((data) => console.log(data))
      }  
      useEffect(() =>{ 
        resetPassword()
      });
  return (
    <div>
        <div className="forgetPassword_frame">
            <form onSubmit={handleSubmit}>
            <div className="forgetPassword_title">
                <h1>ResetPassword</h1>
            </div>
            <div className="forgetPassword_email">
                <input onChange={(e) => setPassword(e.target.value)}
                value={password}
                type='password' placeholder="Enter your new Password"/>
            </div>
            <div className="forgetPassowrd_button">
                <button type='submit'>Submit</button>
            </div>
            </form>
            <div className="forgetPassowrd_redirectSignup">
                <a href='/signup'>Do you want to signup instead</a>
            </div>

            
            
            
        </div>
    </div>
  )
}
