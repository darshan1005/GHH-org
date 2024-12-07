import { createContext, useState, useMemo } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { ThemeLight, ThemeDark } from "./theme";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

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
