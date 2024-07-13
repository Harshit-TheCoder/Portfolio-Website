import React from "react";
import "../css/heading.css";
const Heading = ({heading}) => {
    return(
        <center><h3 className="project-experience-heading" style={{ color: "#fc6d6d", margin:"10px", padding:"10px", fontFamily:"serif"}}>{heading}</h3></center>
        
    );
};
export default Heading;