import styled from 'styled-components';
import {mobile} from '@media';

export const AlertContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
  width: 40rem;
  height: 12rem;
  position:absolute;
  top: 10%;
  left: 50%;
  margin-left: -15rem ;
  background: ${ ( { theme } ) => theme.ghostWhite };
  ${mobile}{
    width: 95%;
    margin-left: -48.5%;
  };
`;

export const AlertText = styled.div`
  text-align: center;
`;
