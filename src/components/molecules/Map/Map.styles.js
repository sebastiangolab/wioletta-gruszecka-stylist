import styled from "styled-components";

export const Wrapper = styled.iframe`
  width: 100%;
  max-width: 1050px;
  height: 450px !important;
  margin-top: 40px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
`;
