import { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import PropTypes from "prop-types";

export const TruncatedText = ({ text, textAlign, truncatedValue }) => {
  const theme = useTheme();
  const [showFullText, setShowFullText] = useState(false);

  const handleToggleText = () => {
    setShowFullText((prev) => !prev);
  };

  const isTextLong = text.length > truncatedValue;

  return (
    <Typography
      variant="bodyL"
      sx={{
        textAlign: {
          xs: textAlign === "left" ? "left" : "center",
          md: textAlign !== "left" ? "left" : "",
        },
        fontSize: {
          xs: "0.9rem",
          md: "1rem",
        },
      }}
    >
      {isTextLong ? (
        <>
          {showFullText ? text : `${text.substring(0, truncatedValue)}...`}
          <Box
            component="span"
            onClick={handleToggleText}
            style={{
              color: theme.palette.primary.main,
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1rem",
              marginLeft: "0.5rem",
            }}
          >
            {showFullText ? "Read less" : "Read more"}
          </Box>
        </>
      ) : (
        text
      )}
    </Typography>
  );
};

// PropTypes
TruncatedText.propTypes = {
  text: PropTypes.string.isRequired,
  textAlign: PropTypes.string,
  truncatedValue: PropTypes.number,
};
