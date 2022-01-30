import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/GlobalStyles";
import { theme } from "styles/theme";
import MainTemplate from "templates/MainTemplate";
import "react-image-lightbox/style.css";

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainTemplate>{element}</MainTemplate>
    </ThemeProvider>
  );
};
