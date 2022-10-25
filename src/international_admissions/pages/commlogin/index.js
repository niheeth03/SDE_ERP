/*  Admin can navigate to admin login and applicant can navigate to applicant login page */

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
  } from "react-router-dom";
  
  const International_Adm_Commlogin = () => {
    return (
      <div>
  
        {/* <nav class="navbar navbar-expand-lg bg-white">
          <div class="container-fluid">
            
            <Link to="home" class="nav-link active">Home</Link>
            <Link to="register" class="nav-link active">Register</Link>
            <Link to="login" class="nav-link active">Login</Link>
            <Link to="payments" class="nav-link">Payments</Link>
          </div>
        </nav> */}

        <div className="contain">
            <button type="button" class="btn btn-outline-primary" style={{padding: 5, margin: 10}}><Link to="../admin/login" class="nav-link active">Admin Login</Link></button>
            <button type="submit" class="btn btn-outline-primary" style={{padding: 5, margin: 10}}><Link to="../user/login" class="nav-link active">User Login</Link></button>
        </div>
        <Outlet/>
  </div>
    );
  };
  
  export default International_Adm_Commlogin