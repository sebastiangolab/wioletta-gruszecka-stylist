import React from "react";
import { Wrapper, BookButton, Tel } from "./RightHeader.styles";
import { FaPhoneAlt } from 'react-icons/fa';
import MobileMenuButton from "components/molecules/MobileMenuButton/MobileMenuButton";

const RightHeader = ({ openMobileMenu }) => (
  <Wrapper>
    <Tel href="tel:+447919028614">
      <FaPhoneAlt />
      +44 7919028614
    </Tel>
    <BookButton
      target="_blank"
      href="https://booksy.com/en-gb/57758_wioletta-gruszecka-stylist_hair-salon_1177313_patchway"
    >
      Book on Booksy
    </BookButton>
    <MobileMenuButton onClick={openMobileMenu} />
  </Wrapper>
);

export default RightHeader;
