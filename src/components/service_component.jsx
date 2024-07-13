import React from "react";

function ServiceComponent(){
    return(
        <div className='row row-gap'>
              <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 service-component col-gap' >
                    <center><h5 className="subheading">FrontEnd-Developer</h5></center>
                    
                    <p className="service-info">"As a frontend developer, I specialize in crafting intuitive user experiences through responsive web design and interactive features.
                     With expertise in HTML, CSS, JavaScript, and modern frameworks like React, I create visually stunning and highly functional websites
                      that captivate users and drive engagement. Let's collaborate!"</p>
              </div>
              {/* <div className="col-1"></div> */}
              <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 service-component col-gap' >
                   <center><h5 className="subheading">BackEnd-Developer</h5></center>
                    <p className="service-info">"Explore my portfolio showcasing expertise in backend development. With proficiency in languages like Python, Java,
                         and frameworks like Node.js and Flask, I architect scalable solutions, streamline data processing, and ensure robust server-side functionality.
                         From database management to API development, I deliver efficient and reliable backend systems for seamless user experiences."</p>
              </div>
              {/* <div className="col-1"></div> */}
              <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 service-component col-gap' >
                    <center><h5 className="subheading">Machine Learning Engineer</h5></center>
                    <p className="service-info">"Discover my portfolio as an ML Engineer, showcasing expertise in machine learning, deep learning, and data science. With proficiency in Python and TensorFlow,
                     , I develop innovative models for predictive analytics, natural language processing, and computer vision.
                      From data preprocessing to model deployment, I drive actionable insights and enhance decision-making processes."</p>
              </div>
        </div>
    );
}
export default ServiceComponent;