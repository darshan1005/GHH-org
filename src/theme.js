import { createTheme } from "@mui/material/styles";

export const ThemeLight = createTheme({
  palette: {
    primary: {
      main: "#7d5a50", // Buttons or accents (secondary-color)
      contrastText: "#fcdec0", // Text on primary backgrounds
    },
    secondary: {
      main: "#e5b299", // Secondary highlights
    },
    background: {
      default: "#fffff",
      main: "#fcdec0", // Main background (primary-background)
      paper: "#e5b299", // Card/Surface background (secondary-background)
    },
    text: {
      primary: "#5e606b", // Main text color (secondary-text-color)
      secondary: "#7d5a50", // Secondary text
      disabled: "#a38d83", // Muted text
    },
    action: {
      active: "#7d5a50", // Active buttons/icons
      hover: "#e5b299", // Hover state
    },
    divider: "#e5b299", // Divider color
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#5e606b",
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: "500",
      color: "#5e606b",
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: "400",
      color: "#7d5a50",
    },
    body1: {
      fontSize: "1rem",
      color: "#5e606b",
    },
    button: {
      textTransform: "uppercase",
      fontSize: "0.875rem",
      fontWeight: "bold",
      color: "#fcdec0",
    },
  },
});

export const ThemeDark = createTheme({
  palette: {
    primary: {
      main: "#e5b299", // Buttons or accents
      contrastText: "#7d5a50", // Text on primary backgrounds
    },
    secondary: {
      main: "#7d5a50", // Secondary highlights
    },
    background: {
      default: "#000",
      main: "#7d5a50", // Main background (darker tone)
      paper: "#5e606b", // Card/Surface background
    },
    text: {
      primary: "#fcdec0", // Main text color
      secondary: "#e5b299", // Secondary text
      disabled: "#a38d83", // Muted text
    },
    action: {
      active: "#e5b299", // Active buttons/icons
      hover: "#7d5a50", // Hover state
    },
    divider: "#a38d83", // Divider color
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#fcdec0",
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: "500",
      color: "#fcdec0",
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: "400",
      color: "#e5b299",
    },
    body1: {
      fontSize: "1rem",
      color: "#fcdec0",
    },
    button: {
      textTransform: "uppercase",
      fontSize: "0.875rem",
      fontWeight: "bold",
      color: "#7d5a50",
    },
  },
});
