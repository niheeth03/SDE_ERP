import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Alumni_portal from "./alumni_portal/index";
import Alum_login from "./alumni_portal/pages/login"
import Alum_register from "./alumni_portal/pages/register"
import Alum_email from "./alumni_portal/pages/groupEmail/groupEmail"
import International_admissions from "./international_admissions/index";
import International_Application from "./international_admissions/pages/Application/index";

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
            <Route path='international_admissions' element={<International_admissions/>}/>
            <Route path='international_admissions/application' element={<International_Application />}/>
            
        </Routes>


      </Router>
    </div>
  );
}

export default App;
