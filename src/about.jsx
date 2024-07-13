import React from 'react';
import  Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Description from './aboutme_description';
import MyImage from './components/myimage';
import "./css/about.css";
function About(){
    return(
        <div>
            <Header/>
            <Main>
            <center><h1 style={{ fontFamily: 'serif', color: 'maroon' }} className='about-content-heading'>About</h1></center>
            <div className='container'>

              <div className='row'>
                
              <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 about-content-div'>
              
                <Description />
                </div>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 about-content-image'>
                   <center><MyImage /></center>
                    
                </div>
              </div>
                

            </div>
                
            </Main>
            <Footer />
        </div>
    );
}

export default About;