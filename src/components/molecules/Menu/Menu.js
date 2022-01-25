import React from "react";
import { Wrapper, StyledLink } from './Menu.styles';

const Menu = () => (
  <Wrapper>
    <StyledLink to="/">Start</StyledLink>
    <StyledLink to="/about">About us</StyledLink>
    <StyledLink to="/services">Services</StyledLink>
    <StyledLink to="/gallery">Gallery</StyledLink>
    <StyledLink to="/reviews">Reviews</StyledLink>
    <StyledLink to="/contact">Contact</StyledLink>
  </Wrapper>
);

export default Menu;
