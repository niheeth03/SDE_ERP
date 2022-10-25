import React from "react";
import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const Ticket = () => {
  const [requesterName, setRequesterName] = useState("");
  const [department, setDepartment] = useState("");
  const [subject, setSubject] = useState("");
  const [natureofRequest, setNatureofRequest] = useState(false);
  const [complaintType, setComplaintType] = useState("");
  const [requestDetails, setRequestDetails] = useState("");

  const [selected, setSelected] = useState("");

  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };

  const computers = [
    "Display error",
    "Keyboard and Mouse Problem",
    "Laptop: (Warranty-Yes/No, Institute Fund/ Project Fund)",
    "Low Performance",
    "New Operating System Install",
    "Online /Off Line Classrooms Complaints/Suggestions",
    "Video conference Support",
    "Troubleshoot",
    "Desktop PC: (Warranty-Yes/No, Institute Fund/ Project Fund)",
  ];
  const networks = [
    "	CCTV-Issue",
    "Login-Issue",
    "Phone",
    "VPN",
    "WiFi-Hostel",
    "WiFi-Lab",
    "Wired-Lab",
    "Other Networking Issue",
    "WiFi-Others",
    "Wired-Others",
  ];
  const software = [
    "Admissions Portals",
    "Bio-Metric",
    "Email Services",
    "Recruitment portals",
    "Software Installation",
    "Website",
    "Others",
  ];
  const systems = [
    "Lotus Cluster/Accessibility issues",
    "Orchid Cluster/ New account request",
    "Project Workstation Hosting/Accessibility issues",
    "Virtual Machines/Increase of VM resources",
    "Others",
  ];
  const workflow = ["Workflow Issues", "Workflow Request", "Others - General"];

  let type = null;
  let options = null;
  if (selected === "Computers") {
    type = computers;
  } else if (selected === "Networks") {
    type = networks;
  } else if (selected === "Sofware") {
    type = software;
  } else if (selected === "Systems") {
    type = systems;
  } else if (selected === "Workflows") {
    type = workflow;
  }

  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }

  const handleSubmit = () => {
    const newTicket = {
      requesterName: requesterName,
      department: department,
      subject: subject,
      natureofRequest: natureofRequest,
      complaintType: complaintType,
      requestDetails: requestDetails,
    };
    console.log("Were");
    axios.post("/ticketing_system", newTicket);
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-white">
        <div class="container-fluid">
          <Link to="../../home" class="nav-link-active">
            ERP
          </Link>
          <Link to="../../home" class="nav-link-active">
            Home
          </Link>
          <Link to="../application" class="nav-link-active">
            Ticket Status
          </Link>
        </div>
      </nav>
      <div class="ticket">
        <form action="" className="farm" onSubmit={handleSubmit}>
          <h2>
            <b>Raise a Ticket</b>
          </h2>
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              Requester Name
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputEmail3"
                required
                onChange={(e) => {
                  setRequesterName(e.target.value);
                }}
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="department" class="form-label">
              Department
            </label>
            <div class="col-sm-10">
              <select
                name="department"
                id="department"
                onChange={(e) => {
                  setDepartment(e.target.value);
                }}
              >
                <option value=" ">Select Department</option>
                <option value="CSE">Computer Science and Engineering</option>
                <option value="EE">Electrical Engineering</option>
                <option value="ME">Mechanical Engineering</option>
                <option value="CE">Civil Engineering</option>
                <option value="CH">Chemical Engineering</option>
                <option value="PH">Physics</option>
                <option value="MA">Maths</option>
                <option value="HSS">Humanities and Social Sciences</option>
              </select>
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              Subject
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputEmail3"
                required
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="department" class="form-label">
              Nature of Request
            </label>
            <div class="col-sm-10">
              <select
                name="natureofreuqest"
                id="natureofrequest"
                onChange={changeSelectOptionHandler}
                // onChange={(e) => {
                //   setNatureofRequest(e.target.value);
                // }}
              >
                <option value=" ">Select Nature of Request</option>
                <option value="Computers">Computers</option>
                <option value="Networks">Networks</option>
                <option value="Software">Software</option>
                <option value="Systems">Systems</option>
                <option value="Workflows">Workflows</option>
              </select>
            </div>
          </div>
          <div class="row mb-3">
            <label for="department" class="form-label">
              Complaint Type
            </label>
            <div class="col-sm-10">
              <select 
              name="complainttype"
              id="complainttype"
              onChange={(e)=>{setComplaintType(e.target.value);}}>{options}</select>
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              Request Details
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="requestdetails"
                id="requestdetails"
                required
                onChange={(e) => {
                  setRequestDetails(e.target.value);
                }}
              />
            </div>
          </div>
        </form>
        
        <button type="submit" class="btn btn-success">
          Submit
        </button>
        <br />
        <br />
        <button type="submit" class="btn btn-danger">
          Cancel
        </button>
      </div>
    </>
  );
};

export default Ticket;
