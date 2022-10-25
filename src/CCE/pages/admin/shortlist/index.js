/*Admin can shortlist the applied candidates based on their achievements */


import {

    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
} from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { data } from "jquery";


const Pending = () => {
  //  const userName = useRef("");
    const loggedIn = useRef(false);
    const [Login, setLogin] = useState(false);
    const [userData,setUserData]=useState(null);
    const [applications,setApplications]=useState(null);
   const [UserName, setUser] = useState(false);
    axios.defaults.withCredentials = true;
    useEffect(() => {
        console.log("In use effect")
        axios.get("cce/admin/login").then(
            (res) => {
                console.log("RESPONSE " + res)
                console.log(res);
                console.log(res[0]);
                console.log();

                for (let x in res) {


                    let a, b;
                    if (x == "data") {
                        console.log("DATA" + res[x]);
                        console.log(JSON.stringify(res[x]));

                        for (let y in res[x]) { if (y == "user") { a = res[x][y] } else { b = res[x][y]; } };
                        console.log("a " + a);
                        console.log("b " + b);
                        axios.post("cce/admin/cceAdminDisplay").then((response) => {
                            console.log(response.data);
                            setApplications(response.data);
                        }).catch();
                    }
                }
            })
        }, []);
        
        return (
            <>
            <div>{applications&&applications.map((data)=><Element name={data.name}  email={data.email} degree={data.degree} department={data.department}  courseName={data.courseName} courseId={data.courseId} status={data.status} />)}</div>
            </>
        )
    }



    const Element = (props) => {
        const [userData,setUserData]=useState(null);
        const handleAction=(flag,email,courseId)=>{
            let status="reject"
            if(flag)status="approve"
            const obj={
                email: email,
                courseId: courseId,
                status:  status
            }
            axios.post("cce/admin/action",obj).then((response) => {
                                console.log(response.data);
                                setUserData(response.data);
            }).catch();
            if(status==="approve"){
                axios.post("cce/admin/participants",obj) 
            }
            
        }
    return (
        <div>
            <div>First Name: {props.name}  </div>
            <div>Email:    {props.email}      </div>
            <div>Degree:   {props.degree}       </div>
            <div>Branch:   {props.department}       </div>
            <div> Course Id: {props.courseId}</div>
            <div> Course Name: {props.courseName}</div>
            <div> Status : {props.status} </div>
            <button type="submit" onClick={()=>handleAction(true,props.email,props.courseId)} >Approve</button>
            <button type="submit" onClick={()=>handleAction(false,props.email,props.courseId)} >Reject</button>
        </div>
    )
}
    export default Pending;