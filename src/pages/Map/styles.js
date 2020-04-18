import styled from 'styled-components';
import { desktop } from '@utils/media';

export const WrapperMap = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100%;
 ${desktop}{
  height: 50vw;
 }
 width: 100%;
`;
