import React from 'react'
import axios from "axios";
import { useRef, useState, useEffect } from "react";


const Application=()=>{
const [firstname,setFirstname]=useState("");
const [lastname,setLastname]=useState("");
const [email,setEmail]=useState("");
const [gender,setGender]=useState("");
const [degree,setDegree]=useState("");
const [branch,setBranch]=useState("");
const [mobileNumber,setMobileNumber]=useState("");


const handleSubmit=()=>{
    const newStudent={
      firstname: firstname,
      lastname: lastname,
      email: email,
      gender:gender,
      degree: degree,
      branch: branch,
    };
    console.log("Were");
    axios.post("/register",newStudent);
  }


return (
    <div className="center">
        <h1>Register</h1>
        <div className="form">
        <div className="txt_field">
        <input type="text"  onChange={(e)=>{setFirstname(e.target.value);}}/>
        <span></span>
        <label>First Name </label>
        </div>
         <div className="txt_field">
        <input type="text"  onChange={(e)=>{setLastname(e.target.value);}}/>
        <span></span>
        <label>Last Name </label>
        </div>
        <div className="txt_field">
        <input type="text"  onChange={(e)=>{setMobileNumber(e.target.value);}}/>
        <span></span>
        <label>Mobile Number </label>
        </div>
        <div className="txt_field">
        <input type="email"  onChange={(e)=>{setEmail(e.target.value);}}/>
        <span></span>
        <label>Email</label>
        </div>
         <label>
          Gender:
          <select  onChange={(e)=>{setGender(e.target.value);}}>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        </label>
         <label>
          Degree:
          <select  onChange={(e)=>{setDegree(e.target.value);}}>
            <option value="Bachelors">Bachelors</option>
            <option value="Masters">Masters</option>
            <option value="Phd">Phd</option>
          </select>
        </label>
         <label>
          Field of Study:
          <select  onChange={(e)=>{setBranch(e.target.value);}}>
            <option value="CH">Chemical Engineering</option>
            <option value="CSE">Computer Science and Engineering</option>
            <option value="CE">Civil Engineering</option>
            <option value="EE">Electrical Engineering</option>
            <option value="ME">Mechanical Engineering</option>
          </select>
        </label>
        <button type="submit"  onClick={handleSubmit}>Submit</button>
      </div>
    </div>
)
}

export default Application;
