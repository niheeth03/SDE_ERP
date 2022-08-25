import axios from "axios";
import { useRef, useState, useEffect } from "react";
import {Link} from "react-router-dom";
import './style.css'

const Login=()=>{
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [loginStatus,setLoginStatus]= useState("");
  axios.defaults.withCredentials=true;
  const handleSubmit=()=>{
     const Login_Data={
       email: email,
       password: password,
     }
     axios.post("/login",Login_Data).then((res)=>{
      if(res.data.message){setLoginStatus(res.data.message);console.log(loginStatus);console.log("Correct combination");}
      else {setLoginStatus(res.data[0].email);console.log(loginStatus);console.log("Correct combination2");}
     });
  }
  return (
    
      <div className="center">
        <h1>Login</h1>
        <div className="form">
        <div className="txt_field">
        <input type="text" required onChange={(e)=>{setEmail(e.target.value);}}/>
        <span></span>
        <label>Email ID </label>
        </div>
        <div className="txt_field">
        <input type="text" required onChange={(e)=>{setPassword(e.target.value);}}/>
        <span></span>
        <label>Password </label>
        </div>
        <div className="pass">Forgot Password?</div>
        <button type="submit"  onClick={handleSubmit}>Submit</button>
        {/* bad code alert*/}
        <div className="signup_link">Not a member? <Link className="reg" to="/alumni_portal/register">Register</Link> </div>
        <h1>{loginStatus}</h1>
        </div>
      </div>
  )
}

export default Login;