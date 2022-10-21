import axios from "axios";
import { useRef, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom";
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
      else {setLoginStatus(res.data[0].email);console.log("Calling from alum_login POST Aprroved");console.log("Correct combination2");console.log(loginStatus);navigate("../home")}
     });
     
  }
  return (


    
    <div className="total">
      
        <h1>Login</h1>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" required onChange={(e)=>{setEmail(e.target.value);}}/>
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3"required onChange={(e)=>{setPassword(e.target.value);}}/>
          </div>
        </div>
        
      <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Login</button>
   
    <div className="signup_link">Not a member? <Link className="reg" to="../register">Register</Link> </div>
    
  </div>
  )
}

export default Login;


//  Userprofile.setUser(res.data[0].email);


