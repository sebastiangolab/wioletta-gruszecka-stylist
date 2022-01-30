import React from "react";
import ContentTemplate from "templates/ContentTemplate/ContentTemplate";
import GalleryModule from "components/molecules/GalleryModule/GalleryModule";
import { graphql } from "gatsby";
import SEO from "components/SEO";

const Gallery = ({ data: { datoCmsGalleryPage: cms } }) => (
  <>
    <SEO title="Gallery | Wioletta Gruszecka Stylist" />

    <ContentTemplate title="Gallery">
      <GalleryModule isGalleryPage images={cms.gallery} />
    </ContentTemplate>
  </>
);

export default Gallery;

export const query = graphql`
  query GalleryQuery {
    datoCmsGalleryPage {
      gallery {
        url
      }
    }
  }
`;
