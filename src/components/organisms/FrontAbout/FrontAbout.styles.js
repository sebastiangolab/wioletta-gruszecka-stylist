import styled from "styled-components";
import FrontAboutBackground from "images/front-about-background.jpg";

export const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.marginBetweenSections};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1589px) {
    margin-top: ${({ theme }) => theme.max1589px.marginBetweenSections};
  }

  @media (max-width: 1199px) {
    margin-top: ${({ theme }) => theme.max1199px.marginBetweenSections};
  }

  @media (max-width: 991px) {
    flex-wrap: wrap;
    margin-top: ${({ theme }) => theme.max991px.marginBetweenSections};
  }

  @media (max-width: 767px) {
    margin-top: ${({ theme }) => theme.max767px.marginBetweenSections};
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 575px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const Column1 = styled.div`
  width: calc(58.33333333% - 20px);

  @media (max-width: 1199px) {
    width: calc(58.33333333% - 15px);
  }

  @media (max-width: 991px) {
    width: calc(100%);
  }
`;

export const TextRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 60px;
  margin-bottom: 40px;
  line-height: 1.6em;

  @media (max-width: 1199px) {
    grid-gap: 25px;
    margin-bottom: 30px;
  }

  @media (max-width: 991px) {
    grid-gap: 30px;
    margin-bottom: 20px;
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;
  }
`;

export const ReviewContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 30px 24px;

  @media (max-width: 1199px) {
    padding: 25px 20px;
  }

  @media (max-width: 767px) {
    padding: 15px 15px;
  }

  p {
    font-style: italic;
    margin-bottom: 15px;
    line-height: 1.6em;
  }
`;

export const Author = styled.div`
  text-align: right;
  line-height: 1.6em;
`;

export const Column2 = styled.div`
  width: calc(41.66666667% - 20px);
  position: relative;

  @media (max-width: 1199px) {
    width: calc(41.66666667% - 15px);
  }

  @media (max-width: 991px) {
    display: none;
  }
`;

export const Image = styled.div`
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const Background = styled.div`
  position: absolute;
  right: 0;
  bottom: -120px;
  z-index: -1;
  display: block;
  width: 100%;
  height: 100%;
  background-image: url(${FrontAboutBackground});
  background-position: right bottom;
  background-repeat: no-repeat;

  @media (max-width: 1199px) {
    bottom: -90px;
    background-position: center bottom;
  }
`;
