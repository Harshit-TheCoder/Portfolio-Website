import React from "react";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import AchievementsComponent from "./components/achievement_component";
import "./css/achievements.css";
import aimlimg1 from "./components/AIML_course_certificates/aiml_course (1).png";
import aimlimg2 from "./components/AIML_course_certificates/aiml_course (2).png";
import aimlimg3 from "./components/AIML_course_certificates/aiml_course (3).png";
import aimlimg4 from "./components/AIML_course_certificates/aiml_course (4).png";
import cimg from "./components/Courses/C Course.png";
import cppimg from "./components/Courses/C++ Course.png"
import pyimg from "./components/Courses/python_course.png"
import webdevimg from "./components/Courses/WebDevelepment course.png"
let images=[aimlimg4,aimlimg1,aimlimg2,aimlimg3];
let heading, content;
function Certifications(){
    return(
        <div>
            <Header />
            <Main>
                <center><h1 style={{fontSize:"50px"}}>Certifications:</h1></center>
                <div className="achievements-container">
                    <ol style={{ listStyle:"none"}}>
                    <AchievementsComponent images={[aimlimg4,aimlimg1,aimlimg2,aimlimg3]} heading={"Course on Artificial Intelligence and Machine Learning with Python"} content={"I had successfully completed the course on Artificial Intelligence and Machine Learning. Towards the end of the course I appeared for a"+
                                                                                                        "Microsoft Azure Certification Exam, qualifying which I got Microsoft Certified in Azure Fundamentals."}/>
                    
                    <AchievementsComponent images={[cimg]} heading={"Course on C Language"} content={"I had successfully completed the course on C Language from Udemy. The Course gave me deep insights of the language and helped me develop fascinating codes by myself."}/>
                    <AchievementsComponent images={[cppimg]} heading={"Course on C++ Language"} content={"I had successfully completed the course on C++ Language from Udemy. The Course gave me deep insights of the language and helped me develop fascinating codes by myself."}/>
                    <AchievementsComponent images={[pyimg]} heading={"Bootcamp on Python Language"} content={"I had successfully completed the Bootcamp on Python Language from Udemy. The Bootcamp gave me deep insights of the language and helped me develop fascinating codes by myself."+
                                                                                                                "Additionally I have also made some amazing games using tkinter module, performed WebScraping and practised MachineLearning using Tensorflow module."}/>
                    <AchievementsComponent images={[webdevimg]} heading={"Full Stack Web Development Bootcamp"} content={"I had successfully completed the Bootcamp on FullStack Web Development from Udemy. The Bootcamp helped me to master HTML,CSS,Javascript and Node.js for backend including React."+"From this Bootcamp I have made some websites on my own including my own Portfolio Website which u are using now."}/>
                    </ol>
                </div>
            </Main>
            <Footer />
        </div>
    );
}
export default Certifications;