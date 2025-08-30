import { useState, useEffect, useMemo } from "react";
import { Box, Fade } from "@mui/material";
import PropTypes from "prop-types";

export const ImageAnimation = ({ images = [], interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Memoize the validated images array
  const validImages = useMemo(
    () => (Array.isArray(images) ? images : []),
    [images]
  );

  useEffect(() => {
    if (validImages.length === 0) return;

    const imageInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % validImages.length);
    }, interval);

    return () => clearInterval(imageInterval);
  }, [validImages, interval]);

  if (validImages.length === 0) {
    return null;
  }

  return (
    <Box
      sx={{
        position: "relative",
        height: "300px",
        overflow: "hidden",
      }}
    >
      {validImages.map((image, index) => (
        <Fade in={index === currentIndex} timeout={1000} key={index}>
          <Box
            component="img"
            src={image.src}
            alt={image.alt}
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

ImageAnimation.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ),
  interval: PropTypes.number,
};

ImageAnimation.defaultProps = {
  images: [],
  interval: 5000,
};
