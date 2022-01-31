import React from "react";
import FrontCover from "components/organisms/FrontCover/FrontCover";
import Container from "components/atoms/Container";
import FrontAbout from "components/organisms/FrontAbout/FrontAbout";
import FrontServices from "components/organisms/FrontServices/FrontServices";
import FrontGallery from "components/organisms/FrontGallery/FrontGallery";
import FrontCardsAndHours from "components/organisms/FrontCardsAndHours/FrontCardsAndHours";
import FullContainer from "components/atoms/FullContainer";
import PageBackground from "components/atoms/PageBackground";
import { graphql } from "gatsby";
import SEO from "components/SEO";

const IndexPage = ({ data: { datoCmsHome, datoCmsContact } }) => (
  <>
    <SEO title="Wioletta Gruszecka Stylist" />
    <Container>
      <FrontCover text={datoCmsHome.mainText} />
    </Container>

    <FullContainer>
      <PageBackground />

      <Container>
        <FrontAbout
          aboutText1={datoCmsHome.aboutText1}
          aboutText2={datoCmsHome.aboutText2}
        />
        <FrontServices servicesText={datoCmsHome.servicesText} />
        <FrontGallery images={datoCmsHome.gallery} />
        <FrontCardsAndHours
          daysHour={{
            monday: datoCmsContact.monday,
            tuesday: datoCmsContact.tuesday,
            wednesday: datoCmsContact.wednesday,
            thursday: datoCmsContact.thursday,
            friday: datoCmsContact.friday,
            saturday: datoCmsContact.saturday,
            sunday: datoCmsContact.sunday,
          }}
        />
      </Container>
    </FullContainer>
  </>
);

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    datoCmsHome {
      mainText
      aboutText1
      aboutText2
      servicesText
      gallery {
        gatsbyImageData(width: 375)
      }
    }
    datoCmsContact {
      monday
      tuesday
      wednesday
      thursday
      friday
      saturday
      sunday
    }
  }
`;
