import React from "react";
import { Wrapper, Background } from "./Header.styles";
import { useLocation } from "react-router-dom";
import Logo from "components/molecules/Logo/Logo";
import Menu from "components/molecules/Menu/Menu";
import RightHeader from "components/molecules/RightHeader/RightHeader";

const Header = (props) => {
  console.log(props);

  return (
    <Wrapper>
      <Logo />
      <Menu />
      <RightHeader />
      <Background />
    </Wrapper>
  );
};

export default Header;
