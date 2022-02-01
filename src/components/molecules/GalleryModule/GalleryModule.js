import React from "react";
import { useState } from "react";
import { Wrapper } from "./GalleryModule.styles";
import Lightbox from "react-image-lightbox";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const GalleryModule = ({
  isGalleryPage = false,
  isTabletLastImageHide = false,
  ...args
}) => {
  const images = args.images;
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  console.log(images[0].url);

  const handleOnClickImage = (index) => {
    setIsOpen(true);
    setPhotoIndex(index);
  };

  return (
    <Wrapper
      isGalleryPage={isGalleryPage}
      isTabletLastImageHide={isTabletLastImageHide}
    >
      {images.map((image, index) => {
        const { responsiveImage } = image;

        const gatsbyImageData = {
          height: responsiveImage.height,
          images: {
            fallback: {
              sizes: responsiveImage.sizes,
              src: responsiveImage.src,
              srcSet: responsiveImage.srcSet,
            },
            sources: [],
          },
          layout: "constrained",
          placeholder: {
            fallback: responsiveImage.base64,
          },
          width: responsiveImage.width,
        };

        const image2 = getImage(gatsbyImageData);
        return (
          <GatsbyImage
            key={index}
            image={image2}
            onClick={() => handleOnClickImage(index)}
            alt="hair stylist realization"
          />
        );
      })}

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex].url}
          nextSrc={images[(photoIndex + 1) % images.length].url}
          prevSrc={
            images[(photoIndex + images.length - 1) % images.length].url
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </Wrapper>
  );
};

export default GalleryModule;
