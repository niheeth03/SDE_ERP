import { CenturyView } from "react-calendar";
import { BrowserRouter as Router, Routes, Route, Link ,Outlet} from "react-router-dom";

const Online_alerts = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
        <Link to='../home' class="nav-link">ERP</Link>
          <Link to="home" class="nav-link active">Home</Link>
          <Link to="email" class="nav-link active">E-mail</Link>
          <Link to="sms" class="nav-link active">SMS</Link>
          
        </div>
      </nav>
      <Outlet/>
    </div>
    
  );
};

export default Online_alerts
