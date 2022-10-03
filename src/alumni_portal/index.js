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
          
          <Link to="" class="nav-link">Home</Link>
          <Link to="register" class="nav-link active">Register</Link>
          <Link to="login" class="nav-link active">Login</Link>
          <Link to="payments" class="nav-link">Payments</Link>
        </div>
      </nav>
      <Outlet/>
      <h2>Welcome to all the alumni who are still persistent about the college on goings</h2>
</div>
  );
};

export default Alumni_portal;
