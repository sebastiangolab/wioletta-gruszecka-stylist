import React, { useEffect, useState } from "react";
import { axiosClient } from "api/axiosClient";
import { galleryQuery } from "api/queries";
import LayoutLoader from "components/molecules/LayoutLoader/LayoutLoader";
import SEO from "components/SEO";
import ContentTemplate from "templates/ContentTemplate/ContentTemplate";
import GalleryModule from "components/molecules/GalleryModule/GalleryModule";

const Gallery = () => {
  const [dataQuery, setDataQuery] = useState();

  useEffect(() => {
    axiosClient
      .post("/", { query: galleryQuery })
      .then((responseData) => setDataQuery(responseData.data.data))
      .catch((err) => console.log(err));
  }, []);  

  return (
    <>
      {dataQuery && (
        <>
          <SEO title="Gallery | Wioletta Gruszecka Stylist" />

          <ContentTemplate title="Gallery">
            <GalleryModule isGalleryPage images={dataQuery.galleryPage.gallery} />
          </ContentTemplate>
        </>
      )}
      {!dataQuery && <LayoutLoader />}
    </>
  );
};

export default Gallery;