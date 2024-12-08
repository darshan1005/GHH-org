import { useState, useEffect } from "react";
import { Box, Fade } from "@mui/material";

const ImageAnimation = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(imageInterval);
  }, [images, interval]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {images.map((image, index) => (
        <Fade in={index === currentIndex} timeout={1000} key={index}>
          <Box
            component="img"
            src={image.src} // Use the 'src' from the image object
            alt={image.alt} // Use the 'alt' from the image object
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </Fade>
      ))}
    </Box>
  );
};

export default ImageAnimation;
