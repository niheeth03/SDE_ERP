import { CenturyView } from "react-calendar";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";

const cce = () => {
  return (
    <div>

      <nav class="navbar navbar-expand-lg bg-white">
        <div class="container-fluid">
        <Link to='../../home' class="nav-link">ERP</Link>
        <Link to="../home" class="nav-link active">Home</Link>
        </div>
      </nav>
      
      <Outlet/>

    
</div>
  );
};

export default cce
