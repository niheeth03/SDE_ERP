/*Main page displayed to the admin when logged in */

import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { Link, Navigate } from "react-router-dom";
//import Userprofile from "../../userprofile.js"
import './style.css'

const Home = () => {
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState(false);

    const checkAuth = async() => {
        await axios
            .get("./login")
            .then((res) => {
                console.log("RESPONSE" + res);
                for (let x in res) {
                    if (x == "data") {
                        console.log("DATA" + res[x]);
                        console.log(JSON.stringify(res[x]));

                        for (let y in res[x]) {
                            if (y == "user") 
                                setUser(res[x][y]);
                            else 
                                setLogin(res[x][y]);
                        }
                    }
                }
                console.log(res["data"]["user"]);
            })
    }

    useEffect(() => {
        checkAuth();
    }, []);
    console.log(login);
    
    if (login) {
        return (
            <div>
                <nav class="navbar navbar-expand-lg bg-white">
                    <div class="container-fluid">

                        <Link to="../home" class="nav-link active">Home</Link>
                        <Link to="../alumni" class="nav-link active">Alumni</Link>
                        <Link to="../email" class="nav-link active">E-mail</Link>
                        <Link to="" class="nav-link">Logout</Link>
                    </div>
                </nav>
                <div className="home1 bg-white">
                    <p><h1 class="mb-3">IIT Tirupati's Alumni Portal</h1></p>
                    <p></p><h5 class="mb-4">ADMIN FOR THE ALUMNI PORTAL</h5><p />

                </div>
            </div>
        );
    }
    // else
    //     return(<Navigate to="../login" />);
    
};

export default Home;