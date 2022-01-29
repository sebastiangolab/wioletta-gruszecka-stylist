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

const IndexPage = ({
  data: { datoCmsHome: cms, datoCmsContact: daysHour },
}) => (
  <>
    <Container>
      <FrontCover text={cms.mainText} />
    </Container>

    <FullContainer>
      <PageBackground />

      <Container>
        <FrontAbout aboutText1={cms.aboutText1} aboutText2={cms.aboutText2} />
        <FrontServices servicesText={cms.servicesText} />
        <FrontGallery images={cms.gallery} />
        <FrontCardsAndHours
          daysHour={{
            monday: daysHour.monday,
            tuesday: daysHour.tuesday,
            wednesday: daysHour.wednesday,
            thursday: daysHour.thursday,
            friday: daysHour.friday,
            saturday: daysHour.saturday,
            sunday: daysHour.sunday,
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
        url
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
