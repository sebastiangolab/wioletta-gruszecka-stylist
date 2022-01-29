import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 20px;
  padding-bottom: ${({ theme }) => theme.marginBetweenSections};

  @media (max-width: 1589px) {
    padding-bottom: ${({ theme }) => theme.max1589px.marginBetweenSections};
  }

  @media (max-width: 1199px) {
    padding-bottom: ${({ theme }) => theme.max1199px.marginBetweenSections};
  }
`;
