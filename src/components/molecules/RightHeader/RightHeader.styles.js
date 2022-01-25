import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 26px;
  margin-bottom: 26px;
  margin-right: 78px;
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
`;
