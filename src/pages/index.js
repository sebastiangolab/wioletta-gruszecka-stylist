import React, { useEffect, useState } from "react";
import { axiosClient } from "api/axiosClient";
import { indexQuery } from "api/queries";
import LayoutLoader from "components/molecules/LayoutLoader/LayoutLoader";
import SEO from "components/SEO";
import FrontCover from "components/organisms/FrontCover/FrontCover";
import Container from "components/atoms/Container";
import FrontAbout from "components/organisms/FrontAbout/FrontAbout";
import FrontServices from "components/organisms/FrontServices/FrontServices";
import FrontGallery from "components/organisms/FrontGallery/FrontGallery";
import FrontCardsAndHours from "components/organisms/FrontCardsAndHours/FrontCardsAndHours";
import FullContainer from "components/atoms/FullContainer";
import PageBackground from "components/atoms/PageBackground";

const IndexPage = () => {
  const [dataQuery, setDataQuery] = useState();

  useEffect(() => {
    axiosClient
      .post("/", { query: indexQuery })
      .then((responseData) => setDataQuery(responseData.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {dataQuery && (
        <>
          <SEO title="Wioletta Gruszecka Stylist" />

          <Container>
            <FrontCover text={dataQuery.home.mainText} />
          </Container>

          <FullContainer>
            <PageBackground />

            <Container>
              <FrontAbout
                aboutText1={dataQuery.home.aboutText1}
                aboutText2={dataQuery.home.aboutText2}
              />
              <FrontServices servicesText={dataQuery.home.servicesText} />
              <FrontGallery images={dataQuery.home.gallery} />
              <FrontCardsAndHours
                daysHour={{
                  monday: dataQuery.contact.monday,
                  tuesday: dataQuery.contact.tuesday,
                  wednesday: dataQuery.contact.wednesday,
                  thursday: dataQuery.contact.thursday,
                  friday: dataQuery.contact.friday,
                  saturday: dataQuery.contact.saturday,
                  sunday: dataQuery.contact.sunday,
                }}
              />
            </Container>
          </FullContainer>
        </>
      )}
      {!dataQuery && <LayoutLoader />}
    </>
  );
};

export default IndexPage;
