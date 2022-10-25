import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
  } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div>
        {/* <nav class="navbar navbar-expand-lg bg-white">
          <div class="container-fluid">
            <Link to="../../home" class="nav-link-active">
              ERP
            </Link>
            <Link to="../../home" class="nav-link-active">
              Home
            </Link>
            <Link to="../application" class="nav-link-active">
              Ticket Status
            </Link>
          </div>
        </nav> */}
        <Outlet/>
      </div>
      
    </>
  );
};

export default Home;
