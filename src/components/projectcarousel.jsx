// Carousel.js
import React, { useState } from 'react';
import "../css/projectcarousel.css";


const ProjectCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    
      <div className='button-container' style={{ height:"350px"}}>
        <div style={{ height:"300px"}}><img src={images[currentIndex]} className="project_carousel_image_adjust" alt={`Slide ${currentIndex}`} /></div>
        <div style={{display:"flex", flexDirection:"row",  height:"50px"}}>
            <button onClick={prevSlide} className='leftbutton' style={{ marginRight:'300px'}}>👈</button>
            <button onClick={nextSlide} className='rightbutton' >👉</button>
            
        </div>
      </div>
      
  );
};

export default ProjectCarousel;

