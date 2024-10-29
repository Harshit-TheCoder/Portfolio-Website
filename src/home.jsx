import React from 'react';
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import MyImage from "./components/myimage";
// Import your local image
// import bgimg from "./components/myimage.jpg";
import cpplang from "./components/skills/cpplang.png";
import clang from "./components/skills/clang.png";
import pylang from "./components/skills/pylang.png";
import nodejs from "./components/skills/nodejs.png";
import react from "./components/skills/react.png";
import java from "./components/skills/javalang.png";
import html from "./components/skills/html.png";
import css from "./components/skills/css.png";
import js from "./components/skills/javascript.png";
import sql from "./components/skills/postgres.png";
import ml from "./components/skills/mlds.png";
import git from "./components/skills/git.png";
import hackerrank from "./components/hackerrank.png";
import codechef from "./components/Codechef.png";
import codingninjas from "./components/CodingNinjas.png";
import leetcode from "./components/leetcodeimage.jpeg";
import flask from "./components/skills/flask.png";
import figma from "./components/skills/figma.png";
import typescript from "./components/skills/typescript.png";
import tailwind from "./components/skills/tailwind.png";
import laptop from "./components/skills/laptopimage.svg"
import "../src/css/home.css";
function Home(){
    return(
        <div style={{ height:"260vh"}}>
            <Header/>
            <Main>
              <div className='container'>
                <div className='row'>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 welcome-info-div' style={{ display:"flex", flexDirection:"column", height:"60vh", justifyContent:"center" , textAlign:"left"}}>
                    <h1 style={{fontSize:"64px"}}>Hello!</h1>
                    <h2 style={{fontSize:"64px"}}>I am Harshit Harlalka</h2>
                    <p>I am thrilled to have this opportunity to introduce myself to you.
                    I always had a passion for Artificial Intelligence and Machine Learning. 
                    Over the years, I've had the privilege of learning coding from a personalized Tutor and Online Courses.</p>
                    <p>
                    These experiences have not only shaped my professional journey but also allowed me to develop a keen eye for Coding.
                    </p>
                    
                  </div>
                
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 welcome-info-image'>
                      <center><MyImage /></center> 
                  </div>
                </div>
              </div>
                  <br /> <br /> <hr style={{ background:"darkblue", height:"3px"} }/> <br />
              <div className='container'>
                <div className="row">
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 '>
                    <img src={laptop} className="svgimage" alt="SVG Image" width="500" height="500" />
                  </div>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3'>
                    <h2>My Skills: </h2>
                    <br />
                    <div class="grid-container">
                        <div style={{display:"flex", flexDirection:"column" ,color:"green"}}><img src={cpplang} alt="" style={{width:"50px"}}/>C++</div>
                        <div style={{display:"flex", flexDirection:"column" ,color:"green"}}><img src={clang} alt="" style={{width:"50px"}}/>C</div>
                        <div style={{display:"flex", flexDirection:"column" ,color:"green"}}><img src={pylang} alt="" style={{width:"50px"}}/>Python</div>
                        <div style={{display:"flex", flexDirection:"column" ,color:"green"}}><img src={java} alt="" style={{width:"50px"}}/>Java</div>
                        <div style={{display:"flex", flexDirection:"column" ,color:"green"}}><img src={react} alt="" style={{width:"50px"}}/>ReactJS</div>
                        <div style={{display:"flex", flexDirection:"column" ,color:"green"}}><img src={html} alt="" style={{width:"50px"}}/>HTML</div>
                        <div style={{display:"flex", flexDirection:"column" ,color:"green"}}><img src={css} alt="" style={{width:"50px"}}/>CSS</div>
                        <div style={{display:"flex", flexDirection:"column" ,color:"green"}}><img src={tailwind} alt="" style={{width:"50px"}}/>Tailwind CSS</div>
                        <div style={{display:"flex", flexDirection:"column" ,color:"green"}}><img src={js} alt="" style={{width:"50px"}}/>Javascript</div>
                        <div style={{display:"flex", flexDirection:"column" ,color:"green"}}><img src={typescript} alt="" style={{width:"50px"}}/>Typescript</div>
                        <div style={{display:"flex", flexDirection:"column" ,color:"green"}}><img src={nodejs} alt="" style={{width:"50px"}}/>NodeJS</div>
                        <div style={{display:"flex", flexDirection:"column" ,color:"green"}}><img src={sql} alt="" style={{width:"50px"}}/>SQL</div>
                        <div style={{display:"flex", flexDirection:"column" ,color:"green"}}><img src={git} alt="" style={{width:"50px"}}/>GIT</div>
                        <div style={{display:"flex", flexDirection:"column" ,color:"green"}}><img src={flask} alt="" style={{width:"50px"}}/>Flask</div>
                        <div style={{display:"flex", flexDirection:"column" ,color:"green"}}><img src={ml} alt="" style={{width:"50px"}}/>ML</div>
                        <div style={{display:"flex", flexDirection:"column" ,color:"green"}}><img src={figma} alt="" style={{width:"50px"}}/>Figma</div>
                    </div>
                  </div>
                </div>
              </div>
              <br /> <br /> <hr style={{ background:"darkblue", height:"3px"} }/> <br />
              <div className='container'>
              <h2>Coding Platform Links:</h2>
                <div className="row">
                  
                  <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 ' style={{display:"flex", flexDirection:"column"}}>
                  
                    <center>
                    
                    <a href="https://leetcode.com/u/harlalkaharshit/">
                    <img src={leetcode} alt="" height="70px" style={{borderRadius:"50px" ,width:"70px"}}/>
                    </a>
                      </center>
                  </div>
                  <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 ' style={{display:"flex", flexDirection:"column"}}>
                    <center>
                    
                    
                     <a href="https://www.naukri.com/code360/profile/e09e17e2-f5aa-4cbb-b49e-190ef3c13b5c">
                     <img src={codingninjas} alt="" height="70px" style={{borderRadius:"5px" ,width:"120px"}}/>
                     </a>
                     </center>
                  </div>
                  <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 ' style={{display:"flex", flexDirection:"column"}}>
                    <center>
                     
                    
                    <a href="https://www.hackerrank.com/profile/hh2044">
                    <img src={hackerrank} alt="" height="70px" style={{borderRadius:"10px" ,width:"70px"}}/>
                    </a>
                    </center>
                  </div>
                  <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 ' style={{display:"flex", flexDirection:"column"}}>
                    <center>
                     
                    
                    <a href="https://www.codechef.com/users/adapt_goats_66">
                    <img src={codechef} alt="" height="70px" style={{borderRadius:"40px", width:"120px"}}/>
                    </a>
                    </center>

                  </div>
                </div>
              </div>
            </Main>
            <Footer />
        </div>
    );
}

export default Home;
