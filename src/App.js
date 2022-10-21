import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./home/index";
import Alum_portal from "./alumni_portal/index";
import Alum_Stud from "./alumni_portal/pages/alumni/index";
import Alum_Admin from "./alumni_portal/pages/admin/index";
import Alum_Commlogin from "./alumni_portal/pages/commlogin/index";

import Alum_Stud_home from "./alumni_portal/pages/alumni/home";
import Alum_Admin_home from "./alumni_portal/pages/admin/home";
import Alum_Stud_login from "./alumni_portal/pages/alumni/login";
import Alum_Admin_login from "./alumni_portal/pages/admin/login";
import Alum_Stud_payments from "./alumni_portal/pages/alumni/payments";
import Alum_Admin_payments from "./alumni_portal/pages/admin/payments";
import Alum_Stud_profile from "./alumni_portal/pages/alumni/profile";
import Alum_Stud_register from "./alumni_portal/pages/alumni/register";
import Alum_Admin_email from "./alumni_portal/pages/admin/groupEmail/groupEmail";
import Alum_Admin_alumni from "./alumni_portal/pages/admin/alumni";

// import Alum_login from "./alumni_portal/pages/login";
// import Alum_register from "./alumni_portal/pages/register";
// import Alum_email from "./alumni_portal/pages/groupEmail/groupEmail";
// import Alumni_payments from "./alumni_portal/pages/payments";

import International_User from "./international_admissions/pages/user/index";
import International_Admin from "./international_admissions/pages/admin/index";
import International_Commlogin from "./international_admissions/pages/commlogin/index";

import International_admissions from "./international_admissions/index";
import International_home from "./international_admissions/pages/user/home/index";
import International_Application from "./international_admissions/pages/user/application/index";
import International_Login from "./international_admissions/pages/user/login/index";
import International_Register from "./international_admissions/pages/user/register/index";
import Application_Status from "./international_admissions/pages/user/status/index";
import International_Offers from "./international_admissions/pages/user/courses/index";

import International_Courses from "./international_admissions/pages/admin/courses/index"
import International_Pending from "./international_admissions/pages/admin/pending_applications/index"
import International_Approved from "./international_admissions/pages/admin/approved/index"
import International_Rejected from "./international_admissions/pages/admin/rejected/index"
import International_Adm_Login from "./international_admissions/pages/admin/login/index"

import Online_alerts from "./online_alerts/index";
import Online_home from "./online_alerts/pages/home/index";
import Email from "./online_alerts/pages/groupEmail/groupEmail";

import Sms  from "./online_alerts/pages/sms/sms"
//import CCE from "./cce/index"
import CCE_Admin from "./cce/pages/admin/index"
import CCE_User from "./cce/pages/user/index"
import CCE_Certificates from "./cce/pages/admin/certificates/index"
import CCE_Application from "./cce/pages/user/application/index"
import CCE_Payments from "./cce/pages/user/payments/index"
import CCE_home from "./cce/pages/home/index"
import CCE_Shortlist from "./cce/pages/admin/shortlist/index"
import CCE_Statistics from "./cce/pages/admin/statistics/index"
import CCE_Registration from "./cce/pages/login/registration/index"
import CCE_Admin_Login from "./cce/pages/login/admin_login/index"
import CCE_Admin_addCourse from "./cce/pages/admin/addCourse/index"
import CCE_User_Login from "./cce/pages/login/user_login/index"

