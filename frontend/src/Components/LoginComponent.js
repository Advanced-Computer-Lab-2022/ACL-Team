import React from "react";
import "./loginComponent.css";
import login from "./images/user.svg";
import lock from "./images/lock.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function LoginComponent() {
  const [password, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [userID, setUserID] = useState([]);
  const [userRole, setUserRole] = useState("");

  const [userIsInstructor, setUserIsInstructor] = useState(false);
  const [userIsAdmin, setUserIsAdmin] = useState(false);
  const [userIsTrainee, setUserIsTrainee] = useState(false);

  const loginUser = async () => {
    // console.log("boodaa")
    const res = await axios
      .post("http://localhost:3000/login/", {
        email: email,
        password: password,
      })
      .then((res) => {
        window.localStorage.setItem("user_id", res.data.user._id);
        setUserID(res.data.user._id);
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSubmitt = (e) => {
    e.preventDefault();

    loginUser().then((data) => console.log(data));
  };

  useEffect(() => {
    loginUser().then((data) => setUserID(data.user._id));
    loginUser().then((data) => setUserRole(data.role));
  });

  const handleSignIn = (e) => {
    e.preventDefault();

    if (userRole == "instructor") {
      setUserIsInstructor(true);
    } else if (userRole == "admin") {
      setUserIsAdmin(true);
    } else {
      setUserIsTrainee(true);
    }
  };

  return (
    <div>
      <p className="title">WELCOME BACK</p>

      <form onSubmit={handleSubmitt}>
        <div>
          <div className="form">
            <div className="username">
              <div className="rectangle" />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="user"
                type="email"
                placeholder=" email"
              />
            </div>
            <div className="password">
              <div className="rectangle" />
              <input
                onChange={(e) => setPass(e.target.value)}
                value={password}
                className="pass"
                type="password"
                placeholder=" Password"
              />
            </div>
            <div className="Forget-Password">
              <a href="/forgetPassword">Forget Password ?</a>
            </div>
          </div>
          <div>
            <button onClick={handleSignIn} className="buttonborder">
              {userIsInstructor && <Link to={`/instructor/${userID}`}>✔️</Link>}
              {userIsTrainee && <Link to={`/trainee/${userID}`}>✔️</Link>}
              {userIsAdmin && <Link to={`/admin/${userID}`}>✔️</Link>}
              Login
            </button>
          </div>

          <div className="line" />
        </div>
      </form>

      <p className="mess"> DONT HAVE AN ACCOUNT ?</p>
      <div>
        <a href="/signup">
          <button className="register">Register</button>
        </a>
      </div>

      <img className="image1" src={login} alt="image"></img>
      <img className="image2" src={lock} alt="image"></img>
    </div>
  );
}
