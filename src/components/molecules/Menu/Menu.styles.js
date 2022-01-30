import styled from "styled-components";
import { Link } from "gatsby";

export const Wrapper = styled.div`
  display: flex;
  margin-top: 33px;
  padding-right: 110px;

  @media (max-width: 1589px) {
    margin-top: 31px;
    padding-right: 0;
  }

  @media (max-width: 1199px) {
    margin-top: 29px;
  }

  @media (max-width: 991px) {
    display: none;
  }
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

  @media (max-width: 1589px) {
    margin-left: 32px;
  }

  @media (max-width: 1199px) {
    margin-left: 27px;
    font-size: ${({ theme }) => theme.fontSizes.max1199px.menuLink};
  }
`;
