import React from "react";
import ContentTemplate from "templates/ContentTemplate/ContentTemplate";
import ContentContainer from "components/atoms/ContentContainer";
import ServicesList from "../components/organisms/ServicesList/ServicesList";
import { graphql } from "gatsby";

const Services = ({ data: { allDatoCmsService: services } }) => (
  <ContentTemplate title="Services">
    <ContentContainer>
      <p>
        My work experience, knowledge, proficiency as well as excellent
        communication skills will guarantee you all the things you need.
      </p>
      <ServicesList services={services.edges} />
    </ContentContainer>
  </ContentTemplate>
);

export default Services;

export const query = graphql`
  query ServicesQuery {
    allDatoCmsService(filter: { price: { eq: "" }}) {
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
`;
