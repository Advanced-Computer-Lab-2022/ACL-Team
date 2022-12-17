import React , {useState} from 'react'
import axios from 'axios';
import "../css/forgetPassword.css"
export default function ForgetPassword() {
    const [email,setemail]= useState(null)  
    const forgetPassword = async () => {

        const res = await axios
          .post("http://localhost:3000/login/forgetPassword", {
            email:email
          } , {body: JSON.stringify({email})})
          .catch((err) => console.log(err));
        const data = await res.data;
        console.log(data.role)
        return data;
      }

      const handleSubmitt=(e)=>{
        e.preventDefault()
        console.log("yarab")
        forgetPassword()
        .then((data) =>{
            console.log(data)
            alert(data.status)
        })
        console.log("hiiii")
      
      }  

  return (
    <div>
        <div className="forgetPassword_frame">
            <form onSubmit={handleSubmitt}>
            <div className="forgetPassword_title">
                <h1>Forget Password</h1>
            </div>
            <div className="forgetPassword_email">
                <input onChange={(e) => setemail(e.target.value)}
              value = {email}
                type='email' placeholder="Enter your email"/>
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

