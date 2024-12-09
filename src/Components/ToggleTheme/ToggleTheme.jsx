import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <Box
      sx={{
        maxWidth: "3rem",
        height: "1.57rem",
        borderRadius: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: darkMode ? "end" : "start",
        padding: "2px",
        boxShadow: `0px 0px 2px ${darkMode ? "#000" : "#ccc"}`,
        backgroundColor: darkMode ? "#fff" : "#000",
        cursor: "pointer",
      }}
      onClick={toggleTheme}
    >
      <Box
        sx={{
          borderRadius: "50%",
          background: darkMode ? "#000" : "#fff",
          height: "1.2rem",
          width: "1.2rem",
        }}
      ></Box>
    </Box>
  );
};

// PropTypes
ThemeToggle.propTypes = {
  onToggleSwitch: PropTypes.func,
  darkMode: PropTypes.bool,
};

export default ThemeToggle;
