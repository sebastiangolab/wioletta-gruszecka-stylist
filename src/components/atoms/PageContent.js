import styled from "styled-components";

const PageContent = styled.div`
  p {
    line-height: 1.6em;
  }

  h2 {
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }
`;

export default PageContent;
