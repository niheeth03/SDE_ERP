import { useRef, useState, useEffect } from "react";
import {Link} from "react-router-dom";


const Offers=()=>{
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
<Element degree="Bachelors" field="Computer Science" courseId="12345" link="lorem ipsum" deadline="12-2-2022"/>
</table>
    </>
  
    )
}

const Element=(props)=>{
 return (<tr>
    <td>{props.degree}</td>
    <td>{props.field}</td>
    <td>{props.courseId}</td>
    <td>{props.link}</td>
    <td>{props.deadline}</td>
 </tr>)
}

export default  Offers;