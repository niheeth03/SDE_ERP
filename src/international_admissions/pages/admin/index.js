import { CenturyView } from "react-calendar";
import { BrowserRouter as Router, Routes, Route, Link ,Outlet} from "react-router-dom";

const International_admissions_admin = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-white">
        <div class="container-fluid">
        <Link to='.../../home' class="nav-link">ERP</Link>
          <Link to="addcourse" class="nav-link active">Add Course</Link>
          <Link to="pending_application" class="nav-link active">Pending Applications</Link>
          <Link to="approved" class="nav-link active">Approved</Link>
          <Link to="rejected" class="nav-link active">Rejected</Link>
        </div>
      </nav>
      {/* Routes must be changes */}
      
      {/* <div style={{textAlign: 'center',padding: '20% 0'}}>
        <h1 class="text-dark bg-light"  >
          About International Admissions
        </h1>
        <p class="text-dark center bg-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae magnam, ea earum voluptas voluptatem soluta odit facere, totam natus eligendi! Ullam est inventore modi nam recusandae eum necessitatibus tempore!
      </p>
      </div> */}
      <Outlet/>
    </div>
    
  );
};

export default International_admissions_admin