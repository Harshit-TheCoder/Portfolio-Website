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
import flask from "./components/skills/flask.png";
import laptop from "./components/skills/laptopimage.svg"
import "../src/css/home.css";
function Home(){
    return(
        <div style={{ height:"150vh"}}>
            <Header/>
            <Main>
            <div className='container'>
              <div className='row'>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 welcome-info-div' style={{ display:"flex", flexDirection:"column", height:"60vh", justifyContent:"center" , textAlign:"left"}}>
                  <h1>Hello!</h1>
                  <h2>I am HARSHIT HARLALKA</h2>
                  <p>I am thrilled to have this opportunity to introduce myself to you.
                  I always had a passion for Artificial Intelligence and Machine Learning. 
                  Over the years, I've had the privilege of learning coding from a personalized Tutor and Online Courses.</p>
                  <p>
                  These experiences have not only shaped my professional journey but also allowed me to develop a keen eye for Coding.
                  </p>
                  
                </div>
              
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 welcome-info-image'>
                    <MyImage />
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
                  <div><img src={cpplang} alt="" style={{width:"50px"}}/></div>
                  <div><img src={clang} alt="" style={{width:"50px"}}/></div>
                  <div><img src={pylang} alt="" style={{width:"50px"}}/></div>
                  <div><img src={java} alt="" style={{width:"50px"}}/></div>
                  <div><img src={react} alt="" style={{width:"50px"}}/></div>
                  <div><img src={html} alt="" style={{width:"50px"}}/></div>
                  <div><img src={css} alt="" style={{width:"50px"}}/></div>
                  <div><img src={js} alt="" style={{width:"50px"}}/></div>
                  <div><img src={nodejs} alt="" style={{width:"50px"}}/></div>
                  <div><img src={sql} alt="" style={{width:"50px"}}/></div>
                  <div><img src={git} alt="" style={{width:"50px"}}/></div>
                  <div><img src={flask} alt="" style={{width:"50px"}}/></div>
                  <div><img src={ml} alt="" style={{width:"50px"}}/></div>
              </div>
                  </div>
                  </div>
                </div>
            </Main>
            <Footer />
        </div>
    );
}

export default Home;
