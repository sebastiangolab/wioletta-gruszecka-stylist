import styled from "styled-components";

const Category = styled.h2`
  width: 100%;
  height: 109px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: 1em;
  padding-top: 4px;
  margin-bottom: 20px;

  @media (max-width: 1199px) {
    height: 90px;
    font-size: ${({ theme }) => theme.fontSizes.max1199px.category};
  }
`;

export default Category;
