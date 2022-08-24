import React, { useState,useEffect } from 'react';
import{Link,useNavigate} from 'react-router-dom';


const Status=()=>{
    return (
    <>
    <Element coursename="Computer Science"  courseid="1235" date="23-8-2022" status="pending"/>
    <Element coursename="Computer Science"  courseid="1235" date="23-8-2022" status="pending"/>
    </>
    )
}

const Element=(props)=>{
    return (
        <div> 
        <span className="text">Application submitted</span>  
        <span className="courseName"> {props.coursename} </span>
        <span className="courseId">Course Id: {props.courseid}</span> 
        <span className="date">Date: {props.date}</span>  
        <button>Withdraw</button> 
        <span className="status">{props.status} </span>
        </div>
    )
}

export default Status;