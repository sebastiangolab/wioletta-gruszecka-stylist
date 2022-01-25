import React from "react";
import {
  Wrapper,
  Row,
  Column1,
  Column2,
  TextSection,
  Socials,
  Image,
} from './FrontCover.styles';
import Button from 'components/atoms/Button';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import PageTitle from 'components/atoms/PageTitle';
import FrontCoverImg from 'images/front-cover-img.png';

const FrontCover = () => (
  <Wrapper>
    <Row>
      <Column1>
        <TextSection>
          <PageTitle>Wioletta Gruszecka Stylist</PageTitle>
          <p>
            My name is Wioletta and I am a professional and qualified hair
            stylist with many years of experience and the love for creating
            beautiful hair is my passion.
          </p>
          <Button to="/services">View services</Button>
        </TextSection>

        <Socials>
          <a
            href="https://www.facebook.com/wiolettagruszeckahair"
            title="Facebook"
            rel="noreferrer"
            target="_blank"
          >
            <FaFacebookF />
            Like our fanpage
          </a>

          <a
            href="https://www.instagram.com/wioletta_gruszecka_stylist/"
            title="Instagram"
            rel="noreferrer"
            target="_blank"
          >
            <FaInstagram />
            Follow our profile
          </a>
        </Socials>
      </Column1>

      <Column2>
        <Image>
          <img src={FrontCoverImg} alt="hair services" />
        </Image>
      </Column2>
    </Row>
  </Wrapper>
);

export default FrontCover;
