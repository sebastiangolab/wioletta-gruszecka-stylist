import React from "react";
import ContentTemplate from "templates/ContentTemplate/ContentTemplate";
import ContentContainer from "components/atoms/ContentContainer";
import GalleryModule from "components/molecules/GalleryModule/GalleryModule";
import { graphql } from "gatsby";

const About = ({ data: { datoCmsAbout: cms } }) => (
  <ContentTemplate title="About us">
    <ContentContainer>
      <p>{cms.text1}</p>
      <p>{cms.text2}</p>
    </ContentContainer>
    <GalleryModule images={cms.gallery} />
  </ContentTemplate>
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
