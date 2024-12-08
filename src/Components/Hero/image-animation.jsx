/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";

const ImageAnimation = ({ images, className }) => {
  const [randomImages, setRandomImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    setRandomImages(shuffleArray(images));

    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <Box className={className}>
      <img
        src={randomImages[currentIndex]}
        alt={`Image ${currentIndex}`}
        className="image-animation"
      />
    </Box>
  );
};

export default ImageAnimation;