import Ticketing_System from "./ticketing_system/index"
import Ticketing_Admin from "./ticketing_system/pages/admin/index"
import Ticketing_User from "./ticketing_system/pages/user/index"
import Ticketing_Admin_Login from "./ticketing_system/pages/admin/login/index"
import Tickecting_Commonlogin from "./ticketing_system/pages/commlogin/index"
import Ticketing_DisplayTickets from "./ticketing_system/pages/admin/displaytickets/index"
import Ticketing_ClosedTickets from "./ticketing_system/pages/admin/closedtickets/index"
import Ticketing_User_Login from "./ticketing_system/pages/user/login/index"
import Ticketing_User_Register from "./ticketing_system/pages/user/register/index"
import Ticketing_Raiseticket from "./ticketing_system/pages/user/raiseticket/index"
import Ticketing_Ticketstatus from "./ticketing_system/pages/user/ticketstatus/index"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Navigate to="home" />} />

          <Route path="alumni_portal" element={<Alum_portal />}>
            <Route path="alumni" element={<Alum_Stud />}>
              <Route path="home" element={<Alum_Stud_home />} />
              <Route path="payments" element={<Alum_Stud_payments />} />
              <Route path="profile" element={<Alum_Stud_profile />} />
              <Route path="login" element={<Alum_Stud_login />} />
               <Route path="register" element={<Alum_Stud_register />} />
            </Route>
            
           
            <Route path="admin" element={<Alum_Admin />}>
              <Route path="home" element={<Alum_Admin_home />} />
              <Route path="login" element={<Alum_Admin_login />} />
              <Route path="alumni" element={<Alum_Admin_alumni />} />
              <Route path="payments" element={<Alum_Admin_payments />} />
              <Route path="email" element={<Alum_Admin_email />} />
            </Route>
             <Route path="commlogin" element={<Alum_Commlogin/>}/>
          </Route>

          <Route path='international_admissions' element={<International_admissions />}>
          <Route path='user' element={<International_User/>}>
            <Route path='home' element={<International_home/>}/>
            <Route path='application' element={<International_Application />} />
            <Route path='login' element={<International_Login />} />
            <Route path='register' element={<International_Register />} />
            <Route path='application_status' element={<Application_Status />} />
            <Route path='courses' element={<International_Offers />} />
            </Route>
            <Route path='admin' element={<International_Admin/>}>
              <Route path='courses'  element={<International_Courses/>}/>
              <Route path='pending'  element={<International_Pending/>}/>
              <Route path='rejected'  element={<International_Rejected/>}/>
              <Route path='approved'  element={<International_Approved/>}/>
              <Route path="login" element={<International_Adm_Login/>}/>
            </Route>
            <Route path='commlogin' element={<International_Commlogin/>}/>
          </Route>
          
          <Route path='online_alerts' element={<Online_alerts/>}>
             <Route path='home' element={<Online_home/>}/>
             <Route path='email' element={<Email/>} />
             <Route path='sms' element={<Sms />} />
          </Route>

          <Route path='cce' >
             <Route path='home' element={<CCE_home/>}/>
             <Route path="user" >
                  <Route path='application' element={<CCE_Application/>} />
                  <Route path='payments' element={<CCE_Payments/>} />
                  <Route path='register' element={<CCE_Registration/>} />
              </Route>
              <Route path="admin">
                  <Route path='certificates' element={<CCE_Certificates/>} />
                  <Route path='statistics' element={<CCE_Statistics/>} />
                  <Route path='shortlist' element={<CCE_Shortlist/>} />
                  <Route path='addCourse' element={<CCE_Admin_addCourse/>}/>
              </Route>
              <Route path='user/login' element={<CCE_User_Login/>} />
              <Route path='admin/login' element={<CCE_Admin_Login/>} />
          </Route>

          <Route path='ticketing_system'element={<Ticketing_System/>}>

            <Route path='commlogin' element={<Tickecting_Commonlogin/>}/>

            <Route path='admin' element={<Ticketing_Admin/>}>
              <Route path='closeticket' element={<Ticketing_ClosedTickets/>}/>
              <Route path='display' element={<Ticketing_DisplayTickets/>}/>
              <Route path ='login' element={<Ticketing_Admin_Login/>}/>
            </Route>

            <Route path='user' element={<Ticketing_User/>}>
              <Route path='login' element={<Ticketing_User_Login/>}/>
              <Route path='register' element={<Ticketing_User_Register/>}/>
              <Route path='raiseticket' element={<Ticketing_Raiseticket/>}/>
              <Route path='display' element={<Ticketing_Ticketstatus/>}/>
            </Route>
            
          </Route>

         </Routes>
      </Router>
      
    </div>
  );
}

export default App;
