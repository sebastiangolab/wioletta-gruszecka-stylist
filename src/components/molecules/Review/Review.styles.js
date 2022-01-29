import styled from "styled-components";

export const Wrapper = styled.div`
  padding-bottom: 36px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  position: relative;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-style: italic;
  margin-bottom: 0 !important;
`;

export const Author = styled.p`
  position: absolute;
  bottom: 5px;
  right: 0;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin-bottom: 0 !important;
`;
