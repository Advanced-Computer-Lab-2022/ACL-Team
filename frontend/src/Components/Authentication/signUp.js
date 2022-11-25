import React from 'react'
import "../css/signUp.css";
import Navbar from '../General/Navbar/navbar';
import img1 from '../images/Abstraction.png'

export default function SignUp() {
  return (
    <div>
        <Navbar/>
        <div className="signup-container">
             <div className="signup-img">
                <h2>Get Started with learning experience</h2>
                <img src={img1} alt="leaves-img"/>
            </div>

        <div className="signup-form">
            <div className="topper">
                 <h1>Create Account</h1>
            </div>

            <div className="block1">
                <input className="textbox-style" type="textbox" placeholder='First Name'/>
                <input className="textbox-style" type="textbox" placeholder='Last Name'/>    
            </div><hr/>

            <div className="block2">   
                <input className="textbox-style" type="textbox" placeholder='Username'/>  
                <input className="textbox-style" type="email" placeholder='Email'/>                 
            </div><hr/>

            <div className="block3">
                <input className="textbox-style" type="password" placeholder="Password"/>
            </div><hr/>

            <div className="block4">
                <label>Gender</label><br/>
                <input className="textbox-style" type="radio" value="Male" name="gender"/> &nbsp; Male
                <input className="textbox-style" type="radio" value="Female" name="gender"/> &nbsp; Female
                <br/>
                <br/>
                <label>isCorprate</label><br/>
                <input className="textbox-style" type="radio" value="True" name="isCorprate"/>&nbsp; True
                <input className="textbox-style" type="radio" value="False" name="isCorprate"/>&nbsp; False
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
            </div>

            <div className="viewterms">
                <button> view terms and conditions</button>
            </div>

            <div>
                {/* Dee el sign up with google w facebook */}
            </div><br/>

            <div className="create-botton">
                <button>Create Account</button>
            </div>

            <div className="footer">
                <p>Already have an account?</p>
                <button>Log In</button>
            </div>
        </div>
    </div>

    </div>
   
  )
}
