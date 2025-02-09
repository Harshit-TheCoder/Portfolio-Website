import React from "react";
import Header from "./components/header";
import Main from './components/main';
import Footer from "./components/footer";
import ProjectComponents from "./components/Project_Components";
import "./css/carouselLayout.css";
import "./css/projects.css";
import img1 from "./components/img1.jpg";
import javabite1 from "./components/JavaBite/Javabite (1).png";
import javabite2 from "./components/JavaBite/Javabite (2).png";
import javabite3 from "./components/JavaBite/Javabite (3).png";
import javabite4 from "./components/JavaBite/Javabite (4).png";
import javabite5 from "./components/JavaBite/Javabite (5).png";
import javabite6 from "./components/JavaBite/Javabite (6).png";
import algovault1 from "./components/Algovault/Algovault (1).png";
import algovault2 from "./components/Algovault/Algovault (2).png";
import algovault3 from "./components/Algovault/Algovault (3).png";
import algovault4 from "./components/Algovault/Algovault (4).png";
import algovault5 from "./components/Algovault/Algovault (5).png";
import algovault6 from "./components/Algovault/Algovault (6).png";
import algovault7 from "./components/Algovault/Algovault (7).png";
import algovault8 from "./components/Algovault/Algovault (8).png";
import algovault9 from "./components/Algovault/Algovault (9).png";
import algovault10 from "./components/Algovault/Algovault (10).png";
import diagnoseDoc1 from "./components/health_website_images/DiagnoseDoc (10).png";
import diagnoseDoc2 from "./components/health_website_images/DiagnoseDoc (24).png";
import diagnoseDoc3 from "./components/health_website_images/DiagnoseDoc (34).png";
import diagnoseDoc4 from "./components/health_website_images/DiagnoseDoc (11).png";
import diagnoseDoc5 from "./components/health_website_images/DiagnoseDoc (12).png";
import diagnoseDoc6 from "./components/health_website_images/DiagnoseDoc (35).png";
import passwordimg1 from "./components/password_generator_website/password_generator_image (1).png";
import passwordimg2 from "./components/password_generator_website/password_generator_image (2).png";
import passwordimg3 from "./components/password_generator_website/password_generator_image (3).png";
import languageimg1 from "./components/language_translate_website/language_translator (1).png";
import languageimg2 from "./components/language_translate_website/language_translator (2).png";
import languageimg3 from "./components/language_translate_website/language_translator (3).png";
import heart1 from "./components/heartscripts/hearscripts1 (1).png"
import heart2 from "./components/heartscripts/hearscripts1 (2).png"
import heart3 from "./components/heartscripts/hearscripts1 (3).png"
import heart4 from "./components/heartscripts/hearscripts1 (4).png"
import vault from "./components/heartscripts/notesvault.png";
import colour from "./components/heartscripts/Palleteplay.png";
import gps1 from "./components/gpsbasedtollsystemwebsite/gpsbased (1).png"
import gps2 from "./components/gpsbasedtollsystemwebsite/gpsbased (2).png"
import gps3 from "./components/gpsbasedtollsystemwebsite/gpsbased (3).png"
import gps4 from "./components/gpsbasedtollsystemwebsite/gpsbased (4).png"
import gps5 from "./components/gpsbasedtollsystemwebsite/gpsbased (5).png"
import Elab1 from "./components/srm_elab_images/elab (1).png";
import Elab2 from "./components/srm_elab_images/elab (2).png";
import Elab3 from "./components/srm_elab_images/elab (3).png";
import Elab4 from "./components/srm_elab_images/elab (4).png";
import Elab5 from "./components/srm_elab_images/elab (5).png";
import Elab6 from "./components/srm_elab_images/elab (6).png";
import Elab7 from "./components/srm_elab_images/elab (7).png";
import covid from "./components/Covid19-Website.png";


function Projects() {
  // Define your images for the Carousel component
  const projectImages1 = [diagnoseDoc1, diagnoseDoc2, diagnoseDoc3, diagnoseDoc4, diagnoseDoc5, diagnoseDoc6];
  const projectImages2 = [passwordimg1, passwordimg2, passwordimg3];
  const projectImages3 = [ languageimg3,languageimg1, languageimg2,];
  const projectImages4 = [heart1, heart2, heart3, heart4];
  const projectImages5 = [vault];
  const projectImages6 = [colour];
  const projectImages7 = [algovault1, algovault2, algovault3, algovault4, algovault5, algovault6, algovault7, algovault8, algovault9, algovault10];
  const Images = [Elab1,Elab2,Elab3,Elab4,Elab5,Elab6,Elab7];
    return (
    <div>
      <Header />
      <Main>
        {/* Pass the images prop to the Carousel component */}
        <center>
        <h1 className="project_heading">My Projects:</h1>
        </center>
        <div className="container project_container">
              <ProjectComponents I1={projectImages1} I2={projectImages7} I3={[gps1, gps2,gps3, gps4, gps5]} H1="HealthCare-Website"  H2="AlgoVault" H3="GPS-TOLL-SYSTEM-WEBAPP" />
              <ProjectComponents I1={projectImages3} I2={projectImages5} I3={projectImages6} H1="Language-Translator-Website" H2="NoteVault"  H3="Color-Picker"/>
              <ProjectComponents I1={Images} I2={projectImages2} I3={projectImages4} H1="SRM-Elab-Website" H2="Password-Generator-Website" H3="Love-Letter-Website"/>
              <ProjectComponents I1={[img1]} I2={[img1]} I3={[javabite1, javabite2, javabite3, javabite4, javabite5, javabite6]} H1="Upcoming" H2="Upcoming"  H3="JavaBite"/>
              {/* <ProjectComponents I1={[img1]} I2={[img1]} I3={[img1]} H1="Upcoming" H2="Upcoming"  H3="Upcoming"/> */}
              {/* <ProjectComponents I1={[img1]} I2={[img1]} I3={[img1]} H1="Upcoming" H2="Upcoming"  H3="Upcoming"/> */}
        </div>
        <div style={{height: "100px"}}></div>
         </Main>
      <Footer />
    </div>
  );
}
export default Projects;

