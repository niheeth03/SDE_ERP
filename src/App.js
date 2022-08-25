import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Alumni_portal from "./alumni_portal/index";

import Alum_login from "./alumni_portal/pages/login"
import Alum_register from "./alumni_portal/pages/register"
import Alum_email from "./alumni_portal/pages/groupEmail/groupEmail"
import Alumni_payments from "./alumni_portal/pages/payments/index";

import International_admissions from "./international_admissions/index";
import International_Application from "./international_admissions/pages/Application/index";
import International_Login from "./international_admissions/pages/Login/index";
import International_Register from "./international_admissions/pages/Register/index";
import Application_Status from "./international_admissions/pages/Status/index";
import Offers from "./international_admissions/pages/Offers/index"
import Email from "./online_alerts/pages/groupEmail/groupEmail"
import Sms  from "./online_alerts/pages/sms/sms"



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

            <Route path='alumni_portal' element={<Alumni_portal/>} >
                <Route path='login' element={<Alum_login/>}/>
                <Route path='register' element={<Alum_register/>}/>
                <Route path='email' element={<Alum_email/>}/>
            </Route>
            <Route path='alumni_portal' element={<Alumni_portal/>}>
                <Route path='payments' element={<Alumni_payments/>}/>
             </Route>


            <Route path='international_admissions' element={<International_admissions/>}/>
            <Route path='international_admissions/application' element={<International_Application />}/>
            <Route path='international_admissions/login' element={<International_Login/>}/>
            <Route path='international_admissions/register' element={<International_Register/>}/>
            <Route path='international_admissions/application_status'  element={<Application_Status/>}/>
            <Route path='international_admissions/offers' element={<Offers/>}/>
            <Route path='online_alerts/email' element={<Email/>}/>
            <Route path='online_alerts/sms' element={<Sms/>}/>
        </Routes>


      </Router>
    </div>
  );
}

export default App;