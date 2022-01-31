import React from "react";
import ContentTemplate from "templates/ContentTemplate/ContentTemplate";
import ContentContainer from "components/atoms/ContentContainer";
import GalleryModule from "components/molecules/GalleryModule/GalleryModule";
import AboutParagraph from "components/atoms/AboutParagraph";
import { graphql } from "gatsby";
import SEO from "components/SEO";

const About = ({ data: { datoCmsAbout } }) => (
  <>
    <SEO title="About us | Wioletta Gruszecka Stylist" />

    <ContentTemplate title="About us">
      <ContentContainer>
        <AboutParagraph>{datoCmsAbout.text1}</AboutParagraph>
        <AboutParagraph>{datoCmsAbout.text2}</AboutParagraph>
      </ContentContainer>
      <GalleryModule isTabletLastImageHide images={datoCmsAbout.gallery} />
    </ContentTemplate>
  </>
);

export default About;

export const query = graphql`
  query AboutQuery {
    datoCmsAbout {
      gallery {
        gatsbyImageData(width: 375)
      }
      text1
      text2
    }
  }
`;
