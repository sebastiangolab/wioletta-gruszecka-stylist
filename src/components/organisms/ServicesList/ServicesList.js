import React from "react";
import { Wrapper, CategoryWrapper } from "./ServicesList.styles";
import Category from "components/atoms/Category";
import Service from "components/molecules/Service/Service";

const ServicesList = ({ services: categories }) => {
  const sortCategories = [...categories].sort((a, b) =>
    a.order > b.order ? 1 : -1
  );

  return (
    <Wrapper>
      {sortCategories.map((category) => (
        <CategoryWrapper key={category.title}>
          <Category>{category.title}</Category>
          {category.children.map((service) => (
            <Service key={service.title} data={service} />
          ))}
        </CategoryWrapper>
      ))}
    </Wrapper>
  );
};

export default ServicesList;
