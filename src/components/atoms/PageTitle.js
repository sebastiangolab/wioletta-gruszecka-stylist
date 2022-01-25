import styled from 'styled-components';

const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1.5em;
  margin-bottom: 15px;
`;

export default PageTitle;
