/* admin can able to send sms to all the users */

import React, { useState } from "react";
import axios from 'axios'
 
const Sms = () => {
  
  const [msg,setMsg] = useState('');
  const [to,setTo]=useState('');
  const [subject,setSubject]=useState('');
  const [description,setDescription]=useState('');



  const onSubmit = async(e) => {
    console.log("Sms");
    const user={
        to: to,
        subject:subject,
      };
    await axios.post("/sms",user);
    
    
  };
  return (
    <div className="container bg-light">
      <div class="row ">  
      
       <div className="mx-auto shadow p-5 ">
        <h4 className="text-center mb-2">Send Message </h4>
           <p class="mb-3 mt-2" style={{color:"green",marginLeft:"57px"}}><b>{msg}</b></p>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="To"
              name="to"
              onChange={(e)=>{setTo(e.target.value);}}
            />
          </div>
          <div className="form-group  mb-4 ">
            <textarea rows="10" cols="100"
              type="text"
              className="form-control form-control-lg"
              placeholder="Subject"
              name="subject"
              onChange={(e)=>{setSubject(e.target.value);}}
              value={subject}
            />
          </div>
          
          <div className="d-flex align-items-center form-group  mb-5 ">
          <button onClick={onSubmit} className="btn btn-primary btn-block " style={{marginLeft:"100px"}}>Send Message</button>
          </div>
      </div>
    </div>
  </div>  
  );
};
 
export default Sms;