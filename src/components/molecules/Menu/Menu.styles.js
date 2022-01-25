import styled from 'styled-components';
import { Link } from 'gatsby';

export const Wrapper = styled.div`
  display: flex;
  margin-top: 33px;
  padding-right: 110px;
`;

export const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.menuLink};
  color: ${({ theme }) => theme.colors.black};
  transition: ${({ theme }) => theme.transitions.color};
  margin-left: 50px;
  line-height: 18px;

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.blackHover};
  }
`;
