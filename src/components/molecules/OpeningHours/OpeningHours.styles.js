import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: ${({ isContactPage }) => (isContactPage ? "40px" : 0)};

  p {
    width: 100%;
    max-width: 240px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    font-size: ${({ theme }) => theme.fontSizes.xm};
    line-height: 1.6em;
    margin-bottom: 4px;

    @media (max-width: 1199px) {
      max-width: 250px;
      font-size: ${({ theme }) => theme.fontSizes.s};
    }

    &:last-child {
      margin-bottom: 0;
    }

    strong {
      font-weight: ${({ theme }) => theme.fontWeights.regular};
      margin-left: 10px;
    }
  }
`;
