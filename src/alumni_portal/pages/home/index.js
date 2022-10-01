import axios from "axios";
import { useRef, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom";
//import Userprofile from "../../userprofile.js"
import './style.css'

const Home=()=>{


    return (
        <div className="home1 bg-white">
                <p><h1 class="mb-3">IIT Tirupati's Alumni Portal</h1></p>
                <p></p><h5 class="mb-4">Welcome to all the alumni who are still persistent about the college ongoings</h5><p/>
                <button type="button" class="btn btn-link btn-lg"><Link to="/alumni_portal/register" className="link">Register</Link></button><br/>
                <p>Already an user?<button type="button" class="btn btn-link btn-lg"><Link to="/alumni_portal/login" className="link">Login</Link></button></p>
        </div>
    )
}

export default Home;