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
    
      <div className='button-container'>
        <div><img src={images[currentIndex]} className="project_carousel_image_adjust" alt={`Slide ${currentIndex}`} /></div>
        <div style={{display:"flex", flexDirection:"row"}} className='carousel-buttons'>
            <button onClick={prevSlide} className='leftbutton'>👈</button>
            <button onClick={nextSlide} className='rightbutton' >👉</button>
            
        </div>
      </div>
      
  );
};

export default ProjectCarousel;

