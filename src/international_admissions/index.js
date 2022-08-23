import { CenturyView } from "react-calendar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const International_admissions = () => {
  return (
    <div>


      <Link to="login" style={{color: 'white', margin: '2% 3%', fontSize: '125%', textDecoration: 'none', postion: 'relative', float: 'right'}}>Login</Link> 
      <Link to="register" style={{color: 'white', margin: '2% 0', fontSize: '125%', textDecoration: 'none', postion: 'relative', float: 'right'}}>Register</Link> 

      {/* Routes must be changes */}
      <div style={{textAlign: 'center', color: 'white', padding: '20% 0'}}>
        <h1 style={{fontSize: '300%'}}>
          About International Admissions
      </h1>
        <p style={{fontSize: '120%', padding: '0 20%'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae magnam, ea earum voluptas voluptatem soluta odit facere, totam natus eligendi! Ullam est inventore modi nam recusandae eum necessitatibus tempore!
      </p>
      </div>
    </div>
  );
};

export default International_admissions
