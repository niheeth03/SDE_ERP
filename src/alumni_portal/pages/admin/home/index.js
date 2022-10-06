import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
//import Userprofile from "../../userprofile.js"
import './style.css'

const Home = () => {


    return (
    <div>
        <nav class="navbar navbar-expand-lg bg-white">
            <div class="container-fluid">

                <Link to="../home" class="nav-link active">Home</Link>
                <Link to="../alumni" class="nav-link active">Alumni</Link>
                <Link to="../email" class="nav-link active">E-mail</Link>
                <Link to="../payments" class="nav-link">Payments</Link>
                <Link to="" class="nav-link">Logout</Link>
            </div>
        </nav>
        <div className="home1 bg-white">
            <p><h1 class="mb-3">IIT Tirupati's Alumni Portal</h1></p>
            <p></p><h5 class="mb-4">ADMIN FOR THE ALUMNI PORTAL</h5><p />

        </div>
    </div>
    )
}

export default Home;