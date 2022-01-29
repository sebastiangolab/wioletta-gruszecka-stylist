import React from "react";
import {
  Wrapper,
  TextSection,
  ServicesList,
  Service,
  StyledLink,
} from './FrontServices.styles';
import { ButtonHref } from 'components/atoms/Button';
import PageTitle from 'components/atoms/PageTitle';

const FrontServices = ({ servicesText }) => (
  <Wrapper>
    <TextSection>
      <PageTitle>Services</PageTitle>

      <p>{servicesText}</p>

      <ButtonHref
        href="https://booksy.com/en-gb/57758_wioletta-gruszecka-stylist_hair-salon_1177313_patchway"
        target="_blank"
      >
        Book on Booksy
      </ButtonHref>
    </TextSection>

    <ServicesList>
      <Service>
        <h2>Cut service</h2>
        <StyledLink to="/services">See more</StyledLink>
      </Service>

      <Service>
        <h2>Colour service</h2>
        <StyledLink to="/services">See more</StyledLink>
      </Service>

      <Service>
        <h2>Treatment</h2>
        <StyledLink to="/services">See more</StyledLink>
      </Service>

      <Service>
        <h2>Exclusive</h2>
        <StyledLink to="/services">See more</StyledLink>
      </Service>

      <Service>
        <h2>MAKE-UP</h2>
        <StyledLink to="/services">See more</StyledLink>
      </Service>
    </ServicesList>
  </Wrapper>
);

export default FrontServices;
