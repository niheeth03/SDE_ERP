import axios from "axios";
import { useRef, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom";
//import Userprofile from "../../userprofile.js"
import './style.css'

const Home=()=>{


    return (
        <div className="home1 bg-white">
                <p><h1 class="mb-3">Online Alerts Portal</h1></p>
                <p></p><h5 class="mb-4">Choose any of the way to send an alert</h5><p/>
                <button type="button" class="btn btn-link btn-block btn-lg"><Link to="/online_alerts/email" className="link">Alert via e-mail</Link></button>
                <button type="button" class="btn btn-link btn-block btn-lg"><Link to="/online_alerts/sms" className="link">Send a SMS</Link></button>
        </div>
    )
}

export default Home;