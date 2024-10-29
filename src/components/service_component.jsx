import React from "react";

function ServiceComponent(){
    return(
        <div className='row row-gap'>
              <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 service-component col-gap' >
                    <center><h5 className="subheading">Competitive Programmer</h5></center>
                    
                    <p className="service-info">"As a competitive programmer skilled in C++ and Java, I solve complex algorithmic challenges with a focus on efficiency and optimization. From data structures to dynamic programming and graph theory, I write clean, high-performance code to tackle a wide range of problems. Let's connect to tackle new challenges!"</p>
              </div>
              {/* <div className="col-1"></div> */}
              <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 service-component col-gap' >
                   <center><h5 className="subheading">Full Stack-Developer</h5></center>
                    <p className="service-info">"Explore my full-stack portfolio, where I create responsive, scalable web solutions using HTML, CSS, JavaScript, React, Node.js, and Python. From designing user-friendly interfaces to building robust backend systems, I deliver dynamic applications that enhance user engagement and support business growth. Let’s bring your vision to life!"</p>
              </div>
              {/* <div className="col-1"></div> */}
              <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 service-component col-gap' >
                    <center><h5 className="subheading">AIML Engineer</h5></center>
                    <p className="service-info">"Discover my portfolio as an ML Engineer, showcasing expertise in machine learning, deep learning, and data science. With proficiency in Python and TensorFlow,
                     , I develop innovative models for predictive analytics, natural language processing, and computer vision.
                      From data preprocessing to model deployment, I drive actionable insights and enhance decision-making processes."</p>
              </div>
        </div>
    );
}
export default ServiceComponent;