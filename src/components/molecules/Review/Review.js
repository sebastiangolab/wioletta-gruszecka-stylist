import React from "react";
import { Wrapper, Text, Author } from "./Review.styles";

const Review = ({ data: { text, author } }) => (
  <Wrapper>
    <Text>"{text}"</Text>

    <Author>~ {author}</Author>
  </Wrapper>
);

export default Review;
