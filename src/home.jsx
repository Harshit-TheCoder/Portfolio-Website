import React from 'react';
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import MyImage from "./components/myimage";
// Import your local image
// import bgimg from "./components/myimage.jpg";
import "../src/css/home.css";
function Home(){
    return(
        <div>
            <Header/>
            <Main>
            <div className='container'>
              <div className='row'>
              <div className='col-6 ' style={{ display:"flex", flexDirection:"column", height:"60vh", justifyContent:"center" , textAlign:"left"}}>
                <h1>Hello!</h1>
                <h2>I am HARSHIT HARLALKA</h2>
                <div className='wrapper'>
                <h3>Skilled in </h3>
                <ul className='dynamic-texts'>
                  <li><span>DS-ALGO</span></li>
                  <li><span>C, PYTHON</span></li>
                  <li><span>JAVA,C++</span></li>
                  <li><span>HTML,CSS</span></li>
                  <li><span>JAVASCRIPT</span></li>
                  <li><span>REACT-JS</span></li>
                </ul>
                </div>
                <div>
                  <a href="/login"><button className='btn btn-primary' style={{ marginRight:"30px"}}>Login</button></a>
                  <a href="/signup"><button className='btn btn-primary'>SignUp</button></a>
                </div>
                
                </div>
                <div className='col-6'>
                    <MyImage />
                </div>
              </div>
                

            </div>
             
            </Main>
            <Footer />
        </div>
    );
}

export default Home;
