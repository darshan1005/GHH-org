import { Box, useTheme } from "@mui/material";
import PropTypes from "prop-types";

const ThemeToggle = ({ onToggleSwitch, darkMode }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        maxWidth: "3rem",
        borderRadius: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: darkMode ? "end" : "start",
        padding: "2px",
        boxShadow: `0px 0px 2px ${theme.palette.grey[900]}`,
        backgroundColor: !darkMode ? "black" : theme.palette.common.white,
      }}
      onClick={onToggleSwitch}
    >
      <Box
        sx={{
          borderRadius: "50%",
          background: darkMode ? "black" : theme.palette.common.white,
          height: "1.2rem",
          width: "1.2rem",
        }}
      ></Box>
    </Box>
  );
};

// Corrected PropTypes validation
ThemeToggle.propTypes = {
  onToggleSwitch: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default ThemeToggle;
