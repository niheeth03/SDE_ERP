import axios from "axios";
import { useRef, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom";
//import Userprofile from "../../userprofile.js"
import './style.css'

const Home=()=>{


    return (
        <>
            <div>

                <nav class="navbar navbar-expand-lg bg-white">
                <div class="container-fluid">
                <Link to='../../home' class="nav-link-active">ERP</Link>
                
                </div>
                
               </nav>
            </div>

        <div className="home1 bg-white">
                <p><h1 class="mb-3">CCE Portal</h1></p>
                <p></p><h5 class="mb-4">Here you can apply for Short-term courses, GIAN courses, Workshops and Conferences. Please register in the portal before you apply.</h5><p/>

                <button type="button" class="btn btn-link btn-block btn-lg"><Link to="/cce/admin/login" className="link">Admin Login</Link></button>
                <button type="button" class="btn btn-link btn-block btn-lg"><Link to="/cce/user/login" className="link">User Login</Link></button>

        </div>
        </>
    )
}

export default Home;
