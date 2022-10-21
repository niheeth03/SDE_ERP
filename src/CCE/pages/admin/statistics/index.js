import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import CourseInfo from "./course_info"
import './style_stat.css'
import axios from 'axios'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'No. of short term courses ongoing',
    },
  },
};

const labels = ['CSE','EE','ME','CH','CE'];

export const data = {
  labels,
  datasets: [
    {
      label: 'No.of courses ',
      data: [1,2,3,4,5],
      backgroundColor: 'rgba(0,0,255,1)',
    },
   
  ],
};

export default function Attendance() {
   const [CoursesList,setCoursesList]=useState([]);
   const courseRecords = async()=>{
    const res=await axios.post("/cce/admin/cceCoursesDisplay");
      setCoursesList(res.data) ;
    };
    useEffect(() => {
      
    courseRecords()
      
    }, [])
    
    const Records = {
      
      coursesList:CoursesList
    }
    return (
      <body>
        <div className="d-flex flex-column align-items-center ">
          <div className="justify-content-between w-50 h-50 bg-white ">
            <Bar
              options={options} data={data}    
            />
          </div>
        </div>
        <div className="d-flex flex-column">
          courseRecords();
          <CourseInfo
            ListOfCourses={Records.coursesList}
           />
        </div>
      </body>
    );
  }
  
