import React, { useEffect, useState } from "react";
import { axiosClient } from "api/axiosClient";
import { reviewsQuery } from "api/queries";
import SEO from "components/SEO";
import ContentTemplate from "templates/ContentTemplate/ContentTemplate";
import ReviewsList from "components/organisms/ReviewsList/ReviewsList";
import ContentContainer from "components/atoms/ContentContainer";

const Reviews = () => {
  const [dataQuery, setDataQuery] = useState();

  useEffect(() => {
    axiosClient
      .post("/", { query: reviewsQuery })
      .then((responseData) => setDataQuery(responseData.data.data))
      .catch((err) => console.log(err));
  }, []);  

  return (
    <>
      {dataQuery && (
        <>
          <SEO title="Reviews | Wioletta Gruszecka Stylist" />

          <ContentTemplate title="Reviews">
            <ContentContainer>
              <ReviewsList reviews={dataQuery.allReviews} />
            </ContentContainer>
          </ContentTemplate>
        </>
      )}
    </>
  );
};

export default Reviews;
