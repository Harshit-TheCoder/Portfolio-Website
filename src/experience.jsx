import React from "react";
import Header  from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import Elab1 from "./components/srm_elab_images/elab (1).png";
import Elab2 from "./components/srm_elab_images/elab (2).png";
import Elab3 from "./components/srm_elab_images/elab (3).png";
import Elab4 from "./components/srm_elab_images/elab (4).png";
import Elab5 from "./components/srm_elab_images/elab (5).png";
import Elab6 from "./components/srm_elab_images/elab (6).png";
import Elab7 from "./components/srm_elab_images/elab (7).png";
import gps1 from "./components/gpsbasedtollsystemwebsite/gpsbased (1).png"
import gps2 from "./components/gpsbasedtollsystemwebsite/gpsbased (2).png"
import gps3 from "./components/gpsbasedtollsystemwebsite/gpsbased (3).png"
import gps4 from "./components/gpsbasedtollsystemwebsite/gpsbased (4).png"
import gps5 from "./components/gpsbasedtollsystemwebsite/gpsbased (5).png"
import ExperienceComponent from "./components/experience_component";
import "./css/experience.css";
let Images = [Elab1,Elab2,Elab3,Elab4,Elab5,Elab6,Elab7];
function Experience(){
    return(
        <div>
            <Header />
            <Main>
                <center><h1 class="Experience_Heading" style={{fontSize:"70px"}}>Projects</h1></center>
                <div className="experience-div" style={{display:"flex", flexDirection:"column", gap:"20px"}}>
                    <ExperienceComponent images={Images} heading={"SRM University EEE E-Lab Website"} content={"This is the EEE-ELab website. I have worked as a Frontend-Developer and modified the frontend of website template.Additionally I have also worked upon the Circuit Simulator, adding components and styling."}/>
                    <ExperienceComponent images={[gps1, gps2, gps3, gps4, gps5]} heading={"GPS Based Toll System Website"} content={"This is the GPS-based Toll System Website.I have made this website as a participant in Intel Unnati Industrial Training and Internship Program."} />
                </div>
            </Main>
            <Footer />
        </div>
        
    );
}
export default Experience;
