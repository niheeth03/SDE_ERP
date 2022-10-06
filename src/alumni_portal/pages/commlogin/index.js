import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
  } from "react-router-dom";
  
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
        <div>
            <Link to="../admin/login" class="nav-link active">Admin Login</Link>
            <Link to="../alumni/login" class="nav-link active">Alumni Login</Link>
        </div>
        <Outlet/>
  </div>
    );
  };
  
  export default Alumni_portal_Commlogin;
  