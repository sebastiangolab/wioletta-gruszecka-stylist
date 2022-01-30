import React from "react";
import ContentTemplate from "templates/ContentTemplate/ContentTemplate";
import ContentContainer from "components/atoms/ContentContainer";
import AboutParagraph from "components/atoms/AboutParagraph";

const NotFoundPage = () => (
  <ContentTemplate title="Page not exist">
    <ContentContainer>
      <AboutParagraph>The content you are looking for does not exist. Please make sure that the address entered is correct.</AboutParagraph>
    </ContentContainer>
  </ContentTemplate>
);

export default NotFoundPage;
