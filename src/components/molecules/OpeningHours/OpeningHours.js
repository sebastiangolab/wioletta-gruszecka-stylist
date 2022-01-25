import React from "react";
import PageTitle from 'components/atoms/PageTitle';
import { Wrapper } from './OpeningHours.styles';

const OpeningHours = () => (
  <Wrapper>
    <PageTitle>Opening hours:</PageTitle>

    <p>
      Monday: <strong>closed</strong>
    </p>

    <p>
      Tuesday: <strong>13:00 - 21:00</strong>
    </p>

    <p>
      Wednesday: <strong>13:00 - 21:00</strong>
    </p>

    <p>
      Thursday: <strong>11:00 - 19:00</strong>
    </p>

    <p>
      Friday: <strong>9:00 - 17:00</strong>
    </p>

    <p>
      Saturday: <strong>9:00 - 17:00</strong>
    </p>

    <p>
      Sunday: <strong>closed</strong>
    </p>
  </Wrapper>
);

export default OpeningHours;
