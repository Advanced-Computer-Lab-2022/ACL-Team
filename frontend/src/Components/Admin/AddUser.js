import React, { useState } from 'react';
import axios from 'axios'

 const AddUser = () => {
    
  const[firstname,setfirstName] =useState('')
  const[lastname,setlastName] =useState('')
  const[gender,setGender] =useState('')
  const[username,setUsername] =useState('')
  const[password,setPass] =useState('')
  const[email,setEmail] =useState('')
  const[role,setRole] = useState('')

    const addUsr = async () => {
        console.log("boodaa")
        const res = await axios
          .post("http://localhost:3000/admin/user", {
            email:email,username:username,password:password,firstname:firstname,lastname:lastname , gender:gender , role:role
          })
          .catch((err) => console.log(err));
        const data = await res.data;
        return data;
      };
      const handleSubmitt=(e)=>{
        e.preventDefault()
        console.log("boodaa")

        addUsr().then((data) => console.log(data))
      }
  return (
    <div>
    <h3>
        Adding Trainee
    </h3>
    <form onSubmit={handleSubmitt}>
    <label> FirstName</label>
    <input type="text" 
    onChange={(e) => setfirstName(e.target.value)}
    value={firstname}
    
    className="form-control" 
    
    aria-describedby="emailHelp" 
    placeholder="Enter your first name"
    />
    
    <label>LastName</label>
    <input 
    onChange={(e) => setlastName(e.target.value)}
    value={lastname}
    
    className="form-control" 
     
    aria-describedby="emailHelp" 
    placeholder="Enter your Last Name"
    />
    <label >Username</label>
    <input type="text" 
    onChange={(e) => setUsername(e.target.value)}
    value={username}
    
    className="form-control" 
     
    placeholder="Username"
    />
    <label>Email address</label>
    <input type="email" 
    onChange={(e) => setEmail(e.target.value)}
    value={email}
    
    className="form-control" 
     
    aria-describedby="emailHelp" 
    placeholder="Enter email"
    />
    <label>Password</label>
    <input type="password" 
    onChange={(e) => setPass(e.target.value)}
    value={password}
    
    className="form-control" 
     
    aria-describedby="emailHelp" 
    placeholder="Enter Your Password"
    />

<label> Gender</label>
    <input type="text" 
    onChange={(e) => setGender(e.target.value)}
    value={gender}
    
    className="form-control" 
    
    aria-describedby="emailHelp" 
    placeholder="Enter your gender"
    />
<label> Role</label>
  <input type="text" 
    onChange={(e) => setRole(e.target.value)}
    value={role}
    
    className="form-control" 
    
    aria-describedby="emailHelp" 
    placeholder="Enter your Role"
    />

    <button>
        Add User
    </button>
    </form>


    </div>
  )
}
export default AddUser;