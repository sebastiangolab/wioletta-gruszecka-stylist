import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;

  img {
    border: 1px solid #eee;
    border-radius: ${({ theme }) => theme.borderRadius};
    max-width: 374px;
    max-height: 300px;
    width: 100%;
    height: auto;
    object-fit: cover;
    overflow: hidden;
    object-position: center center;
    cursor: pointer;
    transition: opacity 0.3;

    &:hover {
      opacity: 0.85;
    }
  }
`;
