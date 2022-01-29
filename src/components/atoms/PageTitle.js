import styled from "styled-components";

const PageTitle = styled.h1`
  font-size: ${({ theme, isContactPage }) =>
    isContactPage ? theme.fontSizes.xl : theme.fontSizes.title};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1.5em;
  margin-bottom: 15px;

  @media (max-width: 1199px) {
    font-size: ${({ theme, isContactPage }) =>
      isContactPage ? theme.fontSizes.xl : theme.fontSizes.max1199px.title};
    margin-bottom: 10px;
  }
`;

export default PageTitle;
