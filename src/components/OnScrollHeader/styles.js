import styled, { css } from 'styled-components';
import { desktop } from '@utils/media';

 const styleOnScrollHeaderWrapperVisible = css`
    visibility: visible;
    opacity: 1;
    width: 100%;
    height: inherit;
    color: inherit;
    transition: opacity 1s, visibility 1s;
    nav {
      position: absolute;
    }
`;

const styleOnScrollHeaderWrapperUnvisible = css`
  height: 0;
  width: 0;
  opacity: 0;
  visibility: hidden;
`;

export const getStylesScrollWrapper = ( props ) => {
  if ( props.visible ){
    return styleOnScrollHeaderWrapperVisible;
  } else {
    return styleOnScrollHeaderWrapperUnvisible;
  }
};

export const OnScrollHeaderWrapper = styled.div`
   ${desktop}{
      z-index: 10;
      position: sticky;
      top:0;
      background-color:#fff;
      
      ${getStylesScrollWrapper};
   }
`;
