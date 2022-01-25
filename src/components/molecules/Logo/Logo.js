import React from "react";
import logoImg from 'images/logo.jpg';
import { Wrapper } from './Logo.styles';
import { Link } from 'gatsby';

const Logo = () => (
  <Wrapper as={Link} to="/">
    <img src={logoImg} alt="Wioletta Gruszecka Stylist Logo" />
  </Wrapper>
);

export default Logo;
