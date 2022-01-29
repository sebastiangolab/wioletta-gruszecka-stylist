import React from "react";
import { Wrapper, CategoryWrapper } from "./ServicesList.styles";
import Category from "components/atoms/Category";
import Service from "components/molecules/Service/Service";

const ServicesList = ({ services: categories }) => {
  const sortCategories = [...categories].sort((a, b) =>
    a.node.order > b.node.order ? 1 : -1
  );

  return (
    <Wrapper>
      {sortCategories.map((category) => (
        <CategoryWrapper key={category.node.title}>
          <Category>{category.node.title}</Category>
          {category.node.treeChildren.map((service) => (
            <Service key={service.title} data={service} />
          ))}
        </CategoryWrapper>
      ))}
    </Wrapper>
  );
};

export default ServicesList;
