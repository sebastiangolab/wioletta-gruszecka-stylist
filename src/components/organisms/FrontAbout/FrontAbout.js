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
} from "./FrontAbout.styles";
import PageTitle from "components/atoms/PageTitle";
// import FrontAboutImg from 'images/front-about-img.png';
import { StaticImage } from "gatsby-plugin-image";

const FrontAbout = ({ aboutText1, aboutText2 }) => (
  <Wrapper>
    <Column1>
      <PageTitle>Little more about me</PageTitle>

      <TextRow>
        <p>{aboutText1}</p>
        <p>{aboutText2}</p>
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
        <StaticImage
          src="../../../images/front-about-img.png"
          width={427}
          alt="about me"
          placeholder="none"
        />
      </Image>
      <Background />
    </Column2>
  </Wrapper>
);

export default FrontAbout;
