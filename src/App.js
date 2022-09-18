import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Alumni_portal from "./alumni_portal/index";

import Alum_login from "./alumni_portal/pages/login"
import Alum_register from "./alumni_portal/pages/register"
import Alum_email from "./alumni_portal/pages/groupEmail/groupEmail"
import Alumni_payments from "./alumni_portal/pages/payments";

import International_admissions from "./international_admissions/index";
import International_Application from "./international_admissions/pages/Application/index";
import International_Login from "./international_admissions/pages/Login/index";
import International_Register from "./international_admissions/pages/Register/index";
import Application_Status from "./international_admissions/pages/Status/index";
import Offers from "./international_admissions/pages/Offers/index"
import Online_alerts from "./online_alerts/index"
import Email from "./online_alerts/pages/groupEmail/groupEmail"

import Sms  from "./online_alerts/pages/sms/sms"
import CCE from "./cce/index"
import CCE_Certificates from "./cce/pages/certificates/index"
import CCE_Application from "./cce/pages/application/index"
import CCE_Payments from "./cce/pages/payments/index"
// import Shortlist from "./cce/pages/shortlist/index"
// import Statistics from "./cce/pages/statistics/index"
import CCE_Registration from "./cce/pages/registration/index"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path='alumni_portal' element={<Alumni_portal />} >
            <Route path='login' element={<Alum_login />} />
            <Route path='register' element={<Alum_register />} />
            <Route path='email' element={<Alum_email />} />
            <Route path='payments' element={<Alumni_payments />} />
          </Route>

          <Route path='international_admissions' element={<International_admissions />}>
            <Route path='application' element={<International_Application />} />
            <Route path='login' element={<International_Login />} />
            <Route path='register' element={<International_Register />} />
            <Route path='application_status' element={<Application_Status />} />
            <Route path='offers' element={<Offers />} />
          </Route>
          
          <Route path='online_alerts' element={<Online_alerts/>}>
             <Route path='email' element={<Email/>} />
             <Route path='sms' element={<Sms />} />
          </Route>

          <Route path='cce' element={<CCE/>}>
             <Route path='certificates' element={<CCE_Certificates/>} />
             <Route path='application' element={<CCE_Application/>} />
             <Route path='payments' element={<CCE_Payments/>} />
             <Route path='register' element={<CCE_Registration/>} />
          </Route>
          

        </Routes>


      </Router>
    </div>
  );
}

export default App;