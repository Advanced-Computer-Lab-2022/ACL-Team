import React, { useState } from 'react';
export default function AdminComp(){
    const[email,setEmail] =useState('')
    const[username,setUsername] =useState('')
    const[password,setPass] =useState('')
    const[firstname,setFirstname] =useState('')
    const[lastname,setLastname] =useState('')
    const[gender,setGender] =useState('')
    const[corprate,setisCorprate] =useState('')
        return(
        <div>
            <h1>Admin Page</h1>   
            <button>
                Admin
             </button> 
             <button>
                Instructor
             </button>   
             <button>
                user
             </button>  
             <div className="form-group">
    <label>First Name</label>
    <input type="text" 
    onChange={(e) => setFirstname(e.target.value)}
    value={firstname}
    
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
     
    aria-describedby="emailHelp" 
    placeholder="Enter your last name"
    />
  </div>

  <div className="form-group">
    <label>Email address</label>
    <input type="email" 
    onChange={(e) => setEmail(e.target.value)}
    value={email}
    
    className="form-control" 
     
    aria-describedby="emailHelp" 
    placeholder="Enter email"
    />
    <small id="emailHelp" className="form-text text-muted"></small>
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
    <input type="radio" name="corprate" value="true" onChange={(e) => setisCorprate(e.target.value)} />Yes 
    &nbsp; &nbsp;
    <input type="radio" name="corprate" value="" onChange={(e) => setisCorprate(e.target.value)} />No
  </div><br/>

             
        </div>
        )
    
}