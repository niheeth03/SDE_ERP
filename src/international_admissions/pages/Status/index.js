import {

    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
} from "react-router-dom";
import React, { useState,useEffect,useRef } from 'react';
import{useNavigate} from 'react-router-dom';
import axios from "axios";

const Status=()=>{
    const userName = useRef("");
    const loggedIn = useRef(false);
    const [Login, setLogin] = useState(false);
    const [UserName, setUser] = useState(false);
        axios.defaults.withCredentials = true;
        useEffect(() => {
        console.log("In use effect")
        axios.get("./login").then(
            (res) => {
                console.log("RESPONSE " + res)
                console.log(res);
                console.log(res[0]);
                console.log();
              
                for (let x in res) {
              
                  
                    let a,b;
                    if (x == "data") {
                        console.log("DATA" + res[x]);
                        console.log(JSON.stringify(res[x]));

                        for (let y in res[x]) { if (y == "user") {a=res[x][y]} else {b=res[x][y];} };
                        console.log("a "+a);
                        console.log("b "+b);
                        const userData={
                        email: a,
                    }
                       console.log("user\n"+userData.email);
                       axios.post("/international_admissions/status",userData).then((res)=>{return (
    <>
    <Element coursename="Computer Science"  courseid="1235" date="23-8-2022" status="pending"/>
    <Element coursename="Computer Science"  courseid="1235" date="23-8-2022" status="pending"/>
    </>
    )}).catch();
                    }
                    
                    
                    
                    


                }
            }).catch(console.log("errorrrr"));
    }, [])
     if (Login) {
    
     }
}

const Element=(props)=>{
    return (
        <>
        <div className="row bg-transparent">
            <span>Application</span>
        </div>
        <div className="row bg-light"> 
        <span className="text">Application submitted</span>  
        <span className="courseName"> {props.coursename} </span>
        <span className="courseId">Course Id: {props.courseid}</span> 
        <span className="date">Date: {props.date}</span>  
        <button>Withdraw</button> 
        <span className="status">{props.status} </span>
        </div>
        
        </>
    )
}

export default Status;