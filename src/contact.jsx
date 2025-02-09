import React from 'react';
import  Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import bgimg from "./components/myimage1.jpg";
import "../src/css/contact.css";
function Contact(){
    return(
        <>
            <Header/>
            <Main>
                
                <div className='contact-div'>
                    <center><h1>Feel free to Contact Me:</h1></center>
                    <center><img src={bgimg} className='contact-page-my-image'/></center>
                    <div className='inner-contact-div'>
                            <div>
                                <a href="https://www.instagram.com/harlalkaharshit/"><img src="instagram_logo.png" alt="Instagram logo" width="50px" /></a>
                            </div>
                            <div>
                                <a href="https://www.facebook.com/harshit.harlalka.1/"><img src="facebook_logo.png" alt="Instagram logo" width="50px" /></a>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/in/harshit-harlalka-26b200233/"><img src="linkedin_logo.png" alt="Instagram logo" width="50px" /></a>
                            </div>
                            <div>
                                <a href="#"><img src="github.png" alt="Instagram logo" width="50px" /></a>
                            </div>
                    </div>    
                </div>
                {/* https://github.com/Harshit-TheCoder */}
             </Main>
            <Footer />
        </>
    );
}

export default Contact;

                        