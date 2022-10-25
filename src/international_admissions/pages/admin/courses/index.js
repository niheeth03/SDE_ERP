/*admin can add courses and all the details about it */

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import moment, { calendarFormat } from "moment";
import axios from "axios";

function Courses() {
  const [courseId, setCourseId] = useState("");
  const [courseName, setCourseName] = useState("");
  const [department, setDepartment] = useState("");
  const [degree, setDegree] = useState("");
  const [date, setDate] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = () => {
    const newStudent = {
      courseId: courseId,
      courseName: courseName,
      department: department,
      degree: degree,
      deadline: date,
    };
    console.log("Sending api request\n");
    axios.post("/international_admissions/admin/addcourse", newStudent);
  };

 

 

  const onDateChange = (newDate) => {
    let Date = newDate.toString();
    setDate(Date);
    console.log(newDate);
  };

  return (
    <div class="applica">
      <form action="" className="farm" onSubmit={handleSubmit}>
        {/* <button type="submit" class="btn btn-success" onClick={handleSubmit}>
            Add
          </button> */}
        
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Course Id{" "}
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
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Course Name{" "}
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
            <label for="qualification" class="form-label">
              Degree
            </label>
            <div class="col-sm-10">
              <select
                name="qualification"
                id="qualification"
                onChange={(e) => {
                  setDegree(e.target.value);
                }}
              >
                <option value=" ">Select Degree</option>
                <option value="Bachelors">Bachelors</option>
                <option value="Masters">Masters</option>
                <option value="Phd">Phd</option>
              </select>
            </div>
          </div>

          <div class="row mb-3">
            <label for="qualification" class="form-label">
              Department
            </label>
            <div class="col-sm-10">
              <select
                name="qualification"
                id="qualification"
                onChange={(e) => {
                  setDepartment(e.target.value);
                }}
              >
                <option value=" ">Select Department</option>
                <option value="CH">Chemical</option>
                <option value="CSE">Computer Science</option>
                <option value="CE">Civil</option>
                <option value="EE">Electrical</option>
                <option value="ME">Mechanical</option>
                <option value="PH">Physics</option>
                <option value="MA">Maths</option>
                <option value="HS">Humanities and Social Sciences</option>
              </select>
            </div>
          </div>

           <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Deadline{" "}
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputEmail3"
              required
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
         </div>

          
          <br />
          <button type="submit" class="btn btn-success" onClick={()=>handleSubmit}>
            Add
          </button>
          <br />
          <br />
          <button type="submit" class="btn btn-danger">
            Cancel
          </button>
        </form>
      </div>

  );
}

export default Courses;
