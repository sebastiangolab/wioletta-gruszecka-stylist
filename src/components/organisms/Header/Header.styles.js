import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
  position: relative;

  @media (max-width: 991px) {
    margin-top: 15px;
  }

  @media (max-width: 767px) {
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 575px) {
    flex-direction: column;
    padding-left: 15px;
    padding-right: 15px;
  }
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

  @media (max-width: 1589px) {
    width: calc(55% - 15px);
  }

  @media (max-width: 767px) {
    display: none;
  }
`;
