import { CenturyView } from "react-calendar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const International_admissions = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="">International Admissions</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="international_admissions/login">Login</a>
              <a class="nav-link" href="international_admissions/register">Register</a>
            </div>
          </div>
        </div>
      </nav>
      {/* Routes must be changes */}
      
      <div style={{textAlign: 'center',padding: '20% 0'}}>
        <h1 class="text-dark bg-light"  >
          About International Admissions
        </h1>
        <p class="text-dark center bg-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae magnam, ea earum voluptas voluptatem soluta odit facere, totam natus eligendi! Ullam est inventore modi nam recusandae eum necessitatibus tempore!
      </p>
      </div>
    </div>
  );
};

export default International_admissions
