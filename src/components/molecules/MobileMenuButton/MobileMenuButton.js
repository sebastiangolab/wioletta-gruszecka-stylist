import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Wrapper } from "./MobileMenuButton.styles";

const MobileMenuButton = (props) => {
  return (
    <Wrapper {...props}>
      <FontAwesomeIcon icon={faBars} />
    </Wrapper>
  );
};

export default MobileMenuButton;
