import React from "react";
import { Wrapper } from "./ReviewsList.styles";
import Review from "../../molecules/Review/Review";

const ReviewsList = ({ reviews }) => (
  <Wrapper>
    {reviews.map((review) => (
      <Review key={review.node.author} data={review.node} />
    ))}
  </Wrapper>
);

export default ReviewsList;
