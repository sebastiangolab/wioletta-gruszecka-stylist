import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};

  p {
    font-size: ${({ theme }) => theme.fontSizes.footer};
    line-height: 1.5em;
    padding-top: 1px;

    @media (max-width: 1199px) {
      font-size: ${({ theme }) => theme.fontSizes.max1199px.footer};
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
`;
