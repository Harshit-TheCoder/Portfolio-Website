import React from "react";
import Header  from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import "../src/css/services.css";
import ServiceComponent from "./components/service_component";
function Services(){
    return(
        <div>
            <Header />
            <Main>
            <center><h1>Services</h1></center>
            
            <div className='container' >
               <ServiceComponent />
            </div>
            </Main>
            <Footer />
        </div>
        
    );
}
export default Services;
