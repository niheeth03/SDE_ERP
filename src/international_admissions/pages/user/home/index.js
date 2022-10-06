import axios from "axios";
import { useRef, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom";
//import Userprofile from "../../userprofile.js"
import './style.css'

const Home=()=>{


    return (
        <div className="home1 bg-light">
                <p><h1 class="mb-3">International Admissions Portal</h1></p>
                <p></p><h5 class="mb-4">Welcome to all the students!!</h5><p/>
                <button type="button" class="btn btn-link btn-lg"><Link to="/international_admissions/register" className="link">Register</Link></button><br/>
                <p>Already an user?<button type="button" class="btn btn-link btn-lg"><Link to="/international_admissions/login" className="link">Login</Link></button></p>
        </div>
    )
}

export default Home;