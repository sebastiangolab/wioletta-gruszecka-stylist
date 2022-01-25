import React from "react";
import { Wrapper, StyledButton } from './FrontGallery.styles';
import FrontGalleryImg1 from 'images/front-gallery-1.jpeg';
import FrontGalleryImg2 from 'images/front-gallery-2.jpeg';
import FrontGalleryImg3 from 'images/front-gallery-3.jpeg';
import FrontGalleryImg4 from 'images/front-gallery-4.jpeg';
import Gallery from 'components/molecules/Gallery/Gallery';

const FrontGallery = () => (
  <Wrapper>
    <Gallery
      images={[
        FrontGalleryImg1,
        FrontGalleryImg2,
        FrontGalleryImg3,
        FrontGalleryImg4,
      ]}
    />
    <StyledButton to="/gallery">See gallery</StyledButton>
  </Wrapper>
);

export default FrontGallery;
