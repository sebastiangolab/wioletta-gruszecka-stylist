import { Link } from "gatsby";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: ${({ theme }) => theme.marginBetweenSections};
`;

export const TextSection = styled.div`
  width: calc(25% - 15px);
  padding-right: 75px;

  p {
    margin-bottom: 25px;
    line-height: 1.6em;
  }
`;

export const ServicesList = styled.div`
  width: calc(75% - 15px);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
`;

export const Service = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 52px 10px;
  border-radius: ${({ theme }) => theme.borderRadius};

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    line-height: 1.5em;
    margin-bottom: 16px;
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.black};
  transition: ${({ theme }) => theme.transitions.color};

  &:hover {
    color: ${({ theme }) => theme.colors.blackHover};
  }
`;
