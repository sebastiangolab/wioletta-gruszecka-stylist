import React from "react";
import {
  Wrapper,
  Cards,
  HoursContainer,
  StyledPageTitle,
} from "./FrontsCardsAndHours.style";
import VoucherForServicesImg from "images/voucher-for-services.jpg";
import LoyaltyCardImg from "images/loyalty-card.jpg";
import OpeningHours from "components/molecules/OpeningHours/OpeningHours";

const FrontCardsAndHours = ({ daysHour }) => (
  <Wrapper>
    <Cards>
      <div>
        <StyledPageTitle>Voucher for services</StyledPageTitle>
        <p>In our salon you can order a voucher for services</p>
        <img src={VoucherForServicesImg} alt="voucher for services" />
      </div>

      <div>
        <StyledPageTitle>Loyalty card</StyledPageTitle>
        <p>Collect stamps on the card to get promotions for services</p>
        <img src={LoyaltyCardImg} alt="loyalty card" />
      </div>
    </Cards>

    <HoursContainer>
      <OpeningHours
        monday={daysHour.monday}
        tuesday={daysHour.tuesday}
        wednesday={daysHour.wednesday}
        thursday={daysHour.thursday}
        friday={daysHour.friday}
        saturday={daysHour.saturday}
        sunday={daysHour.sunday}
      />
    </HoursContainer>
  </Wrapper>
);

export default FrontCardsAndHours;
