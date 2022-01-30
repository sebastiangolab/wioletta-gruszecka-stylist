import React, { useState } from "react";
import Header from "components/organisms/Header/Header";
import FullContainer from "components/atoms/FullContainer";
import Container from "components/atoms/Container";
import Footer from "components/molecules/Footer/Footer";
import MobileMenu from "components/molecules/MobileMenu/MobileMenu";

const MainTemplate = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenMobileMenu = () => setIsMobileMenuOpen(true);
  const handleCloseMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <Container>
        <Header
          openMobileMenu={handleOpenMobileMenu}
          closeMobileMenu={handleCloseMobileMenu}
        />
      </Container>

      <FullContainer>{children}</FullContainer>

      <Footer />
      <MobileMenu isOpen={isMobileMenuOpen} closeMenu={handleCloseMobileMenu} />
    </>
  );
};
export default MainTemplate;
