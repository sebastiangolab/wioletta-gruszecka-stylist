import styled from "styled-components";

const ContactParagraph = styled.p`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.xm};
  padding-top: 5px;
  margin-bottom: 15px !important;

  @media (max-width: 1199px) {
    font-size: ${({ theme }) => theme.fontSizes.s};
    margin-bottom: 12px !important;
  }
`;

export default ContactParagraph;
