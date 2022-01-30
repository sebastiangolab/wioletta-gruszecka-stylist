import React from "react";
import ContentTemplate from "templates/ContentTemplate/ContentTemplate";
import ReviewsList from "components/organisms/ReviewsList/ReviewsList";
import ContentContainer from "components/atoms/ContentContainer";
import { graphql } from "gatsby";
import SEO from "components/SEO";

const Reviews = ({ data: { allDatoCmsReview: reviews } }) => (
  <>
    <SEO title="Reviews | Wioletta Gruszecka Stylist" />

    <ContentTemplate title="Reviews">
      <ContentContainer>
        <ReviewsList reviews={reviews.edges} />
      </ContentContainer>
    </ContentTemplate>
  </>
);

export default Reviews;

export const query = graphql`
  query ReviewsQuery {
    allDatoCmsReview {
      edges {
        node {
          text
          author
        }
      }
    }
  }
`;
