import React from "react";
import { Wrapper, FooterRow } from "./Footer.styles";
import Container from "components/atoms/Container";
import { getCurrentYear } from "helpers/getCurrentYear";

const Footer = () => (
  <Wrapper>
    <Container>
      <FooterRow>
        <p>
          © {getCurrentYear()} Wioletta Gruszecka Stylist. All rights reserved
        </p>
        <p>
          Projekt i realizacja:
          <a href="http://sebastiangolab.pl/" target="_blank" rel="noreferrer">
            {" "}
            Sebastian Gołąb
          </a>
        </p>
      </FooterRow>
    </Container>
  </Wrapper>
);

export default Footer;
