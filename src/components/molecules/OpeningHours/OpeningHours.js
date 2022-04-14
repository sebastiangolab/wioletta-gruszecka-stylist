import React from "react";
import PageTitle from "components/atoms/PageTitle";
import { Wrapper } from "./OpeningHours.styles";

const OpeningHours = ({
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
  isContactPage = false,
}) => (
  <Wrapper isContactPage={isContactPage}>
    <PageTitle isContactPage={isContactPage}>Opening hours:</PageTitle>
    <p>As a freelance I'm not working on specific hours so please contact me to get appointment or try find the best date for you on booksy website</p>
    {/* <p>
      Monday: <strong>{monday}</strong>
    </p>

    <p>
      Tuesday: <strong>{tuesday}</strong>
    </p>

    <p>
      Wednesday: <strong>{wednesday}</strong>
    </p>

    <p>
      Thursday: <strong>{thursday}</strong>
    </p>

    <p>
      Friday: <strong>{friday}</strong>
    </p>

    <p>
      Saturday: <strong>{saturday}</strong>
    </p>

    <p>
      Sunday: <strong>{sunday}</strong>
    </p> */}
  </Wrapper>
);

export default OpeningHours;
