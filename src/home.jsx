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
import codeforces from "./components/Codeforceslogo.jpg";
import leetcode from "./components/leetcodeimage.jpeg";
import flask from "./components/skills/flask.png";
import figma from "./components/skills/figma.png";
import typescript from "./components/skills/typescript.png";
import tailwind from "./components/skills/tailwind.png";
import laptop from "./components/skills/laptopimage.svg";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "../src/css/home.css";
function Home(){
    return(
        <div style={{ height:"auto"}}>
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
                    <a href="https://drive.google.com/file/d/1jY4gm989BqemAM5UzDYLDHxU3GPvPs7f/view?usp=sharing" className='btn btn-info' style={{ width:"100px", color:"maroon", border:"1px solid darkgreen"}}>Resume</a>
                    <br />
                    <a href="#" type="button" className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal"
                     style={{ width:"200px", color:"maroon", border:"1px solid darkgreen"}}>
                      Offer Letters
                    </a>

                      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-scrollable">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1 class="modal-title fs-5" id="exampleModalLabel">Offer Letters</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div className="container">
                                  <div className="row">
                                  <div>
                                      <h3>Appreciation Letter</h3>
                                    </div>
                                    <div>
                                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                                    <Viewer fileUrl="/AppreciationLetter.pdf" />
                                  </Worker>
                                    </div>
                                  
                                    {/* <a href="https://drive.google.com/file/d/14tqxNYgSLR4AQgEl6jBuEe0AG9Rs_1ma/view?usp=sharing" className='btn btn-link'>Appreciation Letter</a> */}
                                  </div>
                                  <br /><br />
                                  <div className="row">
                                  <div>
                                      <h3>Eduversity Letter of Recommendation</h3>
                                    </div>
                                    <div>
                                    {/* <a href="https://drive.google.com/file/d/1S-Savkb24LorBfAXKMhInWBDJ7TE4sbS/view?usp=sharing" className='btn btn-link'>Eduversity Letter of Recommendation</a> */}
                                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                                    <Viewer fileUrl="/EduversityLOR.pdf" />
                                  </Worker>
                                    </div>
                                    
                                    
                                  </div>
                                  <br /><br />
                                  <div className="row">
                                  <div>
                                      <h3>Coincent Offer Letter</h3>
                                    </div>
                                    <div>
                                    {/* <a href="https://drive.google.com/file/d/1x0QQxYhXCyjlXkd8n27xy-IlUfdGGSCc/view?usp=sharing" className='btn btn-link'>Coincent Offer Letter</a> */}
                                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                                    <Viewer fileUrl="/CoincentOfferLetter.pdf" />
                                  </Worker>
                                      </div>
                                    
                                    
                                  </div>
                                  <br /><br />
                                  <div className="row">
                                  <div>
                                      <h3>OneStop Offer Letter</h3>
                                    </div>
                                    <div>
                                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                                    <Viewer fileUrl="/OneStopOfferLetter.pdf" />
                                  </Worker>
                                    {/* <a href="https://drive.google.com/file/d/1CKCK8ZO5Gl3PEmjC911wftRs3h3bcZCS/view?usp=sharing" className='btn btn-link'>OneStop Offer Letter</a> */}
                                      </div>
                                    
                                    
                                  </div>
                                  <br /><br />
                                  <div className="row">
                                    <div>
                                      <h3>Oasis Infobyte Offer Letter</h3>
                                    </div>
                                    <div>
                                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                                    <Viewer fileUrl="/OasisInfoByteOfferLetter.pdf" />
                                  </Worker>
                                    {/* <a href="https://drive.google.com/file/d/1NInAJYjcuRvESy9xRISaQtbXl7j-MKzT/view?usp=sharing" className='btn btn-link'>Oasis Infobyte Offer Letter</a> */}
                                    </div>
                                    
                                    
                                  </div>

                                  <br /><br />
                                  <div className="row">
                                    <div>
                                      <h3>Teachnook Offer Letter</h3>
                                    </div>
                                    <div>
                                      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                                      <Viewer fileUrl="/TeachnookOfferLetter.pdf" />
                                    </Worker>
                                    {/* <a href="https://drive.google.com/file/d/1G--bIcUNSialJ37KZz0vwHlVin30wm-y/view?usp=sharing" className='btn btn-link'>Teachnook Offer Letter</a> */}
                                    </div>
                                    
                                    
                                  </div>
                                </div>
                                
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 welcome-info-image'>
                      <center><MyImage /></center> 
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row" style={{width:"60px"}}></div>
              </div>
                  <br /> <br /> <hr style={{ background:"darkblue", height:"3px"} }/> <br />
              <div className='container'>
                <div className="row">
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 '>
                    <img src={laptop} className="svgimage" alt="SVG Image" width="500" height="500" />
                  </div>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3'>
                    <h2>My TechStack: </h2>
                    <br />
                    <div className="grid-container">
                        <div className="icon-container" style={{display:"flex", flexDirection:"column" ,color:"green"}}><img src={cpplang} alt="" style={{width:"50px"}}/>C++</div>
                        <div className="icon-container" style={{display:"flex", flexDirection:"column" ,color:"green"}}><img src={clang} alt="" style={{width:"50px"}}/>C</div>
                        <div className="icon-container" style={{display:"flex", flexDirection:"column" ,color:"green"}}><img src={pylang} alt="" style={{width:"50px"}}/>Python</div>
                        <div className="icon-container" style={{display:"flex", flexDirection:"column" ,color:"green"}}><img src={java} alt="" style={{width:"50px"}}/>Java</div>
                        <div className="icon-container" style={{display:"flex", flexDirection:"column" ,color:"green"}}><img src={react} alt="" style={{width:"50px"}}/>ReactJS</div>
                        <div className="icon-container" style={{display:"flex", flexDirection:"column" ,color:"green"}}><img src={html} alt="" style={{width:"50px"}}/>HTML</div>
                        <div className="icon-container" style={{display:"flex", flexDirection:"column" ,color:"green"}}><img src={css} alt="" style={{width:"50px"}}/>CSS</div>
                        <div className="icon-container" style={{display:"flex", flexDirection:"column" ,color:"green"}}><img src={tailwind} alt="" style={{width:"50px"}}/>Tailwind CSS</div>
                        <div className="icon-container" style={{display:"flex", flexDirection:"column" ,color:"green"}}><img src={js} alt="" style={{width:"50px"}}/>Javascript</div>
                        <div className="icon-container" style={{display:"flex", flexDirection:"column" ,color:"green"}}><img src={typescript} alt="" style={{width:"50px"}}/>Typescript</div>
                        <div className="icon-container" style={{display:"flex", flexDirection:"column" ,color:"green"}}><img src={nodejs} alt="" style={{width:"50px"}}/>NodeJS</div>
                        <div className="icon-container" style={{display:"flex", flexDirection:"column" ,color:"green"}}><img src={sql} alt="" style={{width:"50px"}}/>SQL</div>
                        <div className="icon-container" style={{display:"flex", flexDirection:"column" ,color:"green"}}><img src={git} alt="" style={{width:"50px"}}/>GIT</div>
                        <div className="icon-container" style={{display:"flex", flexDirection:"column" ,color:"green"}}><img src={flask} alt="" style={{width:"50px"}}/>Flask</div>
                        <div className="icon-container" style={{display:"flex", flexDirection:"column" ,color:"green"}}><img src={ml} alt="" style={{width:"50px"}}/>ML</div>
                        <div className="icon-container" style={{display:"flex", flexDirection:"column" ,color:"green"}}><img src={figma} alt="" style={{width:"50px"}}/>Figma</div>
                    </div>
                  </div>
                </div>
              </div>

              <br /> <br /> <hr style={{ background:"darkblue", height:"3px"} }/> <br />
              <div className='container'>
                <h2>Coding Platform Links:</h2>
                <div className="row">
                  
                  <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12 ' style={{display:"flex", flexDirection:"column"}}>
                  
                    <center>
                    
                    <a href="https://leetcode.com/u/harlalkaharshit/">
                    <img src={leetcode} alt="" style={{height:"160px" ,width:"100%", borderRadius:"20px"}}/>
                    </a>
                      </center>
                  </div>
                  <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12 ' style={{display:"flex", flexDirection:"column"}}>
                    <center>
                    
                    
                     <a href="https://www.naukri.com/code360/profile/e09e17e2-f5aa-4cbb-b49e-190ef3c13b5c">
                     <img src={codingninjas} alt=""  style={{height:"160px" ,width:"100%", borderRadius:"20px"}}/>
                     </a>
                     </center>
                  </div>
                  <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12 ' style={{display:"flex", flexDirection:"column"}}>
                    <center>
                     
                    
                    <a href="https://www.hackerrank.com/profile/hh2044">
                    <img src={hackerrank} alt=""  style={{height:"160px" ,width:"100%", borderRadius:"20px"}}/>
                    </a>
                    </center>
                  </div>
                  <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12 ' style={{display:"flex", flexDirection:"column"}}>
                    <center>
                     
                    
                    <a href="https://www.codechef.com/users/adapt_goats_66">
                    <img src={codechef} alt=""  style={{height:"160px" ,width:"100%", borderRadius:"20px"}}/>
                    </a>
                    </center>

                  </div>
                  <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12 ' style={{display:"flex", flexDirection:"column"}}>
                    <center>
                     
                    
                    <a href="https://codeforces.com/profile/Harshit-TheCoder">
                    <img src={codeforces} alt=""  style={{height:"160px" ,width:"100%", borderRadius:"20px"}}/>
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
