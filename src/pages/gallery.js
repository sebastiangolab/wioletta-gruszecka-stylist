import React from "react";
import ContentTemplate from "templates/ContentTemplate/ContentTemplate";
import GalleryModule from "components/molecules/GalleryModule/GalleryModule";
import { graphql, useStaticQuery } from "gatsby";
import SEO from "components/SEO";

const Gallery = () => {
  const { datoCmsGalleryPage } = useStaticQuery(
    graphql`
      query GalleryQuery {
        datoCmsGalleryPage {
          gallery {
            gatsbyImageData(
              width: 375
            )
          }
        }
      }
    `
  );

  return (
    <>
      <SEO title="Gallery | Wioletta Gruszecka Stylist" />

      <ContentTemplate title="Gallery">
        <GalleryModule isGalleryPage images={datoCmsGalleryPage.gallery} />
      </ContentTemplate>
    </>
  );
};

export default Gallery;
