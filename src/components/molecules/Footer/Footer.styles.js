import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};

  p {
    font-size: ${({ theme }) => theme.fontSizes.footer};
    line-height: 1.5em;
    padding-top: 1px;

    @media (max-width: 1199px) {
      font-size: ${({ theme }) => theme.fontSizes.max1199px.footer};
    }

    @media (max-width: 767px) {
      padding-top: 3px;
      padding-bottom: 2px;
    }

    @media (max-width: 575px) {
      font-size: 13px;
      text-align: center;
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.black};
    transition: ${({ theme }) => theme.transitions.color};

    &:hover {
      color: ${({ theme }) => theme.colors.blackHover};
    }
  }
`;

export const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 64px;

  @media (max-width: 767px) {
    min-height: 60px;
    flex-direction: column;
    padding: 15px 0 10px 0;
  }
`;
