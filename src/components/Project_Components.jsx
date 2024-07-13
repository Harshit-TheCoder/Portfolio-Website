import React from "react";
import ProjectCarousel from "./projectcarousel";
import ProjectHeading from "./projectHeading";
const ProjectComponents = ({I1,I2,I3,H1,H2,H3}) =>{
    return(
        <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">

                <a href={`https://github.com/Harshit-TheCoder/${H1}.git`} className="project_link"><center><ProjectHeading heading={H1} /></center></a>
                <center><ProjectCarousel images={I1} /></center>
                
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <a href={`https://github.com/Harshit-TheCoder/${H2}.git`} className="project_link"><center><ProjectHeading heading={H2} /></center></a>
                <center><ProjectCarousel images={I2} /></center>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <a href={`https://github.com/Harshit-TheCoder/${H3}.git`} className="project_link"><center><ProjectHeading heading={H3} /></center></a>
                <center><ProjectCarousel images={I3} /></center>
            </div>
        </div>
    );
};
export default ProjectComponents;