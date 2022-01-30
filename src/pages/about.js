import React from "react";
import ContentTemplate from "templates/ContentTemplate/ContentTemplate";
import ContentContainer from "components/atoms/ContentContainer";
import GalleryModule from "components/molecules/GalleryModule/GalleryModule";
import AboutParagraph from "components/atoms/AboutParagraph";
import { graphql } from "gatsby";
import SEO from "components/SEO";

const About = ({ data: { datoCmsAbout: cms } }) => (
  <>
    <SEO title="About us | Wioletta Gruszecka Stylist" />

    <ContentTemplate title="About us">
      <ContentContainer>
        <AboutParagraph>{cms.text1}</AboutParagraph>
        <AboutParagraph>{cms.text2}</AboutParagraph>
      </ContentContainer>
      <GalleryModule isTabletLastImageHide images={cms.gallery} />
    </ContentTemplate>
  </>
);

export default About;

export const query = graphql`
  query AboutQuery {
    datoCmsAbout {
      gallery {
        url
      }
      text1
      text2
    }
  }
`;
