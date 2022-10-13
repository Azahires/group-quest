import React from "react";
import "./Students.css"


const Students = (props) => {
return(
    <div>
        <h1>{props.name}</h1>
        <p>{props.age}</p>
        <p>{props.loisirs.join(" ")}</p>
        <p>{props.softskills.join(" ")}</p>

    </div>



)
}




export default Students;