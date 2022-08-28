import React from "react";
import axios from "axios";
import { useRef, useState, useEffect } from "react";
import './style.css'

const Application = () => {
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [degree, setDegree] = useState("");
  const [branch, setBranch] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const handleSubmit = () => {
    const newStudent = {
      firstname: firstname,
      middlename: middlename,
      lastname: lastname,
      mobileNumber: mobileNumber,
      email: email,
      gender: gender,
      degree: degree,
      branch: branch,
    };
    console.log("Were");
    axios.post("/register", newStudent);
  };

  return (
    <div class="card bg-transparent">
      
      <h1>Application</h1>
      <article class="card-body mx-auto">
      <form>
      <div className="form">
      <div class="form-group input-group">
		<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-user"></i> </span>
		 </div>
        <input name="" class="form-control" placeholder="First name" type="text" onChange={(e) => {setFirstname(e.target.value);}} />
    </div> 
    <div class="form-group input-group">
		<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-user"></i> </span>
		 </div>
        <input name="" class="form-control" placeholder="Middle name" type="text" onChange={(e) => {setMiddlename(e.target.value);}} />
    </div> 
    <div class="form-group input-group">
		<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-user"></i> </span>
		 </div>
        <input name="" class="form-control" placeholder="Last name" type="text" onChange={(e) => {setLastname(e.target.value);}} />
    </div> 
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
		 </div>
        <input name="" class="form-control" placeholder="Email address" type="email" onChange={(e) => {setEmail(e.target.value);}} />
    </div> 
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
		</div>
		
    	<input name="" class="form-control" placeholder="Mobile number"  type="text" onChange={(e) => {setMobileNumber(e.target.value);}} />
    </div> 
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-user"></i> </span>
		</div>
		<select class="form-control" onChange={(e) => {setGender(e.target.value);}}>
			<option selected=""> Select Gender</option>
			<option>Male</option>
			<option>Female</option>
			<option>Other</option>
		</select>
	</div> 
  <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-building"></i> </span>
		</div>
		<select class="form-control" onChange={(e) => {setDegree(e.target.value);}}>
			<option selected=""> Select Degree</option>
      <option value="Bachelors">Bachelors</option>
      <option value="Masters">Masters</option>
      <option value="Phd">Phd</option>
		</select>
	</div> 
  <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-building"></i> </span>
		</div>
		<select class="form-control" onChange={(e) => {setGender(e.target.value);}}>
			<option selected=""> Select Branch</option>
      <option value="CH">Chemical</option>
            <option value="CSE">Computer Science</option>
            <option value="CE">Civil</option>
            <option value="EE">Electrical</option>
            <option value="ME">Mechanical</option>
            <option value="PH">Physics</option>
            <option value="MA">Maths</option>
            <option value="HS">Humanities and Social Sciences</option>
		</select>
	</div>      
          
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      </form>
      </article>
    </div>
  );
};

export default Application;




