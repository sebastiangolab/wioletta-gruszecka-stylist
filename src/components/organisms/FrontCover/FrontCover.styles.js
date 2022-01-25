import styled from 'styled-components';
import HeaderCoverBackground from 'images/header-cover-background.jpg';

export const Wrapper = styled.div`
  height: calc(100vh - 194px);
  overflow: hidden;
  position: relative;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 100%;
`;

export const Column1 = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 4%;
  background-image: url(${HeaderCoverBackground});
  background-position: right bottom;
  background-repeat: no-repeat;
`;

export const TextSection = styled.div`
  margin-bottom: 20%;
  padding-left: 50px;
  max-width: 435px;

  p {
    line-height: 1.6em;
    margin-bottom: 25px;
  }
`;

export const Socials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${({ theme }) => theme.colors.black};
    transition: ${({ theme }) => theme.transitions.color};

    &:hover {
      color: ${({ theme }) => theme.colors.blackHover};
    }

    &::before {
      content: '';
      display: block;
      margin-right: 10px;
      width: 50px;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.black};
    }

    &:first-child {
      margin-bottom: 35px;
    }

    svg {
      font-size: 20px;
      margin-right: 10px;
    }
  }
`;

export const Column2 = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 0 0 ${({ theme }) => theme.borderRadius} 0;
  width: calc(58.33333333% - 15px);
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 2%;
  padding-bottom: 5%;

  & img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }
`;
