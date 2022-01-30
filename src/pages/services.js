import React from "react";
import ContentTemplate from "templates/ContentTemplate/ContentTemplate";
import ContentContainer from "components/atoms/ContentContainer";
import ServicesList from "../components/organisms/ServicesList/ServicesList";
import { graphql, useStaticQuery } from "gatsby";
import SEO from "components/SEO";

const Services = () => {
  const { allDatoCmsService } = useStaticQuery(
    graphql`
      query ServicesQuery {
        allDatoCmsService(filter: { price: { eq: "" } }) {
          edges {
            node {
              title
              order
              treeChildren {
                title
                description
                price
              }
            }
          }
        }
      }
    `
  );

  return (
    <>
      <SEO title="Services | Wioletta Gruszecka Stylist" />

      <ContentTemplate title="Services">
        <ContentContainer>
          <p>
            My work experience, knowledge, proficiency as well as excellent
            communication skills will guarantee you all the things you need.
          </p>
          <ServicesList services={allDatoCmsService.edges} />
        </ContentContainer>
      </ContentTemplate>
    </>
  );
};

export default Services;
