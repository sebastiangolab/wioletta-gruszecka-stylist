import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactIcon = styled(FontAwesomeIcon)`
  margin-top: 5px;
  font-size: ${({ theme }) => theme.fontSizes.contactIcon};
  margin-right: 10px;

  @media (max-width: 1199px) {
    font-size: ${({ theme }) => theme.fontSizes.max1199px.contactIcon};
  }
`;

export default ContactIcon;
