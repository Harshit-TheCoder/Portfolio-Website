// Carousel.js
import React, { useState } from 'react';
import "../css/carouselLayout.css";


const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    
      <div className='button-container-carousel'>
      <img src={images[currentIndex]} className="carousel_image_adjust" alt={`Slide ${currentIndex}`} />
      <br />
      <br />
      {images.length > 1 && (
        <>
          <button onClick={prevSlide} className='button-left'>👈</button>
          <button onClick={nextSlide} className='button-right'>👉</button>
        </>
      )}
      
      </div>
      
  );
};

export default Carousel;

