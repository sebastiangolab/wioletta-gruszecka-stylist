import React from "react";
import { useState } from 'react';
import { Wrapper } from './Gallery.styles';
import Lightbox from 'react-image-lightbox';

const Gallery = ({ ...args }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleOnClickImage = (index) => {
    setIsOpen(true);
    setPhotoIndex(index);
  };

  return (
    <Wrapper>
      {args.images.map((image, index) => (
        <img
          key={image}
          src={image}
          onClick={() => handleOnClickImage(index)}
          alt="hair stylist realization"
        />
      ))}

      {isOpen && (
        <Lightbox
          mainSrc={args.images[photoIndex]}
          nextSrc={args.images[(photoIndex + 1) % args.images.length]}
          prevSrc={
            args.images[
              (photoIndex + args.images.length - 1) % args.images.length
            ]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + args.images.length - 1) % args.images.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % args.images.length)
          }
        />
      )}
    </Wrapper>
  );
};

export default Gallery;
