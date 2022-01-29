import React from "react";
import { Wrapper, Title, Description, Price } from "./Service.styles";

const Service = ({ data: { title, description, price } }) => (
  <Wrapper>
    <div>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </div>
    <Price>{price}</Price>
  </Wrapper>
);

export default Service;
