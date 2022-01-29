import styled from "styled-components";

export const Wrapper = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 1.6em;
  margin-bottom: 15px;

  @media (max-width: 1199px) {
    margin-bottom: 10px;
  }

  a {
    color: ${({ theme }) => theme.colors.black};
    transition: ${({ theme }) => theme.transitions.color};

    &:hover {
      color: ${({ theme }) => theme.colors.blackHover};
    }
  }
`;
