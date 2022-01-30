import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1630px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 767px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export default Container;
