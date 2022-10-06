import { CenturyView } from "react-calendar";
import { BrowserRouter as Router, Routes, Route, Link ,Outlet} from "react-router-dom";

const International_admissions = () => {
  return (
    // <div>
    //   <nav class="navbar navbar-expand-lg bg-white">
    //     <div class="container-fluid">
    //     <Link to='../home' class="nav-link">ERP</Link>
    //       <Link to="home" class="nav-link active">Home</Link>
    //       <Link to="register" class="nav-link active">Register</Link>
    //       <Link to="login" class="nav-link active">Login</Link>
    //       <Link to="application" class="nav-link active">Application</Link>
    //       <Link to="application_status">Application Status</Link>
    //     </div>
    //   </nav>
      
      <Outlet/>
    
    
  );
};

export default International_admissions
