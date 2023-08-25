import { createTheme } from "@mui/material/styles";

export const light = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#000",
    },
    text: {
      primary: "#000",
      secondary: "#A1A2A6",
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
  },
  typography: {
    fontFamily: "Inter",
    allVariants: {
      color: "#000",
    },
    h1: {
      fontWeight: 900,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
    subtitle1: {
      fontWeight: 500,
    },
    subtitle2: {
      fontWeight: 400,
    },
    body1: {
      fontWeight: 500,
    },
    body2: {
      fontWeight: 400,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h2",
          h3: "h2",
          h4: "h2",
          h5: "h2",
          h6: "h2",
          subtitle1: "span",
          subtitle2: "span",
          body1: "span",
          body2: "span",
        },
      },
    },
  },
});

export const dark = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#fff",
    },
    text: {
      primary: "#fff",
      secondary: "#A1A2A6",
    },
    background: {
      default: "#0E0E0F",
      paper: "#242424",
    },
  },
  typography: {
    fontFamily: "Inter",
    allVariants: {
      color: "#fff",
    },
    h1: {
      fontWeight: 900,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
    subtitle1: {
      fontWeight: 500,
    },
    subtitle2: {
      fontWeight: 400,
    },
    body1: {
      fontWeight: 500,
    },
    body2: {
      fontWeight: 400,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h2",
          h3: "h2",
          h4: "h2",
          h5: "h2",
          h6: "h2",
          subtitle1: "span",
          subtitle2: "span",
          body1: "span",
          body2: "span",
        },
      },
    },
  },
});
