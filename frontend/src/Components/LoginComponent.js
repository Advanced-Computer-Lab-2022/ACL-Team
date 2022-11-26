import React from 'react'
import "./loginComponent.css"
import login from "./images/user.svg"
import lock from "./images/lock.svg"
export default function LoginComponent() {
  return (
    <div>
         <p className="title">WELCOME BACK</p>

         <div>
         <div className="form">
        <div className="username">
        <div className="rectangle" />
        <input className='user' type="Username" placeholder=" Username" />
       
      </div>
      <div className="password">
        <div className="rectangle" />
        <input className='pass' type="password" placeholder=" Password" />
       
       
      </div>

    </div>
    <div>
        <button  className='buttonborder'>Login</button>
    </div>
    <div className="line" /></div>
    <p className="mess">I DONT HAVE AN ACCOUNT</p>
    <div>
        <button  className='register'>Register</button>
    </div>

    <img className='image1' src ={login} alt ='image'></img>
    <img className='image2' src ={lock} alt ='image'></img>
    </div>
    
  )
}
