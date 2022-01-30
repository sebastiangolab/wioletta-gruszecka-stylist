import React from "react";
import ContentTemplate from "templates/ContentTemplate/ContentTemplate";
import ContentContainer from "components/atoms/ContentContainer";
import ContactParagraph from "components/atoms/ContactParagraph";
import ContactIcon from "components/atoms/ContactIcon";
import OpeningHours from "components/molecules/OpeningHours/OpeningHours";
import Map from "components/molecules/Map/Map";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { graphql } from "gatsby";

const Contact = ({ data: { datoCmsContact: cms } }) => (
  <ContentTemplate title="Contact">
    <ContentContainer>
      <ContactParagraph>
        <ContactIcon icon={faPhoneAlt} />
        {cms.phone}
      </ContactParagraph>

      <ContactParagraph>
        <ContactIcon icon={faEnvelope} />
        {cms.email}
      </ContactParagraph>

      <ContactParagraph>
        <ContactIcon icon={faMapMarkerAlt} />
        {cms.adres1}{" "}
        <br />
        {cms.adres2}
      </ContactParagraph>

      <OpeningHours
        monday={cms.monday}
        tuesday={cms.tuesday}
        wednesday={cms.wednesday}
        thursday={cms.thursday}
        friday={cms.friday}
        saturday={cms.saturday}
        sunday={cms.sunday}
        isContactPage
      />
    </ContentContainer>

    <Map />
  </ContentTemplate>
);

export default Contact;

export const query = graphql`
  query ContactQuery {
    datoCmsContact {
      phone
      email
      adres1
      adres2
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
