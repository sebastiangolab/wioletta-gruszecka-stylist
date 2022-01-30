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

  @media (max-width: 991px) {
    padding-bottom: ${({ theme }) => theme.max991px.marginBetweenSections};
  }

  @media (max-width: 767px) {
    padding-bottom: ${({ theme }) => theme.max767px.marginBetweenSections};
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 575px) {
      margin-top: 20px;
      padding-left: 15px;
      padding-right: 15px;
  }
`;
