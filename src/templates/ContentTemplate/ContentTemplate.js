import React from "react";
import { Wrapper } from "./ContentTemplate.styles";
import Container from "components/atoms/Container";
import Path from "components/molecules/Path/Path";
import PageTitle from "components/atoms/PageTitle";
import PageBackground from "components/atoms/PageBackground";
import PageContent from "../../components/atoms/PageContent";

const ContentTemplate = ({ title, children }) => (
  <>
    <PageBackground />
    <Container>
      <Wrapper>
        <Path currentTitle={title} />
        <PageTitle>{title}</PageTitle>
        <PageContent>{children}</PageContent>
      </Wrapper>
    </Container>
  </>
);

export default ContentTemplate;
