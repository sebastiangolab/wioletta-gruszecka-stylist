import React from 'react';
import FrontCover from 'components/organisms/FrontCover/FrontCover';
import Container from 'components/atoms/Container';
import FrontAbout from 'components/organisms/FrontAbout/FrontAbout';
import FrontServices from 'components/organisms/FrontServices/FrontServices';
import FrontGallery from 'components/organisms/FrontGallery/FrontGallery';
import FrontCardsAndHours from 'components/organisms/FrontCardsAndHours/FrontCardsAndHours';
import FullContainer from 'components/atoms/FullContainer';
import PageBackground from 'components/atoms/PageBackground';

const IndexPage = () => (
  <>
    <Container>
      <FrontCover />
    </Container>

    <FullContainer>
      <PageBackground />

      <Container>
        <FrontAbout />
        <FrontServices />
        <FrontGallery />
        <FrontCardsAndHours />
      </Container>
    </FullContainer>
  </>
);

export default IndexPage;
