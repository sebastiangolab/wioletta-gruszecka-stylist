import styled from 'styled-components';
import Button from 'components/atoms/Button';

export const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.marginBetweenSections};
  text-align: center;

  @media (max-width: 1589px) {
    margin-top: ${({ theme }) => theme.max1589px.marginBetweenSections};
  }
  
  @media (max-width: 1199px) {
    margin-top: ${({ theme }) => theme.max1199px.marginBetweenSections};
  }

  @media (max-width: 991px) {
    margin-top: ${({ theme }) => theme.max991px.marginBetweenSections};
  }

  @media (max-width: 767px) {
    margin-top: ${({ theme }) => theme.max767px.marginBetweenSections};
    padding-left: 20px;
    padding-right: 20px;
  }
  
  @media (max-width: 575px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 30px;

  @media (max-width: 1199px) {
    margin-top: 25px;
  }
`;
