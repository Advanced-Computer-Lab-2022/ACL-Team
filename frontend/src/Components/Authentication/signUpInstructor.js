import React from 'react'
import "../css/signUp.css";
import Navbar from '../General/Navbar/navbar';
import img1 from '../images/Abstraction.png'
import  { useState } from 'react';
import axios from 'axios'

export default function SignUp()  {
    const[firstname,setFirstname] =useState('')
    const[lastname,setLastname] =useState('')
    const[gender,setGender] =useState('')
    const[username,setUsername] =useState('')
    const[password,setPass] =useState('')
    const[email,setEmail] =useState('')
    const signupTrainee = async () => {
        // console.log("boodaa")
        const res = await axios
          .post("http://localhost:3000/Signup/instructor", {
            firstname:firstname,lastname:lastname,password:password,gender:gender,email:email,username:username
          })
          .catch((err) => console.log(err));
        const data = await res.data;
        return data;
      };
      const handleChange = e => {
        const target = e.target;
        if (target.checked) {
          setGender(target.value);
        }
     };
      const handleSubmitt=(e)=>{
        e.preventDefault()
        console.log("hi")
        

        signupTrainee().then((data) => console.log(data))
     
      }
  return (
    <div>
        {/* <Navbar/> */}
        <div className="signup-container">
             <div className="signup-img">
                <h2>Get Started with learning experience</h2>
                <img src={img1} alt="leaves-img"/>
            </div>
           
        <div className="signup-form">
            <div className="topper">
                 <h1>Create Account Instructor 🧑‍🏫</h1>
            </div>
 

            <form onSubmit={handleSubmitt}>

            <div className="block1">
                <input 
                 onChange={(e) => setFirstname(e.target.value)}
                 value={firstname}
                className="textbox-style" type="textbox" placeholder='First Name'/>
                <input 
                  onChange={(e) => setLastname(e.target.value)}
                  value={lastname}
                className="textbox-style" type="textbox" placeholder='Last Name'/>    
            </div><hr/>

            <div className="block2">   
                <input 
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                className="textbox-style" type="textbox" placeholder='Username'/>  
                <input 
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                className="textbox-style" type="email" placeholder='Email'/>                 
            </div><hr/>

            <div className="block3">
                <input 
                  onChange={(e) => setPass(e.target.value)}
                  value={password}
                className="textbox-style" type="password" placeholder="Password"/>
            </div><hr/>

            <div className="block4">
                <label>Gender</label><br/>
                <input 
                
                className="textbox-style" value="male" checked={gender == 'male'} onChange={handleChange} type="radio"  name="gender"/> &nbsp; Male
                <input 
                
                className="textbox-style" value="female" checked={gender == 'female'} onChange={handleChange} type="radio"  name="gender"/> &nbsp; Female
                <br/>
                <br/>
                {/* <label>isCorprate</label><br/>
                <input className="textbox-style" type="radio" value="True" name="isCorprate"/>&nbsp; True
                <input className="textbox-style" type="radio" value="False" name="isCorprate"/>&nbsp; False */}
            </div><hr/>

            <div className="block5">
                <input className="textbox-style" type="textbox" placeholder="University Name"/>
                <input className="textbox-style" type="textbox" placeholder="Degree"/>                 
            </div><br/>

            <div className="block5">
                <input className="textbox-style" type="textbox" placeholder="Company"/>
                <input className="textbox-style" type="number" placeholder="Years of experience"/> 
            </div><br/>

            <div className="block5">
                <input className="textbox-style" type="textbox" placeholder="Job Title"/>
                <input className="textbox-style" type="textbox" placeholder="Select your Country"/> 
            </div><hr/>

            <div className="TermsandConditions">
                <label>Do you agree to our terms and conditions?</label><br/>
                <input type="radio" Value="True" name="Terms"/>&nbsp; True
                <input type="radio" Value="False" name="Terms"/>&nbsp; False

                <a href='/signUp/instructor/termsInstructor'>
               <p className='signTerms'> view terms and conditions</p>
              </a>
            </div>
       

            <div className="viewterms">

                
            </div>

            <div>
                {/* Dee el sign up with google w facebook */}
            </div><br/>

            <div className="create-botton">
                <button>Create Account</button>
            </div>
                 </form>

            <div className="footer">
                <p>Already have an account?</p>
                <button>Log In</button>
            </div>
        </div>
    </div>
    

    </div>
   
  )
}
