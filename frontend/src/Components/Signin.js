import React from "react"
import { useState } from "react"
import axios from 'axios'

export default function (props) {
  const [email,setemail]= useState(null)  
  const [password,setPassword]= useState(null) 

  const loginUser = async () => {

    const res = await axios
      .post("http://localhost:3000/signin", {
        email:email,password:password
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  }
  
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>email address</label>
            <input
              type="email"
              onChange={(e) => setemail(e.target.value)}
              value = {email}
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value = {password}
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="/Home">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}