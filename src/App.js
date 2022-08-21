import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import IALogin from "./international_admissions/pages/Login/Login";
import IARegister from "./international_admissions/pages/Register/Register";
import IAHome from "./international_admissions/pages/Home/Home"
import IAApplication from "./international_admissions/pages/Application/Application"
import IAOffers from "./international_admissions/pages/Offers/Offers"
import APLogin from "./alumni_portal/pages/Login/Login"
import APRegister from "./alumni_portal/pages/Register/Register"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/international_admissions_home' element={<IAHome/>} />
            <Route path='/international_admissions_applications' element={<IAApplication/>} />
            <Route path='/international_admissions_login' element={<IALogin/>} />
            <Route path='/international_admissions_register' element={<IARegister/>} />
            <Route path='/international_admissions_offers' element={<IAOffers/>} />
            <Route path ='/alumni_portal_login' element={<APLogin/>}/>
            <Route path ='/alumni_portal_register' element={<APRegister/>}/>
        </Routes>


      </Router>
    </div>
  );
}

export default App;
