import axios from "axios";
import { useRef, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom";
//import Userprofile from "../../userprofile.js"
import './style.css'

const Home=()=>{


    return (
        <div className="home0">
                <p><h1 class="mb-3">IIT Tirupati's ERP Website</h1></p>
                <button type="button" class="btn btn-link btn-block btn-lg" ><Link to="/alumni_portal/home" className="link">Alumni Portal</Link></button>
                <button type="button" class="btn btn-link btn-block btn-lg" ><Link to="/international_admissions/home" className="link">International Admissions</Link></button>
                <button type="button" class="btn btn-link btn-block btn-lg" ><Link to="/cce/home" className="link">Center for Continuing Education(CCE)</Link></button>
                <button type="button" class="btn btn-link btn-block btn-lg" ><Link to="/online_alerts/home" className="link">Online Alerts</Link></button>
        </div>
    )
}

export default Home;