import React from "react";
import ContentTemplate from "templates/ContentTemplate/ContentTemplate";
import ReviewsList from "components/organisms/ReviewsList/ReviewsList";
import ContentContainer from "components/atoms/ContentContainer";
import { graphql, useStaticQuery } from "gatsby";
import SEO from "components/SEO";

const Reviews = () => {
  const { allDatoCmsReview } = useStaticQuery(
    graphql`
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
    `
  );

  return (
    <>
      <SEO title="Reviews | Wioletta Gruszecka Stylist" />

      <ContentTemplate title="Reviews">
        <ContentContainer>
          <ReviewsList reviews={allDatoCmsReview.edges} />
        </ContentContainer>
      </ContentTemplate>
    </>
  );
};

export default Reviews;
