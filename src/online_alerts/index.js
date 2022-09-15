import { CenturyView } from "react-calendar";
import { BrowserRouter as Router, Routes, Route, Link ,Outlet} from "react-router-dom";

const Online_alerts = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <Link to="" class="nav-link">Home</Link>
          <Link to="email" class="nav-link active">E-mail</Link>
          <Link to="sms" class="nav-link active">SMS</Link>
          
        </div>
      </nav>
      <Outlet/>
    </div>
    
  );
};

export default Online_alerts
