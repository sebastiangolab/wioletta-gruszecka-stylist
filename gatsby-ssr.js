import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/GlobalStyles";
import { theme } from "styles/theme";
import MainTemplate from "templates/MainTemplate";
import "react-image-lightbox/style.css";

export const wrapPageElement = ({ element, props }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainTemplate {...props}>{element}</MainTemplate>
    </ThemeProvider>
  );
};
