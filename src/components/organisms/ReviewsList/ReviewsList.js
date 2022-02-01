import React from "react";
import { Wrapper } from "./ReviewsList.styles";
import Review from "../../molecules/Review/Review";

const ReviewsList = ({ reviews }) => (
  <Wrapper>
    {reviews.map((review) => (
      <Review key={review.author} data={review} />
    ))}
  </Wrapper>
);

export default ReviewsList;
