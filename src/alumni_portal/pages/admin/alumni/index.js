import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
//import Userprofile from "../../userprofile.js"
import './style.css'

const Alumni_info = () => {


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
    </div>
    )
}

export default Alumni_info;