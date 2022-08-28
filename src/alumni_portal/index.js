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
<nav class="navbar navbar-light justify-content-center " >
<ul class="nav justify-content-center" >
  <li class="nav-item"  >
    <a class="nav-link active"  href="#">Home</a>
  </li>
  <li class="nav-item"  >
    <a class="nav-link" href="#">Payments</a>
  </li>
  
</ul>
</nav>
    

      <Outlet />
    </div>
  );
};

export default Alumni_portal;
