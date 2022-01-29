import React, { useEffect, useState } from "react";
import { Wrapper, Background } from "./Header.styles";
import { globalHistory } from "@reach/router";
import Logo from "components/molecules/Logo/Logo";
import Menu from "components/molecules/Menu/Menu";
import RightHeader from "components/molecules/RightHeader/RightHeader";
import { checkIsFront } from "helpers/checkIsFront";

const Header = () => {
  const [isFront, setIsFront] = useState(
    checkIsFront(globalHistory.location.pathname)
  );

  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === "PUSH")
        setIsFront(checkIsFront(globalHistory.location.pathname));
    });
  }, [setIsFront]);

  return (
    <Wrapper>
      <Logo />
      <Menu />
      <RightHeader />
      <Background isFront={isFront} />
    </Wrapper>
  );
};

export default Header;
