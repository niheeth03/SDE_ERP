import axios from "axios";
import { useRef, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom";
//import Userprofile from "../../userprofile.js"
import './style.css'

const Home=()=>{


    return (
        <div className="home1">
                <p><h1 class="mb-3">CCE Portal</h1></p>
                <p></p><h5 class="mb-4">Here you can apply for Short-term courses, GIAN courses, Workshops and Conferences. Please register in the portal before you apply.</h5><p/>
                <button type="button" class="btn btn-link btn-block btn-lg"><Link to="/cce/register" className="link">Register for CCE</Link></button>
                <button type="button" class="btn btn-link btn-block btn-lg"><Link to="/cce/application" className="link">Apply to a short-term courses/GIAN Courses/Workshops/Conferences.</Link></button>
                <button type="button" class="btn btn-link btn-block btn-lg"><Link to="/cce/payments" className="link">Payments</Link></button>

        </div>
    )
}

export default Home;