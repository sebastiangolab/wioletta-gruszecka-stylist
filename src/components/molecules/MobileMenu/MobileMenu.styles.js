import styled from "styled-components";
import { Link } from "gatsby";

export const Wrapper = styled.div`
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 35vw;
  height: 100vh;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 25px;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 99999999;
  transform: ${({isOpen}) => isOpen ? 'translateX(0)' : 'translateX(-100vh)' };
  transition: transform 0.3s;

  @media (max-width: 991px) {
    display: flex;
  }

  @media (max-width: 767px) {
    width: 50vw;
  }

  @media (max-width: 575px) {
    width: 90vw;
  }

  div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1em;
`;

export const CloseIcon = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1em;
`;

export const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 20px;
`;
