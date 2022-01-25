import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 25px;
  position: relative;
`;

export const Background = styled.div`
  display: block;
  background-color: ${({ theme }) => theme.colors.primary};
  width: calc(58.33333333% - 15px);
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
  border-radius: ${({ isFront, theme }) =>
    isFront
      ? `${theme.borderRadius} ${theme.borderRadius} 0 0`
      : theme.borderRadius};
`;
