import axios from "axios";
import { useRef, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom";
//import Userprofile from "../../userprofile.js"
import './style.css'

const Login=()=>{
  const navigate= useNavigate();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [loginStatus,setLoginStatus]= useState("");
  const [Error,setError]=useState(false);
  axios.defaults.withCredentials=true;
  const handleSubmit=async(e)=>{
     const Login_Data={
       email: email,
       password: password,
     }
     e.preventDefault();
     await axios.post("./login",Login_Data).then((res)=>{
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
        {Error && <span style={{color:"red" ,marginTop:"10px"}}>Something went wrong!</span>}
        </div>
      </div>
  )
}

export default Login;


//  Userprofile.setUser(res.data[0].email);


