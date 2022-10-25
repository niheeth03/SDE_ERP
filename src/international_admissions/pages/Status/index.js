

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
                        axios.post("./fetchdata", userData).then((res) => {
                            
                        }).catch();
                    }
                }
            })
        }, []);
        return (
            <>
                {/* <Element coursename="Computer Science" courseid="1235" date="23-8-2022" status="pending" />
                <Element coursename="Computer Science" courseid="1235" date="23-8-2022" status="pending" /> */}
                hello
            </>
        )
    }
    export default Status;