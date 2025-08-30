import { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import PropTypes from "prop-types";

export const TruncatedText = ({
  text = "",
  textAlign,
  truncatedValue = 100,
}) => {
  const theme = useTheme();
  const [showFullText, setShowFullText] = useState(false);

  const handleToggleText = () => {
    setShowFullText((prev) => !prev);
  };

  // Handle undefined/null text and ensure we have a valid string
  const safeText = text || "";
  const isTextLong = safeText.length > truncatedValue;

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
          {showFullText
            ? safeText
            : `${safeText.substring(0, truncatedValue)}...`}
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
        safeText
      )}
    </Typography>
  );
};

// PropTypes
TruncatedText.propTypes = {
  text: PropTypes.string,
  textAlign: PropTypes.string,
  truncatedValue: PropTypes.number,
};

// Default Props
TruncatedText.defaultProps = {
  text: "",
  textAlign: "left",
  truncatedValue: 100,
};
