import React from "react";
import { Link } from "gatsby";
import { Wrapper } from "./Path.styles";

const Path = ({ currentTitle }) => (
  <Wrapper>
    <Link to="/">Start</Link> {">"} {currentTitle}
  </Wrapper>
);

export default Path;
