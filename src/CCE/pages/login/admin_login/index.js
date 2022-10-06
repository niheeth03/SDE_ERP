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
    //  const Login_Data={
    //    email: email,
    //    password: password,
    //  }
    //  e.preventDefault();
    //  await axios.post("./login",Login_Data).then((res)=>{
    //   if(res.data.message){setError(true);console.log(loginStatus);console.log("You are not logged in");}
    //   else {setLoginStatus(res.data[0].email);console.log("Calling from alum_login POST Aprroved");console.log("Correct combination2");console.log(loginStatus);navigate("../payments")}
    //  });
  }
  return (
 <>
  <div>

<nav class="navbar navbar-expand-lg bg-white">
<div class="container-fluid">
<Link to='../../home' class="nav-link-active">ERP</Link>
<Link to='../home' class="nav-link-active">Home</Link>


</div>

</nav>
</div>
    
    <div className="total">
      
      
        <h1> Admin Login</h1>
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
        {/* <button type="submit" class="btn btn-primary">Login</button> */}
        
      <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Login</button>
    {/* <h2>Login</h2>
    
    <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required onChange={(e)=>{setEmail(e.target.value);}}/>
  <label for="floatingInput">Email address</label>
</div><br/>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
  <label for="floatingPassword">Password</label>
</div>

    <div className="txt_field">
    <label>Password </label><br/><br/>
    <input type="text" required onChange={(e)=>{setPassword(e.target.value);}}/>
    <span></span>
    <label>Password </label>
    </div>
    <div class="row">
            <div class="col-10">
                <label for="fname">Password :</label>
            </div>
            <div class="col-90">
            <input type="text" value={password}  onChange={(e)=>setPassword(e.target.value)}></input><br/>
            </div>
    </div><br/>
    <div className="pass">Forgot Password?</div>
    <button type="submit"  onClick={handleSubmit}>Submit</button> */}
     {/* <button className="registerButton" type="submit" onClick={handleSubmit}>Submit</button><br/>
    <button type="button" class="btn btn-primary">Submit</button> */}
    
  </div>
  </>
  )
}

export default Login;


//  Userprofile.setUser(res.data[0].email);


