import React from "react";
import {
  Wrapper,
  Row,
  Column1,
  Column2,
  TextSection,
  Socials,
  Image,
} from "./FrontCover.styles";
import Button from "components/atoms/Button";
import PageTitle from "components/atoms/PageTitle";
import FrontCoverImg from "images/front-cover-img.png";
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const FrontCover = ({ text }) => (
  <Wrapper>
    <Row>
      <Column1>
        <TextSection>
          <PageTitle>Wioletta Gruszecka Stylist</PageTitle>
          <p>{text}</p>
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
