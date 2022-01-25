import React from "react";
import Header from 'components/organisms/Header/Header';
import FullContainer from 'components/atoms/FullContainer';
import Container from 'components/atoms/Container';
import Footer from 'components/molecules/Footer/Footer';

const MainTemplate = ({ children }) => {
  return (
    <>
      <Container>
        <Header />
      </Container>

      <FullContainer>{children}</FullContainer>

      <Footer />
    </>
  );
};
export default MainTemplate;
