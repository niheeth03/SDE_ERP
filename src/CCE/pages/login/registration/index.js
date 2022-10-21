import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import moment, { calendarFormat } from "moment";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";

function Registration() {

  const [name,setName]=useState("");
  const [rollNumber,setRollNumber]=useState("");
  const [email,setEmail]=useState("");
  const [batch,setBatch]=useState("");
  const [gender,setGender]=useState("");
  const [degree,setDegree]=useState("");
  const [branch,setBranch]=useState("");
  const [occupation,setOccupation]=useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [cPasswordClass, setCPasswordClass] = useState('form-control');
  const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);


  const [date, setDate] = useState("");

  const Navigate = useNavigate();

  const handleSubmit=()=>{
    const newStudent={
      name: name,
      email: email,
      batch:batch,
      gender:gender,
      degree: degree,
      branch: branch,
      occupation: occupation,
      password: password
    };
    console.log("Were");
    axios.post("/cce/user/register",newStudent);
    window.location.reload(true);
  }

  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setIsCPasswordDirty(true);
}

  useEffect(() => {
    if (isCPasswordDirty) {
      if (password === cPassword) {
        setShowErrorMessage(false);
        setCPasswordClass("form-control is-valid");
      } else {
        setShowErrorMessage(true);
        setCPasswordClass("form-control is-invalid");
      }
    }
  }, [cPassword]);

  const onDateChange = (newDate) => {
    let Date = newDate.toString();
    setDate(Date);
    console.log(newDate);
  };

  return (
    <>
        <div>
            <nav class="navbar navbar-expand-lg bg-white">
              <div class="container-fluid">
              <Link to='../../../home' class="nav-link-active">ERP</Link>
              <Link to='../../home' class="nav-link-active">Home</Link>
              <Link to='../../user/login' class="nav-link-active">Login</Link>
              </div>
            </nav>
        </div>
    
    <div className="all">
          <h1>Register</h1>
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">UserName</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="inputEmail3" required onChange={(e)=>{setName(e.target.value);}}/>
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="inputPassword3"required onChange={(e)=>{setEmail(e.target.value);}}/>
            </div>
          </div>
          <div class="row mb-3">
          <label for="gender" class="form-label">Gender</label>
            <div class="col-sm-10">
            <select name="gender" id="gender" onChange={(e) => {
              setGender(e.target.value);
            }}>
                        <option value=" ">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
            </div>
          </div>
          <div class="row mb-3">
          <label for="qualification" class="form-label">Degree</label>
            <div class="col-sm-10">
            <select name="qualification" id="qualification" onChange={(e) => {
              setDegree(e.target.value);
            }}>
                        <option value=" ">Select Degree</option>
                        <option value="Bachelors">Bachelors</option>
                        <option value="Masters">Masters</option>
                        <option value="Phd">Phd</option>
                    </select>
            </div>
          </div>
          <div class="row mb-3">
          <label for="qualification" class="form-label">Department</label>
            <div class="col-sm-10">
            <select name="qualification" id="qualification" onChange={(e) => {setBranch(e.target.value);}}>
                        <option value=" ">Select Department</option>
                        <option value="CH">Chemical</option>
                        <option value="CSE">Computer Science</option>
                        <option value="CE">Civil</option>
                        <option value="EE">Electrical</option>
                        <option value="ME">Mechanical</option>
                        <option value="PH">Physics</option>
                        <option value="MA">Maths</option>
                        <option value="HS">Humanities and Social Sciences</option>
                        <option value="OT">Other</option>
                    </select>
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Occupation</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="inputPassword3"required onChange={(e)=>{setOccupation(e.target.value);}}/>
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword3"value={password} required onChange={(e)=>{setPassword(e.target.value);}}/>
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Confirm Password</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword3"value={cPassword} required onChange={handleCPassword}/>
            </div>
          </div>
          {showErrorMessage && isCPasswordDirty ? (
            <div> Passwords did not match </div>
          ) : (
            ""
          )}
          {/* <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Nationality</label>
            <div class="col-sm-10">
            <select id="country" name="country">
                    <option>Select country</option>
                    <option value="AF">Afghanistan</option>
                    <option value="AX">Aland Islands</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Antarctica</option>
                    <option value="AG">Antigua and Barbuda</option>
                    <option value="AR">Argentina</option>
                    <option value="AM">Armenia</option>
                    <option value="AW">Aruba</option>
                    <option value="AU">Australia</option>
                    <option value="AT">Austria</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Bangladesh</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Belarus</option>
                    <option value="BE">Belgium</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Benin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bhutan</option>
                    <option value="BO">Bolivia</option>
                    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                    <option value="BA">Bosnia and Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BV">Bouvet Island</option>
                    <option value="BR">Brazil</option>
                    <option value="IO">British Indian Ocean Territory</option>
                    <option value="BN">Brunei Darussalam</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="KH">Cambodia</option>
                    <option value="CM">Cameroon</option>
                    <option value="CA">Canada</option>
                    <option value="CV">Cape Verde</option>
                    <option value="KY">Cayman Islands</option>
                    <option value="CF">Central African Republic</option>
                    <option value="TD">Chad</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CX">Christmas Island</option>
                    <option value="CC">Cocos (Keeling) Islands</option>
                    <option value="CO">Colombia</option>
                    <option value="KM">Comoros</option>
                    <option value="CG">Congo</option>
                    <option value="CD">Congo, Democratic Republic of the Congo</option>
                    <option value="CK">Cook Islands</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CI">Cote D'Ivoire</option>
                    <option value="HR">Croatia</option>
                    <option value="CU">Cuba</option>
                    <option value="CW">Curacao</option>
                    <option value="CY">Cyprus</option>
                    <option value="CZ">Czech Republic</option>
                    <option value="DK">Denmark</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominican Republic</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Egypt</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="ET">Ethiopia</option>
                    <option value="FK">Falkland Islands (Malvinas)</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="GF">French Guiana</option>
                    <option value="PF">French Polynesia</option>
                    <option value="TF">French Southern Territories</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GP">Guadeloupe</option>
                    <option value="GU">Guam</option>
                    <option value="GT">Guatemala</option>
                    <option value="GG">Guernsey</option>
                    <option value="GN">Guinea</option>
                    <option value="GW">Guinea-Bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="HM">Heard Island and Mcdonald Islands</option>
                    <option value="VA">Holy See (Vatican City State)</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IR">Iran, Islamic Republic of</option>
                    <option value="IQ">Iraq</option>
                    <option value="IE">Ireland</option>
                    <option value="IM">Isle of Man</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JE">Jersey</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="KP">Korea, Democratic People's Republic of</option>
                    <option value="KR">Korea, Republic of</option>
                    <option value="XK">Kosovo</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LA">Lao People's Democratic Republic</option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libyan Arab Jamahiriya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MO">Macao</option>
                    <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
                    <option value="MG">Madagascar</option>
                    <option value="MW">Malawi</option>
                    <option value="MY">Malaysia</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MQ">Martinique</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="YT">Mayotte</option>
                    <option value="MX">Mexico</option>
                    <option value="FM">Micronesia, Federated States of</option>
                    <option value="MD">Moldova, Republic of</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="ME">Montenegro</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar</option>
                    <option value="NA">Namibia</option>
                    <option value="NR">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="NL">Netherlands</option>
                    <option value="AN">Netherlands Antilles</option>
                    <option value="NC">New Caledonia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NU">Niue</option>
                    <option value="NF">Norfolk Island</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PK">Pakistan</option>
                    <option value="PW">Palau</option>
                    <option value="PS">Palestinian Territory, Occupied</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PN">Pitcairn</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="QA">Qatar</option>
                    <option value="RE">Reunion</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russian Federation</option>
                    <option value="RW">Rwanda</option>
                    <option value="BL">Saint Barthelemy</option>
                    <option value="SH">Saint Helena</option>
                    <option value="KN">Saint Kitts and Nevis</option>
                    <option value="LC">Saint Lucia</option>
                    <option value="MF">Saint Martin</option>
                    <option value="PM">Saint Pierre and Miquelon</option>
                    <option value="VC">Saint Vincent and the Grenadines</option>
                    <option value="WS">Samoa</option>
                    <option value="SM">San Marino</option>
                    <option value="ST">Sao Tome and Principe</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="RS">Serbia</option>
                    <option value="CS">Serbia and Montenegro</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG">Singapore</option>
                    <option value="SX">Sint Maarten</option>
                    <option value="SK">Slovakia</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="SO">Somalia</option>
                    <option value="ZA">South Africa</option>
                    <option value="GS">South Georgia and the South Sandwich Islands</option>
                    <option value="SS">South Sudan</option>
                    <option value="ES">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="SD">Sudan</option>
                    <option value="SR">Suriname</option>
                    <option value="SJ">Svalbard and Jan Mayen</option>
                    <option value="SZ">Swaziland</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="SY">Syrian Arab Republic</option>
                    <option value="TW">Taiwan, Province of China</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TZ">Tanzania, United Republic of</option>
                    <option value="TH">Thailand</option>
                    <option value="TL">Timor-Leste</option>
                    <option value="TG">Togo</option>
                    <option value="TK">Tokelau</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad and Tobago</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TC">Turks and Caicos Islands</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UG">Uganda</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="GB">United Kingdom</option>
                    <option value="US">United States</option>
                    <option value="UM">United States Minor Outlying Islands</option>
                    <option value="UY">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VE">Venezuela</option>
                    <option value="VN">Viet Nam</option>
                    <option value="VG">Virgin Islands, British</option>
                    <option value="VI">Virgin Islands, U.s.</option>
                    <option value="WF">Wallis and Futuna</option>
                    <option value="EH">Western Sahara</option>
                    <option value="YE">Yemen</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabwe</option>
                  </select>
            </div>
          </div> */}
          


          <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Register</button><br/>
          <label for="inputEmail3" class="col-sm-2 col-form-label">Already_a_user?</label>
          <button type="button" class="btn btn-link"><Link to="../login" className="link">Login</Link></button>
      </div>
      </>
    // <div className="register">

    //   <h2>Register</h2>
    //   <form action=""  onSubmit={handleSubmit}>
    //     {/* <label>Username</label>
    //     <input
    //       type="text"
    //       placeholder="Enter Username...."
    //       onChange={(e) => setUsername(e.target.value)}
    //     ></input> */}
    //     <div class="row">
    //             <div class="col-10">
    //                 <label for="fname">User Name:</label>
    //             </div>
    //             <div class="col-90">
    //             <input type="text"  onChange={(e)=>setUsername(e.target.value)}></input><br/>
    //             </div>
    //     </div>
    //     <div class="row">
    //             <div class="col-10">
    //                 <label for="fname">Email:</label>
    //             </div>
    //             <div class="col-90">
    //             <input type="text"  onChange={(e)=>setEmail(e.target.value)}></input><br/>
    //             </div>
    //     </div>
    //     {/* <label>Email</label>
    //     <input
    //       type="email"
    //       placeholder="Enter your Email...."
    //       onChange={(e) => setEmail(e.target.value)}
    //     ></input> */}
    //     {/* <p>{this.state.selectedDate.format("YYYY-MM-DD")}</p>
    //     <div className="calendar-container">
    //       <Calendar/>
    //     </div> */}
    //     <div class="row">
    //             <div class="col-10">
    //                 <label for="fname">Date of Birth:</label>
    //             </div>
    //             <div class="col-90">
    //             <input type="date"></input><br/>
    //             </div>
    //       </div>
    //       <div class="row">
    //             <div class="col-10">
    //                 <label for="gender" required>Gender:</label>
    //             </div>
    //             <div class="col-90">
    //                 <input type="radio" id="male" name="gender" value="male"/>Male
    //                 <input type="radio" id="female" name="gender" value="female"/>Female
    //                 <input type="radio" id="female" name="gender" value="female"/>Other
    //             </div>
    //       </div>
    //     {/* <label for="cars">Gender</label>
    //     <select name="cars" id="cars">
    //       <option value="volvo">Male</option>
    //       <option value="saab">Female</option>
    //       <option value="mercedes">Others</option>
    //     </select><br/> */}

    //     {/* <label>Country of Citizenship</label>
    //     <input
    //       type="email"
    //       placeholder="Enter your Country...."
    //       onChange={(e) => setCountry(e.target.value)}
    //     ></input><br/> */}
    //     <div class="row">
    //             <div class="col-10">
    //                 <label for="qualification" required >Nationality:</label>
    //             </div>
    //             <div class="col-90">
    //             <select id="country" name="country">
    //               <option>Select country</option>
    //               <option value="AF">Afghanistan</option>
    //               <option value="AX">Aland Islands</option>
    //               <option value="AL">Albania</option>
    //               <option value="DZ">Algeria</option>
    //               <option value="AS">American Samoa</option>
    //               <option value="AD">Andorra</option>
    //               <option value="AO">Angola</option>
    //               <option value="AI">Anguilla</option>
    //               <option value="AQ">Antarctica</option>
    //               <option value="AG">Antigua and Barbuda</option>
    //               <option value="AR">Argentina</option>
    //               <option value="AM">Armenia</option>
    //               <option value="AW">Aruba</option>
    //               <option value="AU">Australia</option>
    //               <option value="AT">Austria</option>
    //               <option value="AZ">Azerbaijan</option>
    //               <option value="BS">Bahamas</option>
    //               <option value="BH">Bahrain</option>
    //               <option value="BD">Bangladesh</option>
    //               <option value="BB">Barbados</option>
    //               <option value="BY">Belarus</option>
    //               <option value="BE">Belgium</option>
    //               <option value="BZ">Belize</option>
    //               <option value="BJ">Benin</option>
    //               <option value="BM">Bermuda</option>
    //               <option value="BT">Bhutan</option>
    //               <option value="BO">Bolivia</option>
    //               <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
    //               <option value="BA">Bosnia and Herzegovina</option>
    //               <option value="BW">Botswana</option>
    //               <option value="BV">Bouvet Island</option>
    //               <option value="BR">Brazil</option>
    //               <option value="IO">British Indian Ocean Territory</option>
    //               <option value="BN">Brunei Darussalam</option>
    //               <option value="BG">Bulgaria</option>
    //               <option value="BF">Burkina Faso</option>
    //               <option value="BI">Burundi</option>
    //               <option value="KH">Cambodia</option>
    //               <option value="CM">Cameroon</option>
    //               <option value="CA">Canada</option>
    //               <option value="CV">Cape Verde</option>
    //               <option value="KY">Cayman Islands</option>
    //               <option value="CF">Central African Republic</option>
    //               <option value="TD">Chad</option>
    //               <option value="CL">Chile</option>
    //               <option value="CN">China</option>
    //               <option value="CX">Christmas Island</option>
    //               <option value="CC">Cocos (Keeling) Islands</option>
    //               <option value="CO">Colombia</option>
    //               <option value="KM">Comoros</option>
    //               <option value="CG">Congo</option>
    //               <option value="CD">Congo, Democratic Republic of the Congo</option>
    //               <option value="CK">Cook Islands</option>
    //               <option value="CR">Costa Rica</option>
    //               <option value="CI">Cote D'Ivoire</option>
    //               <option value="HR">Croatia</option>
    //               <option value="CU">Cuba</option>
    //               <option value="CW">Curacao</option>
    //               <option value="CY">Cyprus</option>
    //               <option value="CZ">Czech Republic</option>
    //               <option value="DK">Denmark</option>
    //               <option value="DJ">Djibouti</option>
    //               <option value="DM">Dominica</option>
    //               <option value="DO">Dominican Republic</option>
    //               <option value="EC">Ecuador</option>
    //               <option value="EG">Egypt</option>
    //               <option value="SV">El Salvador</option>
    //               <option value="GQ">Equatorial Guinea</option>
    //               <option value="ER">Eritrea</option>
    //               <option value="EE">Estonia</option>
    //               <option value="ET">Ethiopia</option>
    //               <option value="FK">Falkland Islands (Malvinas)</option>
    //               <option value="FO">Faroe Islands</option>
    //               <option value="FJ">Fiji</option>
    //               <option value="FI">Finland</option>
    //               <option value="FR">France</option>
    //               <option value="GF">French Guiana</option>
    //               <option value="PF">French Polynesia</option>
    //               <option value="TF">French Southern Territories</option>
    //               <option value="GA">Gabon</option>
    //               <option value="GM">Gambia</option>
    //               <option value="GE">Georgia</option>
    //               <option value="DE">Germany</option>
    //               <option value="GH">Ghana</option>
    //               <option value="GI">Gibraltar</option>
    //               <option value="GR">Greece</option>
    //               <option value="GL">Greenland</option>
    //               <option value="GD">Grenada</option>
    //               <option value="GP">Guadeloupe</option>
    //               <option value="GU">Guam</option>
    //               <option value="GT">Guatemala</option>
    //               <option value="GG">Guernsey</option>
    //               <option value="GN">Guinea</option>
    //               <option value="GW">Guinea-Bissau</option>
    //               <option value="GY">Guyana</option>
    //               <option value="HT">Haiti</option>
    //               <option value="HM">Heard Island and Mcdonald Islands</option>
    //               <option value="VA">Holy See (Vatican City State)</option>
    //               <option value="HN">Honduras</option>
    //               <option value="HK">Hong Kong</option>
    //               <option value="HU">Hungary</option>
    //               <option value="IS">Iceland</option>
    //               <option value="IN">India</option>
    //               <option value="ID">Indonesia</option>
    //               <option value="IR">Iran, Islamic Republic of</option>
    //               <option value="IQ">Iraq</option>
    //               <option value="IE">Ireland</option>
    //               <option value="IM">Isle of Man</option>
    //               <option value="IL">Israel</option>
    //               <option value="IT">Italy</option>
    //               <option value="JM">Jamaica</option>
    //               <option value="JP">Japan</option>
    //               <option value="JE">Jersey</option>
    //               <option value="JO">Jordan</option>
    //               <option value="KZ">Kazakhstan</option>
    //               <option value="KE">Kenya</option>
    //               <option value="KI">Kiribati</option>
    //               <option value="KP">Korea, Democratic People's Republic of</option>
    //               <option value="KR">Korea, Republic of</option>
    //               <option value="XK">Kosovo</option>
    //               <option value="KW">Kuwait</option>
    //               <option value="KG">Kyrgyzstan</option>
    //               <option value="LA">Lao People's Democratic Republic</option>
    //               <option value="LV">Latvia</option>
    //               <option value="LB">Lebanon</option>
    //               <option value="LS">Lesotho</option>
    //               <option value="LR">Liberia</option>
    //               <option value="LY">Libyan Arab Jamahiriya</option>
    //               <option value="LI">Liechtenstein</option>
    //               <option value="LT">Lithuania</option>
    //               <option value="LU">Luxembourg</option>
    //               <option value="MO">Macao</option>
    //               <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
    //               <option value="MG">Madagascar</option>
    //               <option value="MW">Malawi</option>
    //               <option value="MY">Malaysia</option>
    //               <option value="MV">Maldives</option>
    //               <option value="ML">Mali</option>
    //               <option value="MT">Malta</option>
    //               <option value="MH">Marshall Islands</option>
    //               <option value="MQ">Martinique</option>
    //               <option value="MR">Mauritania</option>
    //               <option value="MU">Mauritius</option>
    //               <option value="YT">Mayotte</option>
    //               <option value="MX">Mexico</option>
    //               <option value="FM">Micronesia, Federated States of</option>
    //               <option value="MD">Moldova, Republic of</option>
    //               <option value="MC">Monaco</option>
    //               <option value="MN">Mongolia</option>
    //               <option value="ME">Montenegro</option>
    //               <option value="MS">Montserrat</option>
    //               <option value="MA">Morocco</option>
    //               <option value="MZ">Mozambique</option>
    //               <option value="MM">Myanmar</option>
    //               <option value="NA">Namibia</option>
    //               <option value="NR">Nauru</option>
    //               <option value="NP">Nepal</option>
    //               <option value="NL">Netherlands</option>
    //               <option value="AN">Netherlands Antilles</option>
    //               <option value="NC">New Caledonia</option>
    //               <option value="NZ">New Zealand</option>
    //               <option value="NI">Nicaragua</option>
    //               <option value="NE">Niger</option>
    //               <option value="NG">Nigeria</option>
    //               <option value="NU">Niue</option>
    //               <option value="NF">Norfolk Island</option>
    //               <option value="MP">Northern Mariana Islands</option>
    //               <option value="NO">Norway</option>
    //               <option value="OM">Oman</option>
    //               <option value="PK">Pakistan</option>
    //               <option value="PW">Palau</option>
    //               <option value="PS">Palestinian Territory, Occupied</option>
    //               <option value="PA">Panama</option>
    //               <option value="PG">Papua New Guinea</option>
    //               <option value="PY">Paraguay</option>
    //               <option value="PE">Peru</option>
    //               <option value="PH">Philippines</option>
    //               <option value="PN">Pitcairn</option>
    //               <option value="PL">Poland</option>
    //               <option value="PT">Portugal</option>
    //               <option value="PR">Puerto Rico</option>
    //               <option value="QA">Qatar</option>
    //               <option value="RE">Reunion</option>
    //               <option value="RO">Romania</option>
    //               <option value="RU">Russian Federation</option>
    //               <option value="RW">Rwanda</option>
    //               <option value="BL">Saint Barthelemy</option>
    //               <option value="SH">Saint Helena</option>
    //               <option value="KN">Saint Kitts and Nevis</option>
    //               <option value="LC">Saint Lucia</option>
    //               <option value="MF">Saint Martin</option>
    //               <option value="PM">Saint Pierre and Miquelon</option>
    //               <option value="VC">Saint Vincent and the Grenadines</option>
    //               <option value="WS">Samoa</option>
    //               <option value="SM">San Marino</option>
    //               <option value="ST">Sao Tome and Principe</option>
    //               <option value="SA">Saudi Arabia</option>
    //               <option value="SN">Senegal</option>
    //               <option value="RS">Serbia</option>
    //               <option value="CS">Serbia and Montenegro</option>
    //               <option value="SC">Seychelles</option>
    //               <option value="SL">Sierra Leone</option>
    //               <option value="SG">Singapore</option>
    //               <option value="SX">Sint Maarten</option>
    //               <option value="SK">Slovakia</option>
    //               <option value="SI">Slovenia</option>
    //               <option value="SB">Solomon Islands</option>
    //               <option value="SO">Somalia</option>
    //               <option value="ZA">South Africa</option>
    //               <option value="GS">South Georgia and the South Sandwich Islands</option>
    //               <option value="SS">South Sudan</option>
    //               <option value="ES">Spain</option>
    //               <option value="LK">Sri Lanka</option>
    //               <option value="SD">Sudan</option>
    //               <option value="SR">Suriname</option>
    //               <option value="SJ">Svalbard and Jan Mayen</option>
    //               <option value="SZ">Swaziland</option>
    //               <option value="SE">Sweden</option>
    //               <option value="CH">Switzerland</option>
    //               <option value="SY">Syrian Arab Republic</option>
    //               <option value="TW">Taiwan, Province of China</option>
    //               <option value="TJ">Tajikistan</option>
    //               <option value="TZ">Tanzania, United Republic of</option>
    //               <option value="TH">Thailand</option>
    //               <option value="TL">Timor-Leste</option>
    //               <option value="TG">Togo</option>
    //               <option value="TK">Tokelau</option>
    //               <option value="TO">Tonga</option>
    //               <option value="TT">Trinidad and Tobago</option>
    //               <option value="TN">Tunisia</option>
    //               <option value="TR">Turkey</option>
    //               <option value="TM">Turkmenistan</option>
    //               <option value="TC">Turks and Caicos Islands</option>
    //               <option value="TV">Tuvalu</option>
    //               <option value="UG">Uganda</option>
    //               <option value="UA">Ukraine</option>
    //               <option value="AE">United Arab Emirates</option>
    //               <option value="GB">United Kingdom</option>
    //               <option value="US">United States</option>
    //               <option value="UM">United States Minor Outlying Islands</option>
    //               <option value="UY">Uruguay</option>
    //               <option value="UZ">Uzbekistan</option>
    //               <option value="VU">Vanuatu</option>
    //               <option value="VE">Venezuela</option>
    //               <option value="VN">Viet Nam</option>
    //               <option value="VG">Virgin Islands, British</option>
    //               <option value="VI">Virgin Islands, U.s.</option>
    //               <option value="WF">Wallis and Futuna</option>
    //               <option value="EH">Western Sahara</option>
    //               <option value="YE">Yemen</option>
    //               <option value="ZM">Zambia</option>
    //               <option value="ZW">Zimbabwe</option>
    //             </select><br/>
    //             </div>
    //     </div>
    //     {/* <label>Country Code</label>
    //     <input
    //       type="email"
    //       placeholder="Enter your Country Code...."
    //       onChange={(e) => setCountryCode(e.target.value)}
    //     ></input><br/> */}
    //     <div class="row">
    //             <div class="col-10">
    //                 <label for="fname">Country Code :</label>
    //             </div>
    //             <div class="col-90">
    //             <input type="text"  onChange={(e)=>setCountryCode(e.target.value)}></input><br/>
    //             </div>
    //       </div>
    //       <div class="row">
    //             <div class="col-10">
    //                 <label for="fname">Mobile Number :</label>
    //             </div>
    //             <div class="col-90">
    //             <input type="text"  onChange={(e)=>setMobile(e.target.value)}></input><br/>
    //             </div>
    //       </div>
    //     {/* <label>Password</label>
    //     <input
    //       type="password"
    //       placeholder="Enter your Password...."
    //       value={password}
    //       onChange={(e) => {
    //         setPassword(e.target.value);
    //       }}
    //     ></input><br/> */}
    //     <div class="row">
    //             <div class="col-10">
    //                 <label for="fname">Mobile Number :</label>
    //             </div>
    //             <div class="col-90">
    //             <input type="text" value={password}  onChange={(e)=>setPassword(e.target.value)}></input><br/>
    //             </div>
    //     </div><br/>
    //     {/* <label>Confirm Password</label>
    //     <input
    //       type="password"
    //       placeholder="Enter your Password again...."
    //       value={cPassword}
    //       onChange={handleCPassword}
    //     ></input><br/> */}
    //     <div class="row">
    //             <div class="col-10">
    //                 <label for="fname">Confirm Password :</label>
    //             </div>
    //             <div class="col-90">
    //             <input type="text" value={cPassword}  onChange={handleCPassword}></input><br/>
    //             </div>
    //     </div><br/>
    //     {showErrorMessage && isCPasswordDirty ? (
    //       <div> Passwords did not match </div>
    //     ) : (
    //       ""
    //     )}
    //     <button className="registerButton" type="submit">
    //       Register
    //     </button>
    //   </form>

    //   <button className="registerLoginButton">
    //     <Link to="/login" className="link">
    //       Login
    //     </Link>
    //   </button>
    // </div>
    
  );
}

export default Registration;
