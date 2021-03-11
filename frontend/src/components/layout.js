import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: ["Montserrat", "sans-serif"],
      fontSize: "2rem",
      lineHeight: 1.0625,
      color: "#0A2133",
    },
    h2: {
      fontFamily: ["Montserrat", "sans-serif"],
      fontSize: "1.5rem",
      lineHeight: 1.083,
      color: "#0A2133",
    },
    body1: {
      fontFamily: ["serif"],
      lineHeight: 1.5,
      color: "#0A2133",
    },
    body2: {
      fontFamily: ["Montserrat", "sans-serif"],
      color: "#0A2133",
    },
  },
});

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
