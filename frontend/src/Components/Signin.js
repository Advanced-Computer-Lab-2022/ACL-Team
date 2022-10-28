import React from "react"
import { useState } from "react"
export default function (props) {
  const [username,setUsername]= useState(null)  
  const [password,setPassword]= useState(null) 
  
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Username address</label>
            <input
              type="Username"
              onChange={(e) => setUsername(e.target.value)}
              value = {username}
              className="form-control mt-1"
              placeholder="Enter Username"
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