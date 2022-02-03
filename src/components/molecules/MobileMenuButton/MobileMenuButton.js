import React from "react";
import { Wrapper } from "./MobileMenuButton.styles";
import { FaBars } from 'react-icons/fa';

const MobileMenuButton = (props) => {
  return (
    <Wrapper {...props}>
      <FaBars />
    </Wrapper>
  );
};

export default MobileMenuButton;
