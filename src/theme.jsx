import { createTheme } from "@mui/material/styles";

export const themeLight = createTheme({
  palette: {
    primary: {
      main: "#70778C", // Button background
      contrastText: "#EDEDED", // Button text
    },
    secondary: {
      main: "#A8ACB8", // Highlights or accents
    },
    background: {
      default: "#EDEDED", // Main background
      paper: "#D9D9D9", // Card/Surface background
    },
    text: {
      primary: "#70778C", // Header and primary text
      secondary: "#9A9DA9", // Subheading and paragraph text
      disabled: "#D1D3DB", // Muted text
    },
    action: {
      active: "#70778C", // Active icon or button
      hover: "#8F94A3", // Hover state
    },
    divider: "#D1D3DB", // Divider and border color
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#70778C",
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: "500",
      color: "#70778C",
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: "400",
      color: "#9A9DA9",
    },
    body1: {
      fontSize: "1rem",
      color: "#70778C",
    },
    button: {
      textTransform: "uppercase",
      fontSize: "0.875rem",
      fontWeight: "bold",
      color: "#EDEDED",
    },
  },
});

export const themeDark = createTheme({
  palette: {
    primary: {
      main: "#EDEDED", // Button background
      contrastText: "#70778C", // Button text
    },
    secondary: {
      main: "#D9D9D9", // Highlights or accents
    },
    background: {
      default: "#70778C", // Main background
      paper: "#8F94A3", // Card/Surface background
    },
    text: {
      primary: "#EDEDED", // Header and primary text
      secondary: "#D1D3DB", // Subheading and paragraph text
      disabled: "#9A9DA9", // Muted text
    },
    action: {
      active: "#EDEDED", // Active icon or button
      hover: "#D9D9D9", // Hover state
    },
    divider: "#9A9DA9", // Divider and border color
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#EDEDED",
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: "500",
      color: "#EDEDED",
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: "400",
      color: "#D1D3DB",
    },
    body1: {
      fontSize: "1rem",
      color: "#EDEDED",
    },
    button: {
      textTransform: "uppercase",
      fontSize: "0.875rem",
      fontWeight: "bold",
      color: "#70778C",
    },
  },
});
