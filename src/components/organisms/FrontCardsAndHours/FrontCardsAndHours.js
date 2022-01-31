import React from "react";
import {
  Wrapper,
  Cards,
  HoursContainer,
  StyledPageTitle,
} from "./FrontsCardsAndHours.style";
// import VoucherForServicesImg from "images/voucher-for-services.jpg";
// import LoyaltyCardImg from "images/loyalty-card.jpg";
import OpeningHours from "components/molecules/OpeningHours/OpeningHours";
import { StaticImage } from "gatsby-plugin-image";

const FrontCardsAndHours = ({ daysHour }) => (
  <Wrapper>
    <Cards>
      <div>
        <StyledPageTitle>Voucher for services</StyledPageTitle>
        <p>In our salon you can order a voucher for services</p>
        <a href="https://booksy.com/en-gb/57758_wioletta-gruszecka-stylist_hair-salon_1177313_patchway" target="_blank">
          <StaticImage
            src="../../../images/voucher-for-services.jpg"
            width={492}
            alt="voucher for services"
            placeholder="none"
          />
        </a>
      </div>

      <div>
        <StyledPageTitle>Loyalty card</StyledPageTitle>
        <p>Collect stamps on the card to get promotions for services</p>
        <StaticImage
          src="../../../images/loyalty-card.jpg"
          width={492}
          alt="loyalty card"
          placeholder="none"
        />
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
