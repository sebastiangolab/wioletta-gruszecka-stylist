import styled from 'styled-components';
import BackgroundImg from 'images/background.png';

const PageBackground = styled.div`
  display: block;
  background-image: url(${BackgroundImg});
  background-repeat: repeat;
  background-position: top left;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export default PageBackground;
