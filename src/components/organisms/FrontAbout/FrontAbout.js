import React from "react";
import {
  Wrapper,
  Column1,
  TextRow,
  ReviewContainer,
  Author,
  Column2,
  Image,
  Background,
} from './FrontAbout.styles';
import PageTitle from 'components/atoms/PageTitle';
import FrontAboutImg from 'images/front-about-img.png';

const FrontAbout = () => (
  <Wrapper>
    <Column1>
      <PageTitle>Little more about me</PageTitle>

      <TextRow>
        <p>
          I began my journey with hair as a young girl. I went to a hairdressing
          technical school and at the same time, at the age of 16, I started
          working as a hairdresser after school hours in Jean Louis David.
        </p>

        <p>
          Currently I run my own salon in Bristol, where I am constantly
          developing my passion and taking part in additional training and
          courses as I am always open to learning new ideas and techniques.
        </p>
      </TextRow>

      <ReviewContainer>
        <p>
          “I was so happy with the service! Wioletta paid attention to what I
          wanted and exceeded the results! She really and truly is a miracle in
          repairing your hair.”
        </p>

        <Author>~ Gurmit K.</Author>
      </ReviewContainer>
    </Column1>

    <Column2>
      <Image>
        <img src={FrontAboutImg} alt="about me" />
      </Image>
      <Background />
    </Column2>
  </Wrapper>
);

export default FrontAbout;
