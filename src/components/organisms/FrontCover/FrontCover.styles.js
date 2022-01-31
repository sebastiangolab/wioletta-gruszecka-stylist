import styled from "styled-components";
import HeaderCoverBackground from "images/header-cover-background.webp";

export const Wrapper = styled.div`
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
  background-position: right top;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: calc(100vh - 189px);

  @media (max-width: 1589px) {
    min-height: calc(100vh - 181px);
  }

  @media (max-width: 1199px) {
    min-height: calc(100vh - 170px);
  }

  @media (max-width: 991px) {
    min-height: calc(100vh - 112px);
  }

  @media (max-width: 767px) {
    min-height: calc(100vh - 86px);
  }

  @media (max-width: 575px) {
    min-height: calc(100vh - 155px);
  }
`;

export const TextSection = styled.div`
  margin-bottom: 20%;
  padding-left: 50px;
  max-width: 435px;

  @media (max-width: 1589px) {
    padding-left: 20px;
    margin-bottom: 15%;
  }

  @media (max-width: 1199px) {
    padding-left: 10px;
    margin-bottom: 13%;
    padding-right: 20px;
  }

  @media (max-width: 991px) {
    padding-left: 0;
    padding-right: 15px;
  }

  @media (max-width: 767px) {
    padding: 30px 20px;
  }

  @media (max-width: 575px) {
    padding-left: 15px;
    padding-right: 15px;
  }

  p {
    line-height: 1.6em;
    margin-bottom: 25px;
    @media (max-width: 1199px) {
      margin-bottom: 20px;
    }
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
      content: "";
      display: block;
      margin-right: 10px;
      width: 50px;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.black};
    }
    &:first-child {
      margin-bottom: 35px;
      @media (max-width: 1589px) {
        margin-bottom: 30px;
      }
      @media (max-width: 1199px) {
        margin-bottom: 25px;
      }
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
  height: ${({ height }) => `${height}px`};
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;

  @media (max-width: 1589px) {
    width: calc(55% - 15px);
  }

  @media (max-width: 767px) {
    display: none;
  }
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

  @media (max-width: 1199px) {
    padding-left: 3.5%;
    padding-right: 3.5%;
    padding-top: 0;
    padding-bottom: 4%;
  }
  & > div {
    display: block;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;

    img {
      object-fit: contain !important;
    }
  }
`;
