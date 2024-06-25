import React from "react";
import Carousels from "./carousel";
import Heading from "./Heading";
const Project_Components = ({I1,I2,H1,H2}) =>{
    return(
        <div className="row">
            <div className="col-md-6">

                <a href={`https://github.com/Harshit-TheCoder/${H1}.git`} className="project_link"><center><Heading heading={H1} /></center></a>
                <center><Carousels images={I1} /></center>
                
            </div>
            <div className="col-md-6">
                <a href={`https://github.com/Harshit-TheCoder/${H2}.git`} className="project_link"><center><Heading heading={H2} /></center></a>
                <center><Carousels images={I2} /></center>
            </div>
        </div>
    );
};
export default Project_Components;