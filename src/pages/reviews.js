import React from "react";
import ContentTemplate from "templates/ContentTemplate/ContentTemplate";
import ReviewsList from "components/organisms/ReviewsList/ReviewsList";
import ContentContainer from "components/atoms/ContentContainer";
import { graphql } from "gatsby";

const Reviews = ({ data: { allDatoCmsReview: reviews } }) => (
  <ContentTemplate title="Reviews">
    <ContentContainer>
      <ReviewsList reviews={reviews.edges} />
    </ContentContainer>
  </ContentTemplate>
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
