import styled from 'styled-components';
import PageTitle from 'components/atoms/PageTitle';

export const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.marginBetweenSections};
  margin-bottom: ${({ theme }) => theme.marginBetweenSections};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Cards = styled.div`
  width: calc(66.66666667% - 24px);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  text-align: center;

  p {
    line-height: 1.6em;
    margin-bottom: 12px;
  }

  img {
    max-width: 100%;
    height: auto;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`;

export const StyledPageTitle = styled(PageTitle)`
  margin-bottom: 10px;
`;

export const HoursContainer = styled.div`
  width: calc(33.33333333% - 15px);
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
  min-height: 457px;
`;
