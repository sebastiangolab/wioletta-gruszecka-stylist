import React from "react";
import { Wrapper, StyledLink, Title, CloseIcon } from "./MobileMenu.styles";

const MobileMenu = ({ isOpen, closeMenu }) => (
  <Wrapper isOpen={isOpen}>
    <div>
      <Title>Menu</Title>
      <CloseIcon onClick={closeMenu}>X</CloseIcon>
    </div>
    <StyledLink to="/">Start</StyledLink>
    <StyledLink to="/about">About us</StyledLink>
    <StyledLink to="/services">Services</StyledLink>
    <StyledLink to="/gallery">Gallery</StyledLink>
    <StyledLink to="/reviews">Reviews</StyledLink>
    <StyledLink to="/contact">Contact</StyledLink>
  </Wrapper>
);

export default MobileMenu;
