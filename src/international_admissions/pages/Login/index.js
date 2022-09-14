import axios from "axios";
import { useRef, useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom";
import './index.css'

const Login=()=>{
  const navigate= useNavigate();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [loginStatus,setLoginStatus]= useState("");
  const [Error,setError]=useState(false);
  axios.defaults.withCredentials=true;
  const handleSubmit=async(e)=>{
    const intl_login_Data={
      email: email,
      password: password,
    }
    e.preventDefault();
     await axios.post("/login",intl_login_Data).then((res)=>{
      if(res.data.message){setError(true);console.log(loginStatus);console.log("You are not logged in");}
      else {setLoginStatus(res.data[0].email);console.log("Calling from alum_login POST Aprroved");console.log("Correct combination2");console.log(loginStatus);navigate("../payments")}
     });
  }
  return (
    
      <div className="center">
        <h1>Login</h1>
        <div className="form">
        <div className="txt_field">
        <input type="text" required onChange={(e)=>{setEmail(e.target.value);}}/>
        {/* <span></span> */}
        <label>Email ID </label>
        </div>
        <span></span>
        <div className="txt_field">
        <input type="text" required onChange={(e)=>{setPassword(e.target.value);}}/>
        {/* <span></span> */}
        <label>Password </label>
        </div>
        <div className="pass">Forgot Password?</div>
        <button type="submit"  onClick={handleSubmit}>Submit</button>
        {/* bad code alert*/}
        <div className="signup_link">Not a member? <Link className="reg" to="/international_admissions/register">Register</Link> </div>
        </div>
      </div>
  )
}

export default Login;