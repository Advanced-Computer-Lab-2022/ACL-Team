
import React, { useState } from 'react';
import axios from 'axios'


        
        

  export const SignupUser = () => {
        const[email,setEmail] =useState('')
        const[username,setUsername] =useState('')
        const[password,setPass] =useState('')
        const[firstname,setFirstname] =useState('')
        const[lastname,setLastname] =useState('')
        const[gender,setGender] =useState('')
        const[corprate,setIsCorprate] =useState('')

    const handleUserSignup = async () => {
      console.log("boodaa")
      const res = await axios
        .post("http://localhost:3000/signup", {
          email:email,username:username,password:password,firstname:firstname,lastname:lastname,gender:gender,corprate:corprate
        })
        .catch((err) => console.log(err));
      const data = await res.data;
      return data;
      };
      const handleSubmit =(e)=>{
        e.preventDefault()
        console.log("boodaa")

        handleUserSignup().then((data) => console.log(data))
      }
      

        return(
        <div>
          <form onSubmit={handleSubmit}>

    <div className="form-group">
    <label>email</label>
    <input type="text" 
    onChange={(e) => setEmail(e.target.value)}
    value={email}
    
    className="form-control" 
     
    aria-describedby="emailHelp" 
    placeholder="Enter a username"
    />
  </div>

  <div className="form-group">
    <label>username</label>
    <input type="text" 
    onChange={(e) => setUsername(e.target.value)}
    value={username}
    
    className="form-control" 
    
    aria-describedby="emailHelp" 
    placeholder="Enter your first name"
    />
  </div>

  <div className="form-group">
    <label >Last Name</label>
    <input type="text" 
    onChange={(e) => setLastname(e.target.value)}
    value={lastname}
    
    className="form-control" 
     
   
    placeholder="Enter your last name"
    />
  </div>

  <div className="form-group">
    <label>first name</label>
    <input  
    onChange={(e) => setFirstname(e.target.value)}
    value={firstname}
    
    className="form-control" 
     
    aria-describedby="emailHelp" 
    placeholder="Enter email"
    />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label >Password</label>
    <input type="password" 
    onChange={(e) => setPass(e.target.value)}
    value={password}

    
    className="form-control" 
     
    placeholder="Password"
    />
  </div>
  <div className="form-group">
    <label >Address</label>
    <input type="text" className="form-control" placeholder="Enter your address"/>
  </div><br/>

  <div>
   <input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} />Male 
   &nbsp; &nbsp;
   <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} />Female
  </div><br/>

  <div>
    <label>Are you a corprate trainee?</label><br/>
    <input type="radio" name="corprate" value="true" onChange={(e) => setIsCorprate(e.target.value)} />Yes 
    &nbsp; &nbsp;
    <input type="radio" name="corprate" value="" onChange={(e) => setIsCorprate(e.target.value)} />No
  </div><br/>
  
  {/* <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Gender
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Male</a></li>
    <li><a className="dropdown-item" href="#">Female</a></li>
  </ul>
</div> */}

{/* <div className="dropdown">
  <button onclick="myFunction()" className="dropbtn">Gender</button>
  <div id="myDropdown" className="dropdown-content">
   <label>Male</label>
   <input
    type="sumbit"
    onChange={(e) => setGender(e.target.value="Male")}
    value={gender}
   />
  <input
    type="sumbit"
    onChange={(e) => setGender(e.target.value="Female")}
    value={gender}
   />

  </div>
</div> */}

  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" >Check me out</label>
  </div>
  
  <button>Submit</button>
  
  

  
</form>                
        </div>
        )
    
}

