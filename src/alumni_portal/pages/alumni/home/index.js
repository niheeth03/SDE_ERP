/* Alumni navigates to different pages  */

import axios from "axios";
import { useRef, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom";
//import Userprofile from "../../userprofile.js"
import './style.css'

const Home=()=>{


    return (
        <div>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            
            <Link to="../home" class="nav-link active">Home</Link>
            {/* <Link to="register" class="nav-link active">Register</Link>
            <Link to="login" class="nav-link active">Login</Link> */}
            <Link to="../payments" class="nav-link">Payments</Link>
            <Link to="../profile" class="nav-link active">Profile</Link>
          </div>
        </nav>
        <div className="home1">
            
                <p><h1 class="mb-3">IIT Tirupati's Alumni Portal</h1></p>
                <p></p><h5 class="mb-4">Welcome to all the alumni who are still persistent about the college on goings</h5><p/>
                {/* <button type="button" class="btn btn-link btn-lg"><Link to="/alumni_portal/alumni/register" className="link">Register</Link></button><br/>
                <p><button type="button" class="btn btn-link btn-lg"><Link to="/alumni_portal/alumni/login" className="link">Login</Link></button></p> */}
        </div>
        </div>
    )
}

export default Home;