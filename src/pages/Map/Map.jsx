import React from 'react';
import { GoogleMaps } from '@components/GoogleMaps';
import styled from 'styled-components';

const WrapperMap = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100%;
 width: 100%;
`;

const Map = () => (
  <WrapperMap>
    <GoogleMaps />
  </WrapperMap>
);

export default Map;
