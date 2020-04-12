import styled from 'styled-components';
import { mobile, tablet } from '@utils/media';

export const CardWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2vw 3vw;
  position:relative;
  ${ tablet }{
    flex-direction: column;
    .js-linkCardHover:nth-child(2){
      margin-top: 1rem;
    }
  }
  ${ mobile }{
    flex-direction: column;
    .js-linkCardHover:nth-child(2){
      margin-top: 1rem;
    }
  }
`;