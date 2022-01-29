import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 6px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: 25px;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.serviceTitle};
  line-height: 1.5em;
  margin-bottom: 4px;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.serviceDescription};
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 0 !important;
`;

export const Price = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  padding-left: 70px;
  padding-right: 15px;
  margin-bottom: 0 !important;

  @media (max-width: 1199px) {
    font-size: ${({ theme }) => theme.fontSizes.max1199px.servicePrice};
  }
`;
