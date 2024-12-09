import createTheme from "@mui/material/styles/createTheme";

export const ThemeLight = createTheme({
  palette: {
    primary: {
      main: "#D99755", // Light Mode - Medium orange
      contrastText: "#663A1D", // Light Mode - Dark brown
    },
    secondary: {
      main: "#FFBC70", // Light Mode - Peach
    },
    background: {
      default: "#fff",
      main: "#FFFAF0", // Light Mode - Light cream
      paper: "#FFE7C2", // Light Mode - Light beige
    },
    text: {
      primary: "#8C5429", // Light Mode - Brown
      secondary: "#B3743D", // Light Mode - Medium brown
      disabled: "#D99755", // Light Mode - Orange
    },
    action: {
      active: "#B3743D", // Medium brown
      hover: "#FFBC70", // Peach
    },
    divider: "#FFD399", // Light orange
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#663A1D", // Dark brown
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: "500",
      color: "#8C5429", // Brown
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: "400",
      color: "#B3743D", // Medium brown
    },
    body1: {
      fontSize: "1rem",
      color: "#8C5429", // Brown
    },
    button: {
      textTransform: "uppercase",
      fontSize: "0.875rem",
      fontWeight: "bold",
      color: "#663A1D", // Dark brown
    },
  },
});

export const ThemeDark = createTheme({
  palette: {
    primary: {
      main: "#DCA362", // Dark Mode - Light orange
      contrastText: "#2C221A", // Dark Mode - Dark brown
    },
    secondary: {
      main: "#7E603D", // Dark Mode - Brown
    },
    background: {
      default: "#000",
      main: "#2C221A", // Dark Mode - Dark brown
      paper: "#453524", // Dark Mode - Dark grayish brown
    },
    text: {
      primary: "#F8F1E5", // Dark Mode - Very light cream
      secondary: "#E8C08C", // Dark Mode - Light orange
      disabled: "#7E603D", // Dark Mode - Brown
    },
    action: {
      active: "#AD8150", // Medium brown
      hover: "#DCA362", // Light orange
    },
    divider: "#5B4630", // Dark brown
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#F3DCB9", // Cream
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: "500",
      color: "#E8C08C", // Light orange
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: "400",
      color: "#AD8150", // Medium brown
    },
    body1: {
      fontSize: "1rem",
      color: "#F8F1E5", // Very light cream
    },
    button: {
      textTransform: "uppercase",
      fontSize: "0.875rem",
      fontWeight: "bold",
      color: "#DCA362", // Light orange
    },
  },
});
