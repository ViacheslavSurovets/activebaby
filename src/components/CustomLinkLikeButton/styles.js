import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { commonFontSize, flexCommon } from '@commonStyles';

const stylesLinkLikeButtonDefault = css`
  ${flexCommon};
  ${ commonFontSize };
  color: ${ ( { theme } ) => theme.customButton.customButtonColor };
  border: 1px solid ${ ( { theme } ) => theme.customButton.customButtonBorderColor };
  background-color: ${ ( { theme } ) => theme.white };
  outline: none;
  text-decoration: none;
  width: 10rem;
  height: 5rem;
  &:hover {
    background: ${ ( { theme } ) => theme.black };
    color: ${ ( { theme } ) => theme.white };
  }
`;


export const LinkButton = styled ( Link )`
    ${ stylesLinkLikeButtonDefault };
`;
