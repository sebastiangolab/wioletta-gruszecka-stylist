import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  padding-top: ${({ isGalleryPage }) => (isGalleryPage ? "5px" : 0)};

  @media (max-width: 1589px) {
    grid-gap: 25px;
  }

  @media (max-width: 1199px) {
    grid-gap: 20px;
  }

  @media (max-width: 991px) {
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);

    & img:last-child {
      display: ${({ isTabletLastImageHide }) =>
        isTabletLastImageHide ? "none" : "block"};
    }
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);

    & img:last-child {
      display: block;
    }
  }

  @media (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }

  img {
    border: 1px solid #eee;
    border-radius: ${({ theme }) => theme.borderRadius};
    max-height: 300px;
    min-height: 100%;
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

    @media (max-width: 991px) {
      max-height: 360px;
    }

    @media (max-width: 375px) {
      max-height: 400px;
    }
  }
`;
