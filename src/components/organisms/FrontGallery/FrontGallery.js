import React from "react";
import { Wrapper, StyledButton } from "./FrontGallery.styles";
import GalleryModule from "components/molecules/GalleryModule/GalleryModule";

const FrontGallery = ({ images }) => (
  <Wrapper>
    <GalleryModule images={images} isTabletLastImageHide />
    <StyledButton to="/gallery">See gallery</StyledButton>
  </Wrapper>
);

export default FrontGallery;
