import styled from 'styled-components';
import { commonStyleTextThreeRem } from '@src/styles/commonStylesAndStyledComponents';

export const ErrorBoundaryContainer = styled.div`
  height: 80vh;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${ ( { imageUrl } ) => `url(${ imageUrl })` };
  background-size: cover;
  background-position: center;
  width: 50vh;
  height: 50vh;
`;

export const ErrorImageText = styled.h2`
  ${ commonStyleTextThreeRem };
   margin-top: 2rem;
   color: ${ ( { theme } ) => theme.darkGray };
   text-align: center;
`;
