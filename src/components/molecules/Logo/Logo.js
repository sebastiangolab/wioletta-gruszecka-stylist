import React from "react";
// import logoImg from 'images/logo.jpg';
import { Wrapper } from "./Logo.styles";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Logo = () => (
  <Wrapper as={Link} to="/">
    <StaticImage
      src="../../../images/logo.jpg"
      width={210}
      alt="Wioletta Gruszecka Stylist Logo"
      placeholder="none"
    />
  </Wrapper>
);

export default Logo;
