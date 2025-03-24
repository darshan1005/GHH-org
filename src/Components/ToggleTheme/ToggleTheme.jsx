import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <Box
      sx={{
        maxWidth: { xs: "2.7rem", md: "3rem" },
        height: { xs: "1.27rem", md: "1.57rem" },
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
          height: { xs: "1rem", md: "1.2rem" },
          width: { xs: "1rem", md: "1.2rem" },
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
