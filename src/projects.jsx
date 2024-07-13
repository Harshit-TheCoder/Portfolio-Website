import React from "react";
import Header from "./components/header";
import Main from './components/main';
import Footer from "./components/footer";
import ProjectComponents from "./components/Project_Components";
import "./css/carouselLayout.css";
import "./css/projects.css";
import img1 from "./components/img1.jpg";
import healthimg1 from "./components/health_website_images/Health_Website_Preview_pic (1).png";
import healthimg2 from "./components/health_website_images/Health_Website_Preview_pic (2).png";
import healthimg3 from "./components/health_website_images/Health_Website_Preview_pic (3).png";
import healthimg4 from "./components/health_website_images/Health_Website_Preview_pic (4).png";
import healthimg5 from "./components/health_website_images/Health_Website_Preview_pic (5).png";
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
function Projects() {
  // Define your images for the Carousel component
  const projectImages1 = [healthimg1, healthimg2, healthimg3, healthimg4, healthimg5];
  const projectImages2 = [passwordimg1, passwordimg2, passwordimg3];
  const projectImages3 = [ languageimg3,languageimg1, languageimg2,];
  const projectImages4 = [heart1, heart2, heart3, heart4];
  const projectImages5 = [vault];
  const projectImages6 = [colour];
    return (
    <div>
      <Header />
      <Main>
        {/* Pass the images prop to the Carousel component */}
        <center>
        <h1 className="project_heading" style={{   }}>My Projects:</h1>
        </center>
        <div className="container project_container">
              <ProjectComponents I1={projectImages1} I2={projectImages2} I3={projectImages4} H1="HealthCare-Website" H2="Password-Generator-Website" H3="Love-Letter-Website"/>
              <ProjectComponents I1={projectImages3} I2={projectImages5} I3={projectImages6} H1="Language-Translator-Website" H2="NoteVault"  H3="Color-Picker"/>
              <ProjectComponents I1={[img1]} I2={[img1]} I3={[gps1, gps2,gps3, gps4, gps5]} H1="Upcoming"  H2="Upcoming" H3="GPS-TOLL-SYSTEM-WEBAPP" />
              <ProjectComponents I1={[img1]} I2={[img1]} I3={[img1]} H1="Upcoming" H2="Upcoming"  H3="Upcoming"/>
              <ProjectComponents I1={[img1]} I2={[img1]} I3={[img1]} H1="Upcoming" H2="Upcoming"  H3="Upcoming"/>
              <ProjectComponents I1={[img1]} I2={[img1]} I3={[img1]} H1="Upcoming" H2="Upcoming"  H3="Upcoming"/>
        </div>
         </Main>
      <Footer />
    </div>
  );
}
export default Projects;

