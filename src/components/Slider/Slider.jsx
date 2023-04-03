import React, { useState } from 'react';
import './Slider.css';

const images = [
    "../images/indus-zanskar-river.jpg",
    "../images/leh-palace.jpg",
    "../images/monk-morning-puja.jpg",
];

const Slider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
    };

    const handleNextClick = () => {
        setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
    };

    return (
        <div className="slider">
            <img className="slider-image" src={images[currentImageIndex]} alt="Slider Image" />
            <button className="slider-prev-button" onClick={handlePrevClick}>
                Prev
            </button>
            <button className="slider-next-button" onClick={handleNextClick}>
                Next
            </button>
        </div>
    );
};

export default Slider;

