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
import cppimg from "./components/Courses/CPP Course.png"
import pyimg from "./components/Courses/python_course.png"
import webdevimg from "./components/Courses/WebDevelepment course.png"
import coincent from "./components/Courses/Coincent.jpg";
import hack1 from "./components/Courses/Hackathon1.jpg";
import hack2 from "./components/Courses/Hackathon2.jpg";
import hack3 from "./components/Courses/BugBuster.png";
import insta from "./components/Courses/Insta.jpg";
import insta2 from "./components/Courses/Insta2.jpg";
import insta3 from "./components/Courses/Insta3.jpg";
import insta4 from "./components/Courses/Insta4.jpg";
import oyo from "./components/Courses/Oyo.jpg";
import oyo2 from "./components/Courses/Oyo2.jpg";
import oyo3 from "./components/Courses/Oyo3.jpg";
import oyo4 from "./components/Courses/Oyo4.jpg";
import oneStop1 from "./components/Courses/OneStop (1).png";
import oneStop2 from "./components/Courses/OneStop (2).png";
import teachnook1 from "./components/Courses/Teachnook1.jpg";
import teachnook2 from "./components/Courses/Teachnook2.jpg";
import hackerrank from "./components/Courses/HackerRankJava.png";
import mech1 from "./components/Courses/Mech1.jpg";
import mech2 from "./components/Courses/Mech2.jpg";
import genai1 from "./components/Courses/GenAI1.png";
import genai2 from "./components/Courses/GenAI2.png";
import nextjs from "./components/Courses/NextJS.png";
import mldlnlp from "./components/Courses/NLP.png";
import flipkart from "./components/Courses/flipkart.png";
import copilot from "./components/Courses/Copilot.png";
import bussiness from "./components/Courses/BussinesChat.png";
import GenAI from "./components/Courses/GenAI.png";
import ethics from "./components/Courses/GenAIEthics.png";
import ethics2 from "./components/Courses/GenAIEthics2.png";
import ethics3 from "./components/Courses/GenAIEthics3.png";
import ai from "./components/Courses/AIIntro.png";
import microsoft from "./components/Courses/MicrosoftCertificate.png";
import oracle from "./components/Courses/Oracle.png";
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
                    
                    <AchievementsComponent images={[microsoft]} heading={'Career Essentials in Generative AI with Microsoft and LinkedIn'} content={'Above is the certificate for Career Essentials in Generative AI with Microsoft and LinkedIn'} />
                    <AchievementsComponent images={[oracle]} heading={'Oracle'} content={'Above is the certification for Oracle cloud infrastructure AI Foundation Associate'} />
                    <AchievementsComponent images={[genai1, genai2]} heading={'Generative AI'} content={'Above are the certificates for completing the LinkedIn Learning Course on Generative AI'} />
                    <AchievementsComponent images={[GenAI]} heading={'Evolution of Generative AI'} content={'Above is the certificate for completing the course Evolution of Generative AI.'} />
                    <AchievementsComponent images={[copilot]} heading={'Copilot'} content={'Above is the certificate for the completing the course on Microsoft Copilot'} />
                    <AchievementsComponent images={[bussiness]} heading={'Learning Microsoft 365 Copilot and Bussiness Chat'} content={'Above is the certificate for completing the course on Learning Microsoft 365 Copilot and Bussiness Chat '} />
                    <AchievementsComponent images={[ethics, ethics2, ethics3]} heading={'Ethics in Generative AI'} content={'Above is the certificates for the course completion in topic , ethics in Generative AI'} />
                    <AchievementsComponent images={[ai]} heading={'Introduction to AI'} content={'Above is the certificate for completing the course of topic Introduction to Artificial Intelligence'} />
                    
                    <AchievementsComponent images={[mldlnlp]} heading={'Machine and Deep Learning, NLP Workshop'} content={'Above is the certificate for completing the Comprehensive Udemy Bootcamp on Machine Learning, Deep Learning and Natural Language Processing'} />
                    <AchievementsComponent images={[nextjs]} heading={'NextJs Framework'} content={'Above is the certificate for completing Udemy Course on NextJs'} />
                    <AchievementsComponent images={[cimg]} heading={"Course on C Language"} content={"I had successfully completed the course on C Language from Udemy. The Course gave me deep insights of the language and helped me develop fascinating codes by myself."}/>
                    <AchievementsComponent images={[cppimg]} heading={"Course on C++ Language"} content={"I had successfully completed the course on C++ Language from Udemy. The Course gave me deep insights of the language and helped me develop fascinating codes by myself."}/>
                    <AchievementsComponent images={[pyimg]} heading={"Bootcamp on Python Language"} content={"I had successfully completed the Bootcamp on Python Language from Udemy. The Bootcamp gave me deep insights of the language and helped me develop fascinating codes by myself."+
                                                                                                                "Additionally I have also made some amazing games using tkinter module, performed WebScraping and practised MachineLearning using Tensorflow module."}/>
                    <AchievementsComponent images={[webdevimg]} heading={"Full Stack Web Development Bootcamp"} content={"I had successfully completed the Bootcamp on FullStack Web Development from Udemy. The Bootcamp helped me to master HTML,CSS,Javascript and Node.js for backend including React."+"From this Bootcamp I have made some websites on my own including my own Portfolio Website which u are using now."}/>
                    <AchievementsComponent images={[coincent]} heading={"Coincent ML Course"} content={"I had successfully completed the course on Machine Learning organized by IIT Madras and Coincent. The course has exceptional content and it helped me a lot in refining my knowledge about the subject."}/>
                    <AchievementsComponent images={[flipkart]} heading={'FlipKart Hackathon'} content={'Above is the certificate for participating in the Flipkart Hackathon'} />

                    <AchievementsComponent images={[oneStop1, oneStop2]} heading={'1Stop Training and Internship'} content={'Above are the two Certificates for the Onestop Fronted Web Development Training and Internship Program'} />
                    <AchievementsComponent images={[teachnook1, teachnook2]} heading={'Teachnook Training and Internship'} content={'Above are the two Certificates for the Teachnook Training and Internship Program in Machine Learning Domain'} />
                    <AchievementsComponent images={[hackerrank]} heading={'HackerRank Java Certification'} content={'Above is the HackerRank Java Basic Certification'} />

                    <AchievementsComponent images={[hack1, hack2, hack3]} heading={'SRM Hackathons'} content={'Above are the two Hackathon Certificates that I won after participating at SRM. I was ranked 7th and 8th in the two hackathons respectively'} />
                    <AchievementsComponent images={[insta, insta2, insta3, insta4]} heading={"Instagram Auth Clone Bootcamp"} content={'Here are the certificates I got after being a part of Instagram Auth Clone Bootcamp organized by DevTown'} />
                    <AchievementsComponent images={[oyo, oyo2, oyo3 , oyo4]} heading={"Oyo Object Detection Bootcamp"} content={'Here are the certificates I got after being a part of Oyo Object Detection Bootcamp organized by DevTown'} />
                    <AchievementsComponent images={[mech1, mech2]} heading={'SRM Mechanical Workshop'} content={'Above are the two Mechanical Workshop Competition Certificates that I won after participating at SRM. I was ranked 2nd in the two competitions respectively'} />
                    
                    {/* <AchievementsComponent images={[mech1, mech2]} heading={'SRM Mechanical Workshop'} content={'Above are the two Mechanical Workshop Competition Certificates that I won after participating at SRM. I was ranked 2nd in the two competitions respectively'} />
                     */}
                    </ol>
                    <div style={{height: "100px"}}>

                    </div>
                </div>
            </Main>
            <Footer />
        </div>
    );
}
export default Certifications;