import styled from 'styled-components';

export const MapIconWrapper = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width:100%;
  
  
  &:hover {
    svg path {
      fill: ${ ( { theme } ) => theme.header.colorOnHover }
    }
  }
`;