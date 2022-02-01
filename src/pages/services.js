import React, { useEffect, useState } from "react";
import { axiosClient } from "api/axiosClient";
import { servicesQuery } from "api/queries";
import SEO from "components/SEO";
import ContentTemplate from "templates/ContentTemplate/ContentTemplate";
import ContentContainer from "components/atoms/ContentContainer";
import ServicesList from "../components/organisms/ServicesList/ServicesList";

const Services = () => {
  const [dataQuery, setDataQuery] = useState();

  useEffect(() => {
    axiosClient
      .post("/", { query: servicesQuery })
      .then((responseData) => setDataQuery(responseData.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {dataQuery && (
        <>
          <SEO title="Services | Wioletta Gruszecka Stylist" />

          <ContentTemplate title="Services">
            <ContentContainer>
              <p>
                My work experience, knowledge, proficiency as well as excellent
                communication skills will guarantee you all the things you need.
              </p>
              <ServicesList services={dataQuery.allServices} />
            </ContentContainer>
          </ContentTemplate>
        </>
      )}
    </>
  );
};

export default Services;
