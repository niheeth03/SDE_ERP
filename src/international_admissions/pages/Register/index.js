import React, { useState,useEffect } from 'react';
import{Link,useNavigate} from 'react-router-dom'
import './Register.css'
import moment, { calendarFormat } from 'moment';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios'

function Register() {

  const [username,setUsername] = useState('') ;
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [cPasswordClass, setCPasswordClass] = useState('form-control');
  const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);
  const [country,setCountry] =useState('');
  const [countryCode,setCountryCode]=useState(false);
  const [mobile,setMobile] =useState("");
  const [date,setDate] =useState('');
  const Navigate=useNavigate()
  const handleSubmit=async(e)=>{
    
    
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

const onDateChange = (newDate) => {
  let Date=newDate.toString();
  setDate(Date);
  console.log(newDate);
}





  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form action="" className="registerForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" className="registerInput" placeholder="Enter Username...."   onChange={(e)=>setUsername(e.target.value)}></input>
            <label>Email</label>
            <input type="email" className="registerInput" placeholder="Enter your Email...." onChange={(e)=>setEmail(e.target.value)}></input>
            <p>{this.state.selectedDate.format('YYYY-MM-DD')}</p>
            <div className='calendar-container'>
                <Calendar  />
            </div>
            
            <label for="cars">Gender</label>
            <select name="cars" id="cars">
                <option value="volvo">Male</option>
                <option value="saab">Female</option>
                <option value="mercedes">Others</option>
                
            </select>

            <label>Country of Citizenship</label>
            <input type="email" className="registerInput" placeholder="Enter your Country...." onChange={(e)=>setCountry(e.target.value)}></input>
            <label>Country Code</label>
            <input type="email" className="registerInput" placeholder="Enter your Country Code...." onChange={(e)=>setCountryCode(e.target.value)}></input>
            <label>Mobile Number</label>
            <input type="email" className="registerInput" placeholder="Enter your Mobile Number...." onChange={(e)=>setMobile(e.target.value)}></input>
            <label>Password</label>
            <input type="password" className="registerInput" placeholder="Enter your Password...." value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
            <label>Confirm Password</label>
            <input type="password" className="registerInput" placeholder="Enter your Password again...." value={cPassword} onChange={handleCPassword}></input>
            {showErrorMessage && isCPasswordDirty ? <div> Passwords did not match </div> : ''}
            <button className="registerButton" type="submit">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link to='/login' className="link">Login</Link>
      </button>
    </div>
  );
}

export default Register;