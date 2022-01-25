import styled from 'styled-components';
import Button from 'components/atoms/Button';

export const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.marginBetweenSections};
  text-align: center;
`;

export const StyledButton = styled(Button)`
  margin-top: 30px;
`;
