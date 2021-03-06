import React, { useEffect, useState } from "react";
import { axiosClient } from "api/axiosClient";
import { aboutQuery } from "api/queries";
import LayoutLoader from "components/molecules/LayoutLoader/LayoutLoader";
import SEO from "components/SEO";
import ContentTemplate from "templates/ContentTemplate/ContentTemplate";
import ContentContainer from "components/atoms/ContentContainer";
import GalleryModule from "components/molecules/GalleryModule/GalleryModule";
import AboutParagraph from "components/atoms/AboutParagraph";

const About = () => {
  const [dataQuery, setDataQuery] = useState();

  useEffect(() => {
    axiosClient
      .post("/", { query: aboutQuery })
      .then((responseData) => setDataQuery(responseData.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {dataQuery && (
        <>
          <SEO title="About me | Wioletta Gruszecka Stylist" />

          <ContentTemplate title="About me">
            <ContentContainer>
              <AboutParagraph>{dataQuery.about.text1}</AboutParagraph>
              <AboutParagraph>{dataQuery.about.text2}</AboutParagraph>
            </ContentContainer>
            <GalleryModule
              isTabletLastImageHide
              images={dataQuery.about.gallery}
            />
          </ContentTemplate>
        </>
      )}
      {!dataQuery && <LayoutLoader />}
    </>
  );
};

export default About;