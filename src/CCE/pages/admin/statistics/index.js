import React from 'react';
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
import './style_statistics.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const courseRecords = {
    ListOfCourses: [
      { name: "ML", participants:"50", start_date:"09-08-2017",end_date:"09-09-2017",cost:"2000",fees:"500"},
      { name: "DS", participants:"50", start_date:"09-08-2017",end_date:"09-09-2017",cost:"2000",fees:"500"},
      { name: "Internet of Things", participants:"100", start_date:"09-08-2017",end_date:"09-09-2017",cost:"2000",fees:"500"},
    ],
  };

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
          <CourseInfo
            ListOfCourses={courseRecords.ListOfCourses}
           />
        </div>
      </body>
    );
  }
  
