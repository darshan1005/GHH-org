import { useState } from "react";
import { Typography, useTheme } from "@mui/material";
import PropTypes from "prop-types";

export const TruncatedText = ({ text, textAlign }) => {
  const theme = useTheme();
  const [showFullText, setShowFullText] = useState(false);

  const handleToggleText = () => {
    setShowFullText((prev) => !prev);
  };

  return (
    <Typography
      variant="h6"
      sx={{
        textAlign: { textAlign },
        marginBottom: "1rem",
      }}
    >
      {showFullText ? text : `${text.substring(0, 250)}...`}
      <span
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
      </span>
    </Typography>
  );
};

// PropTypes
TruncatedText.propTypes = {
  text: PropTypes.string.isRequired,
  textAlign: PropTypes.string.isRequired,
};
