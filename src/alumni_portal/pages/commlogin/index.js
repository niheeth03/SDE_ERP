import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
  } from "react-router-dom";
  import "./style.css";
  const Alumni_portal_Commlogin = () => {
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
            <button type="button" class="btn btn-outline-primary"><Link to="../admin/login" class="nav-link active">Admin Login</Link></button><br/>
            <button type="submit" class="btn btn-outline-primary"><Link to="../alumni/login" class="nav-link active">Alumni Login</Link></button>
        </div>
        <Outlet/>
  </div>
    );
  };
  
  export default Alumni_portal_Commlogin;
  