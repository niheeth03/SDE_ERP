/* Admin can see pending applications and able to approve or reject it.  */

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
const handleAction=(flag,email,courseId)=>{
        let status="reject"
        if(flag)status="approve"
        const obj={
            email: email,
            courseId: courseId,
            status:  status
        };
        axios.post("./action",obj).then((response) => {
                            console.log(response.data);
                            //setUserData(response.data);
                        }).catch();
        
}
const Pending = () => {
  //  const userName = useRef("");
    const loggedIn = useRef(false);
//    const [userData,setUserData]=useState(null);
    const [Login, setLogin] = useState(false);
    const [applications,setApplications]=useState(null);
   // const [UserName, setUser] = useState(false);
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


                    let a, b;
                    if (x == "data") {
                        console.log("DATA" + res[x]);
                        console.log(JSON.stringify(res[x]));

                        for (let y in res[x]) { if (y == "user") { a = res[x][y] } else { b = res[x][y]; } };
                        console.log("a " + a);
                        console.log("b " + b);
                        axios.post("./display",{status:"pending"}).then((response) => {
                            console.log(response.data);
                            setApplications(response.data);
                        }).catch();
                    }
                }
            })
        }, []);
        return (
            <>
            <div>{applications && applications.map((data)=><Element firstName={data.firstName} middleName={data.middleName} lastName={data.lastName} email={data.email} gender courseName={data.courseName} courseId={data.courseId} status={data.status} />)}</div>
            </>
        )
    }



    const Element = (props) => {
    return (
        <div>
            <div>First Name: {props.firstName}  </div>
            <div>Middle Name: {props.middleName}   </div>
            <div>Last Name:  {props.lastName}   </div>
            <div>Email:    {props.email}      </div>
            <div>Gender:  {props.gender}        </div>
            <div>Degree:   {props.degree}       </div>
            <div>Branch:   {props.branch}       </div>
            <div>Country:   {props.country}       </div>
            <div> Course Id: {props.courseId}</div>
            <div> Course Name: {props.courseName}</div>
            <div> Status : {props.status} </div>
            <button type="submit" onClick={()=>handleAction(true,props.email,props.courseId)} >Approve</button>
            <button type="submit" onClick={()=>handleAction(false,props.email,props.courseId)} >Reject</button>
        </div>
    )
}
    export default Pending;