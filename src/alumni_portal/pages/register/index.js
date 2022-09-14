import React from 'react'
import axios from "axios";
import { useRef, useState, useEffect } from "react";


const Register=()=>{
const [name,setName]=useState("");
const [rollNumber,setRollNumber]=useState("");
const [email,setEmail]=useState("");
const [batch,setBatch]=useState("");
const [gender,setGender]=useState("");
const [degree,setDegree]=useState("");
const [branch,setBranch]=useState("");
const [occupation,setOccupation]=useState("");
const [password, setPassword] = useState('');
const [cPassword, setCPassword] = useState('');
const [showErrorMessage, setShowErrorMessage] = useState(false);
const [cPasswordClass, setCPasswordClass] = useState('form-control');
const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);
const handleSubmit=()=>{
    const newStudent={
      name: name,
      rollnumber:rollNumber,
      email: email,
      batch:batch,
      gender:gender,
      degree: degree,
      branch: branch,
      occupation: occupation,
      password: password
    };
    console.log("Were");
    axios.post("/alumni/register",newStudent);
  }

const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setIsCPasswordDirty(true);
}

useEffect(() => {
  if (isCPasswordDirty) {
      if (password === cPassword) {
          setShowErrorMessage(false);
          setCPasswordClass('form-control is-valid')
      } else {
          setShowErrorMessage(true)
          setCPasswordClass('form-control is-invalid')
      }
  }
}, [cPassword])

return (
    <div className="center">
        <h1>Register</h1>
        <div className="form">
        <div className="txt_field">
        <input type="text"  onChange={(e)=>{setName(e.target.value);}}/>
        <span></span>
        <label>Name </label>
        </div>
        <div className="txt_field">
        <input type="text"  onChange={(e)=>{setRollNumber(e.target.value);}}/>
        <span></span>
        <label>Enrollment Number </label>
        </div>
        <div className="txt_field">
        <input type="email"  onChange={(e)=>{setEmail(e.target.value);}}/>
        <span></span>
        <label>Email</label>
        </div>
        <div className="txt_field">
        <input type="text"  onChange={(e)=>{setBatch(e.target.value);}}/>
        <span></span>
        <label>Year of Enrollment</label>
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
        <label>Occupation </label>
        <input type="text" placeholder="Enter your occupation" onChange={(e)=>{setOccupation(e.target.value);}}/>
        <label>Password</label>
        <input type="password" placeholder="Enter your Password" value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
        <label>Confirm Password</label>
        <input type="password" placeholder="Enter your Password again...." value={cPassword} onChange={handleCPassword}></input>
        {showErrorMessage && isCPasswordDirty ? <div> Passwords did not match </div> : ''}
        <button type="submit"  onClick={handleSubmit}>Submit</button>
      </div>
    </div>
)
}

export default Register;
