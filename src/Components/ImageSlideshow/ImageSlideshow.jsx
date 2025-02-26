import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Slideshow.css";

const ImageSlideshow = () => {
  const images = [
    "/images/slider1.jpg",
    "/images/slider2.png",
    "/images/slider3.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow-container">
      <button className="nav-button left" onClick={prevSlide}>
        <FaChevronLeft />
      </button>

      <img
        className="img-fluid"
        src={images[currentIndex]}
        alt="Slideshow"
        // className="slideshow-image"
      />

      <button className="nav-button right" onClick={nextSlide}>
        <FaChevronRight />
      </button>

      <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;
