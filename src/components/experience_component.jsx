import React from "react";
import Carousels from "./carousel";
import "../css/experience.css";
import Heading from "./Heading.jsx";
import "../css/achievements.css";
const ExperienceComponent = ({images}) =>{
    return(
        <ol>
            <li>
                <Heading heading="SRM University EEE E-Lab Website" />
                <div className="list-item-div">
                    <div className="inner-div-1"><center><Carousels images={images} /></center></div>
                    <div className="inner-div-2">
                    <center>
                        <p className="inner-div-2-content" style={{ padding:"10px", margin:"10px", fontFamily:"cursive", fontStyle:"italic"}}>
                                This is the EEE-ELab website. I have worked as a Frontend-Developer and modified the frontend of website template.
                                <br />
                                Additionally I have also worked upon the Circuit Simulator, adding components and styling.
                                <br />
                        </p>
                    </center>
                    </div>
                </div>
            </li>
        </ol>
    );
};
export default ExperienceComponent;