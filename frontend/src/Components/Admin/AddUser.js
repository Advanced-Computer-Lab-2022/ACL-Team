import React, { useState } from 'react';
import axios from 'axios'

 const AddUser = () => {
    
    const[isCorporate,setIsCorporate] =useState('')
    const[username,setUsername] =useState('')
    const[password,setPass] =useState('')
    const[email,setEmail] =useState('')

    const addUser = async () => {
        console.log("boodaa")
        const res = await axios
          .post("http://localhost:3000/admin/user", {
            password:password,email:email,username:username,isCorporate:isCorporate
          })
          .catch((err) => console.log(err));
        const data = await res.data;
        return data;
      };
      const handleSubmitt=(e)=>{
        e.preventDefault()
        console.log("boodaa")

        addUser().then((data) => console.log(data))
      }
  return (
    <div>
    <h3>
        Adding User
    </h3>
    <form onSubmit={handleSubmitt}>
    <label> Name</label>
    <input type="text" 
    onChange={(e) => setName(e.target.value)}
    value={name}
    
    className="form-control" 
    
    aria-describedby="emailHelp" 
    placeholder="Enter your first name"
    />
    
    <label>username</label>
    <input 
    onChange={(e) => setUsername(e.target.value)}
    value={username}
    
    className="form-control" 
     
    aria-describedby="emailHelp" 
    placeholder="Enter email"
    />
    <label >Password</label>
    <input type="password" 
    onChange={(e) => setPass(e.target.value)}
    value={password}
    
    className="form-control" 
     
    placeholder="Password"
    />
    <label>Email address</label>
    <input type="email" 
    onChange={(e) => setEmail(e.target.value)}
    value={email}
    
    className="form-control" 
     
    aria-describedby="emailHelp" 
    placeholder="Enter email"
    />

<label> isCorporate</label>
    <input type="text" 
    onChange={(e) => setIsCorporate(e.target.value)}
    value={isCorporate}
    
    className="form-control" 
    
    aria-describedby="emailHelp" 
    placeholder="Enter your gender"
    />

    <button>
        Add User
    </button>
    </form>



    </div>
  )
}
export default AddUser;