import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Alumni_portal from "./alumni_portal/index";
import Alum_login from "./alumni_portal/pages/login";
import Alum_register from "./alumni_portal/pages/register";
// import Alumni_payments from "./alumni_portal/pages/payments/index";
import International_admissions from "./international_admissions/index";
import International_Application from "./international_admissions/pages/Application/index";
import International_admissions_register from "./international_admissions/pages/Register/index";
import International_admissions_login from "./international_admissions/pages/Login/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            {/* <Route path='alumni_portal' element={<Alumni_portal/>}>
                <Route path='payments' element={<Alumni_payments/>}/>
             </Route> */}
            <Route path='alumni_portal/login' element={<Alum_login/>}/>
            <Route path='alumni_portal/register' element={<Alum_register/>}/>
            <Route path='international_admissions' element={<International_admissions/>}/>
            <Route path='international_admissions/application' element={<International_Application />}/>
            <Route path='international_admissions/register' element={<International_admissions_register />}/>
            <Route path='international_admissions/login' element={<International_admissions_login />}/>
        </Routes>


      </Router>
    </div>
  );
}

export default App;