import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#008F8C",
    },
    secondary: {
      main: "#03A64A",
    },
    text: {
      primary: "#000",
      secondary: "#A1A2A6",
    },
    background: {
      default: "#fff",
      paper: "#ccc",
    },
  },
  typography: {
    allVariants: {
      color: "#000",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#008F8C",
    },
    secondary: {
      main: "#03A64A",
    },
    text: {
      primary: "#fff",
      secondary: "#A1A2A6",
    },
    background: {
      default: "#0E0E0F",
      paper: "#bfbfbf",
    },
  },
  typography: {
    allVariants: {
      color: "#fff",
    },
  },
});
