/*This page is used to display all the information about the registered alumni */

import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
//import Userprofile from "../../userprofile.js"
import './style.css'

const Alumni_info = () => {

    const [alumni, setAlumni] = useState([]);
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState(false);

    const fetchData = async () => {
        const resp = await axios.get("./fetchdetails");
        console.log(resp);
        const data = await resp.data;
        setAlumni(data);
    }

    useEffect(() => {
        axios
            .get("./login")
            .then((res) => {
                console.log("RESPONSE" + res);
                for (let x in res) {
                    if (x == "data") {
                        console.log("DATA" + res[x]);
                        console.log(JSON.stringify(res[x]));

                        for (let y in res[x]) {
                            if (y == "user") setUser(res[x][y]);
                            else setLogin(res[x][y]);
                        }
                    }
                }
                console.log(res["data"]["user"]);
            });
        fetchData()
    }, []);

    if (login) {
        return (
            <div className="allFetch">
                <nav class="navbar navbar-expand-lg bg-white">
                    <div class="container-fluid">

                        <Link to="../home" class="nav-link active">Home</Link>
                        <Link to="../alumni" class="nav-link active">Alumni</Link>
                        <Link to="../email" class="nav-link active">E-mail</Link>
                        <Link to="" class="nav-link">Logout</Link>
                    </div>
                </nav>
                <div>
                    {alumni.map((alumni) => (
                        <div style={{ display: 'inline-block', width: '45%' }}>
                            <div style={{ padding: '5%' }}>
                                <div class="card customcard" style={{ marginTop: '1%', backgroundColor: '#f1f0f5' }}>
                                    <div class="card-body">
                                        <h5 class="card-title" >{alumni.name}</h5>
                                        <ul class="cardlist list-group list-group-flush">
                                            <li class="list-group-item">Email : {alumni.email}</li>
                                            <li class="list-group-item">Gender : {alumni.gender}</li>
                                            <li class="list-group-item">Roll Number : {alumni.rollnumber}</li>
                                            <li class="list-group-item">Batch : {alumni.batch}</li>
                                            <li class="list-group-item">Degree : {alumni.degree}</li>
                                            <li class="list-group-item">Branch : {alumni.branch}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        );
    }
}

export default Alumni_info;