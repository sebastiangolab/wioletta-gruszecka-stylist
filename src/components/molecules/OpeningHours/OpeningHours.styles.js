import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: ${({ isContactPage }) => (isContactPage ? "40px" : 0)};
  display: flex;
  flex-direction: column;
  padding-left: ${({ isContactPage }) => (isContactPage ? "0" : "20%")};
  padding-right: ${({ isContactPage }) => (isContactPage ? "0" : "20%")};

  @media (max-width: 991px) {
    padding-left: ${({ isContactPage }) => (isContactPage ? "0" : "20px")};
    padding-right: ${({ isContactPage }) => (isContactPage ? "0" : "20px")};
  }

  p {
    width: 100%;
    /* max-width: 240px; */
    max-width: 100%;
    display: grid;
    /* grid-template-columns: repeat(2, 1fr); */
    margin-bottom: 4px;

    @media (max-width: 1199px) {
      /* max-width: 250px; */
      max-width: 100%;
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
