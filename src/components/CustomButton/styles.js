import styled, { css } from 'styled-components';
import { commonFontSize } from '@commonStyles';
import { mobile } from '@utils/media';

const stylesButtonDefault = css`
  ${ commonFontSize };
  outline: none;
  min-width: 10rem;
  height: 5rem;
  font-size: 1.6rem;
`;

const styleButton = css`
  color: ${ ( { theme } ) => theme.customButton.customButtonColor };
  border: 1px solid ${ ( { theme } ) => theme.customButton.customButtonBorderColor };
  background-color: ${ ( { theme } ) => theme.white };
&:hover {
    color: ${ ( { theme } ) => theme.white };
    background: ${ ( { theme } ) => theme.black };
  }
`;

const styleButtonOrangeSoft = css`
  color: ${ ( { theme } ) => theme.white };
  background:${ ( { theme } ) => theme.orangeSoft };
  border: 1px solid transparent;
  &:hover {
    color: ${ ( { theme } ) => theme.orangeSoft };
    background:  ${ ( { theme } ) => theme.white };
    border: 1px solid ${ ( { theme } ) => theme.orangeSoft };
  }
`;

const googleSignInStyles = css`
  background-color: ${ ( { theme } ) => theme.googleButtonColor };
  color: ${ ( { theme } ) => theme.white };
  border: 1px solid transparent;
  &:hover {
    background-color: ${ ( { theme } ) => theme.white };
    color: ${ ( { theme } ) => theme.googleButtonColor };
    border: 1px solid  ${ ( { theme } ) => theme.googleButtonColor };
  }
`;

const getStyleButton = ( props ) => {
  if ( props.orangeSoft ) {
    return styleButtonOrangeSoft;
  }
  if ( props.googleButton ) {
    return googleSignInStyles;
  }
  return styleButton;
};

const styleButtonDisplay = css`
  width: 100%;
`;

const styleButtonMediaQueryMobile = css`
  ${ mobile }{
    width: 90%;
  }
`;

const getMediaQuery = ( props ) => {
  if ( props.mobile ) {
    return styleButtonMediaQueryMobile;
  }
  return;
};

const getStyleButtonDisplayBlock = ( props ) => {
  if ( props.block ) {
    return styleButtonDisplay;
  }
  return;
};


export const Button = styled.button`
    ${ stylesButtonDefault };
    ${ getStyleButtonDisplayBlock };
    ${ getStyleButton };
    ${getMediaQuery};
     margin-top: ${ props => props.marginTop }rem;
     margin-bottom: ${ props => props.marginBottom }rem;
     margin-right: ${ props => props.marginRight }rem;
     margin-left: ${ props => props.marginLeft }rem;
     font-size: ${ props => props.fontSize }rem;
     width: ${ props => props.width };
     cursor:pointer;
`;
