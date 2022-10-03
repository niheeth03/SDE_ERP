import axios from "axios";
import { useRef, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom";
//import Userprofile from "../../userprofile.js"



const Home=()=>{


    return (
        <>
            <div>

                <nav class="navbar navbar-expand-lg bg-white">
                <div class="container-fluid">
                <Link to='../../home' class="nav-link-active">ERP</Link>
                <Link to='../../home' class="nav-link-active">Home</Link>
                <Link to='../../home' class="nav-link-active">Certificate</Link>
                <Link to='../../home' class="nav-link-active">Shortlist</Link>
                <Link to='../../home' class="nav-link-active">Statistics</Link>
                </div>
                
               </nav>
            </div>
        </>
    )
}

export default Home;