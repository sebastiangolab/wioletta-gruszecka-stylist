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
import { graphql, useStaticQuery } from "gatsby";
import SEO from "components/SEO";

const Contact = () => {
  const { datoCmsContact } = useStaticQuery(
    graphql`
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
    `
  );

  return (
    <>
      <SEO title="Contact | Wioletta Gruszecka Stylist" />

      <ContentTemplate title="Contact">
        <ContentContainer>
          <ContactParagraph>
            <ContactIcon icon={faPhoneAlt} />
            {datoCmsContact.phone}
          </ContactParagraph>

          <ContactParagraph>
            <ContactIcon icon={faEnvelope} />
            {datoCmsContact.email}
          </ContactParagraph>

          <ContactParagraph>
            <ContactIcon icon={faMapMarkerAlt} />
            {datoCmsContact.adres1} <br />
            {datoCmsContact.adres2}
          </ContactParagraph>

          <OpeningHours
            monday={datoCmsContact.monday}
            tuesday={datoCmsContact.tuesday}
            wednesday={datoCmsContact.wednesday}
            thursday={datoCmsContact.thursday}
            friday={datoCmsContact.friday}
            saturday={datoCmsContact.saturday}
            sunday={datoCmsContact.sunday}
            isContactPage
          />
        </ContentContainer>

        <Map />
      </ContentTemplate>
    </>
  );
};

export default Contact;
