import styled from "styled-components";

const PageContent = styled.div`
  p {
    line-height: 1.6em;
    margin-bottom: 25px;

    @media (max-width: 1199px) {
      margin-bottom: 20px;
    }
  }

  h2 {
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }
`;

export default PageContent;
