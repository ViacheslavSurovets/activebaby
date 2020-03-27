import React from 'react';
import { GoogleMaps } from '@components/GoogleMaps';
import styled from 'styled-components';
import { desktop } from '@media';

const WrapperMap = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100%;
 ${desktop}{
  height: 50vw;
 }
 width: 100%;
`;

const Map = () => (
  <WrapperMap>
    <GoogleMaps />
  </WrapperMap>
);

export default Map;
