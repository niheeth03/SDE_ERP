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
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="">IITT_Alumni</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="alumni_portal/login">Login</a>
              <a class="nav-link active" aria-current="page" href="alumni_portal/register">Register</a>
              <a class="nav-link" href="alumni_portal/payments">Payments</a>
            </div>
          </div>
        </div>
      </nav>
      <nav>
        <Link to="">Home </Link>
        <Link to="payments">Payments</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Alumni_portal;
