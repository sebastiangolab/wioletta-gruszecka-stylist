import styled from "styled-components";
import { Link } from "gatsby";

const Button = styled(Link)`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.m};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 13px 55px 12px 55px;
  transition: ${({ theme }) => theme.transitions.background};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const ButtonHref = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.m};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 13px 55px 12px 55px;
  transition: ${({ theme }) => theme.transitions.background};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export default Button;
