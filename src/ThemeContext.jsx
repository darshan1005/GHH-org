import { createContext, useState, useMemo, useEffect } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { ThemeLight, ThemeDark } from "./theme";
import PropTypes from "prop-types";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("darkMode");
    return storedTheme ? JSON.parse(storedTheme) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const theme = useMemo(() => (darkMode ? ThemeDark : ThemeLight), [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

// PropTypes
ThemeContextProvider.propTypes = {
  children: PropTypes.any,
};
