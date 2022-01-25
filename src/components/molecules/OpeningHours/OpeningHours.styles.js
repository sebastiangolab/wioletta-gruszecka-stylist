import styled from 'styled-components';

export const Wrapper = styled.div`
  p {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    font-size: ${({ theme }) => theme.fontSizes.xm};
    line-height: 1.6em;
    margin-bottom: 4px;

    &:last-child {
      margin-bottom: 0;
    }

    strong {
      font-weight: ${({ theme }) => theme.fontWeights.regular};
      margin-left: 3px;
    }
  }
`;
