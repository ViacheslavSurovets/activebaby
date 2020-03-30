import styled, { css } from 'styled-components';

const stylesInfoWindow = css`
  font-size: 2rem;
`;

export const InfoWindowTitle = styled.div`
`;

export const InfoWindowTitleText = styled.span`
  ${ stylesInfoWindow };
  &:first-child {
  color: ${ ( { theme } ) => theme.blue };
  }
  &:last-child{
  color: ${ ( { theme } ) => theme.pink };
  }
`;
