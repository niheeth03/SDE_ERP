/*Applicants can able to see their application status in this page */

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

const Status = () => {
    const userName = useRef("");
    const loggedIn = useRef(false);
    const [userData,setUserData]=useState(null);
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


                    let a, b;
                    if (x == "data") {
                        console.log("DATA" + res[x]);
                        console.log(JSON.stringify(res[x]));

                        for (let y in res[x]) { if (y == "user") { a = res[x][y] } else { b = res[x][y]; } };
                        console.log("a " + a);
                        console.log("b " + b);
                        const userData = {
                            email: a,
                        }
                        console.log("user\n" + userData.email);
                        axios.post("./fetchdata", userData).then((response) => {
                            console.log(response.data);
                            setUserData(response.data);
                        }).catch();
                    }
                }
            })
        }, []);
        return (
            <>
            <div>{userData&&userData.map((data)=><Element courseName={data.courseName} courseId={data.courseId} status={data.status} />)}</div>
            </>
        )
    }



    const Element = (props) => {
    return (
        <div>
            <div> Course Id: {props.courseId}</div>
            <div> Course Name: {props.courseName}</div>
            <div> Status : {props.status} </div>
        </div>
    )
}
    export default Status;
