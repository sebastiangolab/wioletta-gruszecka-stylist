import styled from "styled-components";
import PageTitle from "components/atoms/PageTitle";

export const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.marginBetweenSections};
  margin-bottom: ${({ theme }) => theme.marginBetweenSections};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1589px) {
    margin-top: ${({ theme }) => theme.max1589px.marginBetweenSections};
    margin-bottom: ${({ theme }) => theme.max1589px.marginBetweenSections};
  }

  @media (max-width: 1199px) {
    margin-top: ${({ theme }) => theme.max1199px.marginBetweenSections};
    margin-bottom: ${({ theme }) => theme.max1199px.marginBetweenSections};
  }

  @media (max-width: 991px) {
    flex-wrap: wrap;
    margin-top: ${({ theme }) => theme.max991px.marginBetweenSections};
    margin-bottom: ${({ theme }) => theme.max991px.marginBetweenSections};
  }

  @media (max-width: 767px) {
    margin-top: ${({ theme }) => theme.max767px.marginBetweenSections};
    margin-bottom: ${({ theme }) => theme.max767px.marginBetweenSections};
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 575px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const Cards = styled.div`
  width: calc(50% - 24px);
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 50px;
  text-align: center;

  @media (max-width: 1589px) {
    grid-gap: 30px;
  }

  @media (max-width: 1199px) {
    width: calc(50% - 30px);
  }

  @media (max-width: 991px) {
    width: 100%;
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 50px;
  }

  p {
    line-height: 1.6em;
    margin-bottom: 10px;

    @media (max-width: 1589px) {
      min-height: 52px;
    }

    @media (max-width: 767px) {
      min-height: 0;
    }
  }

  img {
    width: 100%;
    height: auto;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`;

export const StyledPageTitle = styled(PageTitle)`
  margin-bottom: 5px;
`;

export const HoursContainer = styled.div`
  width: calc(50% - 15px);
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
  min-height: 457px;

  @media (max-width: 1589px) {
    min-height: 375px;
  }

  @media (max-width: 1199px) {
    width: calc(50% - 10px);
  }

  @media (max-width: 991px) {
    width: 100%;
    min-height: 0;
    padding: 30px 15px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
    margin-top: 50px;
  }

  @media (max-width: 767px) {
    padding-left: 0;
    padding-right: 0;
  }
`;
