import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 26px;
  margin-right: 75px;

  @media (max-width: 1589px) {
    margin-right: 30px;
  }

  @media (max-width: 1199px) {
    margin-right: 20px;
  }
`;

export const Tel = styled.a`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.headerButtons};
  transition: ${({ theme }) => theme.transitions.color};

  &:hover {
    color: ${({ theme }) => theme.colors.blackHover};
  }

  svg {
    font-size: 19px;
    margin-right: 10px;
  }

  @media (max-width: 1199px) {
    font-size: ${({ theme }) => theme.fontSizes.max1199px.headerButtons};

    svg {
      font-size: 18px;
      margin-right: 7px;
    }
  }
`;

export const BookButton = styled.a`
  display: inline-block;
  margin-top: 15px;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 15px 58px 14px 58px;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => theme.transitions.background};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  &:hover {
    background-color: ${({ theme }) => theme.colors.blackHover};
  }

  @media (max-width: 1589px) {
    padding: 13px 50px 12px 50px;
    margin-top: 11px;
  }

  @media (max-width: 1199px) {
    padding: 11px 32px 10px 32px;
    margin-top: 10px;
  }
`;
