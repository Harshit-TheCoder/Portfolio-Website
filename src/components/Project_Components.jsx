import React, { useState } from "react";
import ProjectCarousel from "./projectcarousel";
import ProjectHeading from "./projectHeading";
const ProjectComponents = ({I1,I2,I3,H1,H2,H3}) =>{
    // const [modalContent, setModalContent] = useState({ title: "", images: [] });
    // const openModal = (title, images) => {
    //     setModalContent({ title, images });
    // };
    return(
        <div className="row">
            {
            //     [{heading: H1, images: I1}, {heading: H2, images: I2}, {heading: H3, images: I3}].map((project, index)=>(
            //         <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            //             <a href={'#'} className="project_link" data-bs-toggle="modal" data-bs-target={`#modal${index}`}
            //             onClick={(e) => {e.preventDefault();openModal(project.heading, project.images);}}>
            //                 <center><ProjectHeading heading={project.heading} /></center></a>
            //             <center><ProjectCarousel images={project.images} /></center>
                

            //             <div class="modal fade" id={`modal${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby={`modalLabel${index}`} aria-hidden="true">
            //             <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
            //                 <div class="modal-content">
            //                     <div class="modal-header">
            //                         <h1 class="modal-title fs-5" id={`modal${index}`}>{modalContent.title}</h1>
            //                         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            //                     </div>
            //                     <div class="modal-body">
            //                         {/* <ProjectCarousel images={modalContent.images} />
            //                             {
            //                                 modalContent.images.map((imageLink, index)=>(
            //                                 <center>
            //                                     <img key={index} src={imageLink} alt="" height="300px" style={{width:"380px", margin:"10px",border:"1px solid maroon", borderRadius:"40px"}}/>
            //                                 </center>
            //                                 ))
            //                             } */}
            //                         <zero-md src={`/mdfiles/HealthCare-Website.md`}>
            //                         <template>
            //                             {/* <style>
            //                                 div {
            //                                     font-family: "Raleway", sans-serif;
            //                                 }
            //                                 h1,
            //                                 h2 {
            //                                     margin: 0.5em 0;
            //                                     color: #2c99ce;
            //                                     text-align: center;
            //                                 }
            //                             </style> */}
            //                         </template>
            //                         </zero-md>
            //                     </div>
            //                     <div class="modal-footer">
            //                         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>

                        
            //         </div>
            //     ))
            }
            
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">

                <a href={'#'} className="project_link" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><center><ProjectHeading heading={H1} /></center></a>
                <center><ProjectCarousel images={I1} /></center>
                
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <a href={'#'} className="project_link" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><center><ProjectHeading heading={H2} /></center></a>
                <center><ProjectCarousel images={I2} /></center>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <a href={'#'} className="project_link" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><center><ProjectHeading heading={H3} /></center></a>
                <center><ProjectCarousel images={I3} /></center>
            </div>

            

        </div>
            
    );
};
//  `https://github.com/Harshit-TheCoder/${H1}.git`
// `https://github.com/Harshit-TheCoder/${H2}.git`
// `https://github.com/Harshit-TheCoder/${H3}.git`
export default ProjectComponents;


