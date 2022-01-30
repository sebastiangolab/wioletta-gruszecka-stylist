import { Link } from "gatsby";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: ${({ theme }) => theme.marginBetweenSections};

  @media (max-width: 1589px) {
    margin-top: ${({ theme }) => theme.max1589px.marginBetweenSections};
  }

  @media (max-width: 1199px) {
    flex-wrap: wrap;
    margin-top: ${({ theme }) => theme.max1199px.marginBetweenSections};
  }

  @media (max-width: 991px) {
    margin-top: ${({ theme }) => theme.max991px.marginBetweenSections};
  }

  @media (max-width: 767px) {
    margin-top: ${({ theme }) => theme.max767px.marginBetweenSections};
  }

  @media (max-width: 575px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const TextSection = styled.div`
  width: calc(25% - 5px);
  padding-right: 65px;

  @media (max-width: 1589px) {
    width: calc(25% - 5px);
    padding-right: 20px;
  }

  @media (max-width: 1199px) {
    width: calc(100%);
    padding-right: 0;
  }

  p {
    margin-bottom: 25px;
    line-height: 1.6em;

    @media (max-width: 1589px) {
      margin-bottom: 20px;
    }

    @media (max-width: 1199px) {
      margin-bottom: 15px;
    }
  }
`;

export const ServicesList = styled.div`
  width: calc(75% - 5px);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 25px;

  @media (max-width: 1589px) {
    width: calc(75% - 5px);
    grid-gap: 15px;
  }

  @media (max-width: 1199px) {
    width: calc(100%);
    grid-gap: 25px;
    margin-top: 30px;
  }

  @media (max-width: 991px) {
    grid-gap: 20px;
    margin-top: 25px;
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 575px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Service = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 52px 10px;
  border-radius: ${({ theme }) => theme.borderRadius};

  @media (max-width: 1199px) {
    padding: 40px 10px;
  }

  @media (max-width: 991px) {
    padding: 35px 10px;
  }

  @media (max-width: 575px) {
    padding: 30px 10px;
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    line-height: 1.5em;
    margin-bottom: 16px;
    text-align: center;

    @media (max-width: 1589px) {
      font-size: ${({ theme }) => theme.fontSizes.m};
      margin-bottom: 15px;
    }
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.black};
  transition: ${({ theme }) => theme.transitions.color};

  &:hover {
    color: ${({ theme }) => theme.colors.blackHover};
  }
`;
