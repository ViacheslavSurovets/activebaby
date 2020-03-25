import styled, { css } from 'styled-components';
import { commonFontSize } from '@commonStyles';

const stylesButtonDefault = css`
  ${ commonFontSize };
  color: ${ ( { theme } ) => theme.customButton.customButtonColor };
  border: 1px solid ${ ( { theme } ) => theme.customButton.customButtonBorderColor };
  background-color: ${ ( { theme } ) => theme.white };
  outline: none;
  width: 10rem;
  height: 5rem;
`;


export const Button = styled.button`
    ${ stylesButtonDefault };
`;
