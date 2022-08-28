import { useRef, useState, useEffect } from "react";
import {Link} from "react-router-dom";
import './style.css'

const Login=()=>{
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const handleSubmit=()=>{

  }
  return (
    
    <div className="total">
    <form action="" className="farm" onSubmit={handleSubmit}>
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
      <button type="submit" class="btn btn-success" onClick={handleSubmit}>Login</button>
      {/* <button type="submit" class="btn btn-primary">Login</button> */}
    </form>
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
  <div className="signup_link">Not a member? <Link to="/international_admissions/register">Register</Link> </div>
  
</div>
  )
}

export default Login;