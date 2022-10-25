import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import "./style.css";
const Ticketing_System_Commlogin = () => {
  return (
    <div>

      <div className="contain">
          <button type="button" class="btn btn-outline-primary" style={{padding: 5, margin: 10}}><Link to="../admin/login" class="nav-link active">Admin Login</Link></button>
          <button type="submit" class="btn btn-outline-primary" style={{padding: 5, margin: 10}}><Link to="../user/login" class="nav-link active">User Login</Link></button>
      </div>
      <Outlet/>
</div>
  );
};

export default Ticketing_System_Commlogin;
