import styled from 'styled-components';
import { mobile, tablet } from '@utils/media';

export const SearchMobileContent = styled.figure`
  display: none;
  ${ tablet },
  ${ mobile }{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-basis: 7rem;
    &:hover{
      div {
        display: flex;
      }
    }
  }
`;