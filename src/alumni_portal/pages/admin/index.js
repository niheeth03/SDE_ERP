import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
  } from "react-router-dom";
  
  const Alumni_portal = () => {
    return (
      <div>
  
        <nav class="navbar navbar-expand-lg bg-white">
          <div class="container-fluid">
            
            <Link to="home" class="nav-link active">Home</Link>
            <Link to="login" class="nav-link-active">Login</Link>
            <Link to="alumni" class="nav-link active">Alumni</Link>
            <Link to="email" class="nav-link active">E-mail</Link>
            <Link to="payments" class="nav-link">Payments</Link>
          </div>
        </nav>
        
        <Outlet/>
  </div>
    );
  };
  
  export default Alumni_portal;
  