import React from "react";
import Carousel from "./carousel";
import "../css/experience.css";
const Experience_Component = ({images}) =>{
    return(
        <ol>
            <li>
                <h5 className="Experience_Project_Heading">SRM University EEE E-Lab Website</h5>
                <p className="Experience_Project_Content">
                    This is the EEE-ELab website. I have worked as a Frontend-Developer and modified the frontend of website template.
                    <br />
                    Additionally I have also worked upon the Circuit Simulator, adding components and styling.
                    <br />
                </p>
                <center><Carousel images={images} style={{width:"700px", height:"900px"}} /></center>
            </li>
        </ol>
    );
};
export default Experience_Component;