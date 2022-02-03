import React, { useEffect, useState } from "react";
import { axiosClient } from "api/axiosClient";
import { contactQuery } from "api/queries";
import LayoutLoader from "components/molecules/LayoutLoader/LayoutLoader";
import SEO from "components/SEO";
import ContentTemplate from "templates/ContentTemplate/ContentTemplate";
import ContentContainer from "components/atoms/ContentContainer";
import ContactParagraph from "components/atoms/ContactParagraph";
import ContactIcon from "components/atoms/ContactIcon";
import OpeningHours from "components/molecules/OpeningHours/OpeningHours";
import Map from "components/molecules/Map/Map";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [dataQuery, setDataQuery] = useState();

  useEffect(() => {
    axiosClient
      .post("/", { query: contactQuery })
      .then((responseData) => setDataQuery(responseData.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {dataQuery && (
        <>
          <SEO title="Contact | Wioletta Gruszecka Stylist" />

          <ContentTemplate title="Contact">
            <ContentContainer>
              <ContactParagraph>
                <ContactIcon><FaPhoneAlt /></ContactIcon>
                {dataQuery.contact.phone}
              </ContactParagraph>

              <ContactParagraph>
              <ContactIcon><FaEnvelope /></ContactIcon>
                {dataQuery.contact.email}
              </ContactParagraph>

              <ContactParagraph>
              <ContactIcon><FaMapMarkerAlt /></ContactIcon>
                {dataQuery.contact.adres1} <br />
                {dataQuery.contact.adres2}
              </ContactParagraph>

              <OpeningHours
                monday={dataQuery.contact.monday}
                tuesday={dataQuery.contact.tuesday}
                wednesday={dataQuery.contact.wednesday}
                thursday={dataQuery.contact.thursday}
                friday={dataQuery.contact.friday}
                saturday={dataQuery.contact.saturday}
                sunday={dataQuery.contact.sunday}
                isContactPage
              />
            </ContentContainer>

            <Map />
          </ContentTemplate>
        </>
      )}
      {!dataQuery && <LayoutLoader />}
    </>
  );
};

export default Contact;