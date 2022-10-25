/*Alumni can see their details filled in in this page */

import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
//import Userprofile from "../../userprofile.js"
import "./style.css";

const Profile = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-white">
        <div class="container-fluid">
          <Link to="../home" class="nav-link active">
            Home
          </Link>
          {/* <Link to="register" class="nav-link active">Register</Link>
          <Link to="login" class="nav-link active">Login</Link> */}
          <Link to="../payments" class="nav-link">
            Payments
          </Link>
          <Link to="../profile" class="nav-link active">
            Profile
          </Link>
        </div>
      </nav>
    </div>
  );  
};

export default Profile;

//  Userprofile.setUser(res.data[0].email);
