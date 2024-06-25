import React from 'react';
import  Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Description from './aboutme_description';
import MyImage from './components/myimage';
function Home(){
    return(
        <div>
            <Header/>
            <Main>
            <div className='container'>
              <div className='row'>
              <div className='col-6 '>
                <center><h1 style={{ fontFamily: 'serif', color: 'maroon' }}>About</h1></center>
                
                <Description />
                </div>
                <div className='col-6'>
                   <center><MyImage /></center>
                    
                </div>
              </div>
                

            </div>
                
            </Main>
            <Footer />
        </div>
    );
}

export default Home;