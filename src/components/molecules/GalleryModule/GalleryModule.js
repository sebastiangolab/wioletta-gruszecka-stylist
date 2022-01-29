import React from "react";
import { useState } from "react";
import { Wrapper } from "./GalleryModule.styles";
import Lightbox from "react-image-lightbox";

const Gallery = ({ isGalleryPage = false, ...args }) => {
  const images = args.images.map((image) => image.url);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleOnClickImage = (index) => {
    setIsOpen(true);
    setPhotoIndex(index);
  };

  return (
    <Wrapper isGalleryPage={isGalleryPage}>
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          onClick={() => handleOnClickImage(index)}
          alt="hair stylist realization"
        />
      ))}

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
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

export default Gallery;
