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
      <nav>
        <Link to="" style={{color: 'white', margin: '2% 2%', fontSize: '125%', textDecoration: 'none', postion: 'relative', float: 'right'}}>Home </Link>
        <Link to="payments" style={{color: 'white', margin: '2% 2%', fontSize: '125%', textDecoration: 'none', postion: 'relative', float: 'right'}}>Payments</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Alumni_portal;
