import React, { useState } from 'react';
import axios from 'axios'

 const AddAdmin = () => {
    const[name,setName] =useState('')
    const[gender,setGender] =useState('')
    const[username,setUsername] =useState('')
    const[password,setPass] =useState('')
    const[email,setEmail] =useState('')

    const addAdm = async () => {
        console.log("boodaa")
        const res = await axios
          .post("http://localhost:3000/admin/", {
            name:name,password:password,gender:gender,email:email,username:username
          })
          .catch((err) => console.log(err));
        const data = await res.data;
        return data;
      };
      const handleA=(e)=>{
        e.preventDefault()
        console.log("boodaa")

        addAdm().then((data) => console.log(data))
      }
  return (
    <div>
    <h3>
        Adding Admin
    </h3>
    <form onSubmit={handleA}>
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

<label> Gender</label>
    <input type="text" 
    onChange={(e) => setGender(e.target.value)}
    value={gender}
    
    className="form-control" 
    
    aria-describedby="emailHelp" 
    placeholder="Enter your gender"
    />

    <button>
        Add Admin
    </button>
    </form>



    </div>
  )
}
export default AddAdmin;