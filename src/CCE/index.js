import { CenturyView } from "react-calendar";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";

const cce = () => {
  return (
    <div>

      <nav class="navbar navbar-expand-lg bg-white">
        <div class="container-fluid">
          
          <Link to="" class="nav-link">Home</Link>
          <Link to="Registration" class="nav-link active">Register</Link>
          <Link to="Payments" class="nav-link">Payments</Link>
          <Link to="certificates" class="nav-link active">Certificate</Link>
        </div>
      </nav>
      
      <Outlet/>

    
</div>
  );
};

export default cce
