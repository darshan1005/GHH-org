import { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import PropTypes from "prop-types";

export const TruncatedText = ({ text, textAlign }) => {
  const theme = useTheme();
  const [showFullText, setShowFullText] = useState(false);

  const handleToggleText = () => {
    setShowFullText((prev) => !prev);
  };

  const isTextLong = text.length > 150;

  return (
    <Typography
      variant="bodyL"
      sx={{
        textAlign: textAlign,
        marginBottom: "1rem",
      }}
    >
      {isTextLong ? (
        <>
          {showFullText ? text : `${text.substring(0, 250)}...`}
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
};
