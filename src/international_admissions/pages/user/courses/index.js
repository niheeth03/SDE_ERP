
import {

    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
} from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "./style.css"

    
const Offers = () => {
    const userName = useRef("");
    const loggedIn = useRef(false);
    const [userData,setUserData]=useState(null);
    const [Login, setLogin] = useState(false);
    const [courses,setCourses]=useState(null);
    let i=0;
    axios.defaults.withCredentials = true;
    useEffect(() => {
        console.log("In use effect")
        axios.get("./login").then(
            (res) => {
                console.log("RESPONSE " + res)
                console.log(res);
                console.log(res[0]);
                console.log();

                for (let x in res) {


                    let a, b;
                    if (x == "data") {
                        console.log("DATA" + res[x]);
                        console.log(JSON.stringify(res[x]));

                        for (let y in res[x]) { if (y == "user") { a = res[x][y] } else { b = res[x][y]; } };
                        console.log("a " + a);
                        console.log("b " + b);
                        const userData = {
                            email: a,
                        }
                        userName.current=(a);
                        console.log("user\n" + userName);
                        axios.post("./display").then((response) => {
                            console.log(response.data);
                            setCourses(response.data);
                        }).catch();
                    }
                }

            })
        }, []);
    const Element = (props) => {
    let i=props.index;

    return (
        <div className="tabl">
        <table class="table table-bordered table-hover">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Course-ID</th>
            <th scope="col">Course Name</th>
            <th scope="col">Deadline</th>
            <th scope="col">Apply</th>
          </tr>
        </thead>
        <tbody> 
    <tr class="table-light">
        <td>{props.courseId}</td>
        <td>{props.courseName}</td>
        <td>{props.deadline}</td>
        <td><button type="submit"class="btn btn-success btn-sm" value="Submit" onClick={()=>handleSubmit(i)}> Apply </button></td>
    </tr>
    </tbody></table></div>)
    }
    const handleSubmit=(i)=>{
            const details={
                email: userName.current,
                courseId : courses[i].courseId,
                courseName: courses[i].courseName
            };
            axios.post("./submit",details).then((response)=>{console.log(response.data)}).catch();
        } 
        return (
            <>
            
            <div>{courses&&courses.map((data)=><Element courseId={data.courseId} courseName={data.courseName} deadline={data.deadline} index={i++} />)}</div>
            
                
            </>
        )
    }



export default Offers;