import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Already user logged in 
// Show list of all courses - Course, Course ID, Dept email id



const Offers = () => {
    const [data, getData] = useState("");

    useEffect(() => {
        getAllData();
    }, []);

    const getAllData = () => {
        axios.get("/international_admissions/fetchdata")
        .then((response) => {
            console.log(response);
        })
        .catch(error => console.log(error));
    }
    return (
        <>
            <table>
                <thead>
                    <th>Degree</th>
                    <th>Field</th>
                    <th>Course Id</th>
                    <th>Apply Here</th>
                    <th>Deadline</th>

                </thead>
                <Element degree="Bachelors" field="Computer Science" courseId="12345" link="lorem ipsum" deadline="12-2-2022" />
                <Element degree="Masters" field="Computers" courseId="1345" link="lorem ipsum" deadline="12-2-2022" />
            </table>
        </>

    )
}

const Element = (props) => {
    return (<tr>
        <td>{props.degree}</td>
        <td>{props.field}</td>
        <td>{props.courseId}</td>
        <td>{props.link}</td>
        <td>{props.deadline}</td>
    </tr>)
}

export default Offers;