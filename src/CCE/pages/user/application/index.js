/* User will apply to the course he/she intrested in */

import React from "react";
import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { ModelBuildList } from "twilio/lib/rest/autopilot/v1/assistant/modelBuild";

const Application = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [LastName, setLastName] = useState("");
  const [MobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [degree, setDegree] = useState("");
  const [branch, setBranch] = useState("");
  const [gender, setGender] = useState("");
  const [Error, setError] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [courseId, setCourseId] = useState("");

  const handleSubmit = () => {
    const newStudent = {
      email: email,
      courseId:courseId,
      courseName:courseName,
    };
    console.log("Were");
    axios.post("/cce/user/application", newStudent);
  };

  return (
    <>
     <nav class="navbar navbar-expand-lg bg-white">
                <div class="container-fluid">
                <Link to='../../home' class="nav-link-active">ERP</Link>
                <Link to='../../home' class="nav-link-active">Home</Link>
                <Link to='../application' class="nav-link-active">Application</Link>
                <Link to='../payments' class="nav-link-active">Payments</Link>
                </div>
    </nav>
    <div class="applica">
      
      <form action="" className="farm" onSubmit={handleSubmit}>
        <h2>
          <b>Application</b>
        </h2>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
              id="inputEmail3"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Short-term Course/Workshop
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputEmail3"
              required
              onChange={(e) => {
                setCourseName(e.target.value);
              }}
            />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Course ID
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputEmail3"
              required
              onChange={(e) => {
                setCourseId(e.target.value);
              }}
            />
          </div>
        </div>
      </form>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          I am aware of all guidelines and all the details procured above are
          true to my knowledge.
        </label>
      </div>

      <br />
      <button type="submit" class="btn btn-success">
        Submit
      </button>
      <br />
      <br />
      <button type="submit" class="btn btn-danger">
        Cancel
      </button>
      <button type="button" class="btn btn-link btn-block btn-lg">
        <Link to="/cce/user/payments" className="link">
          Payments
        </Link>
      </button>

      {Error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Something went wrong!
        </span>
      )}
    </div>
    
    </>
  );
};

export default Application;
