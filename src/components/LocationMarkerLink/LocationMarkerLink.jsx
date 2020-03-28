import React from 'react';
import { LocationMarkerIcon } from '@components';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const MapIconWrapper = styled.figure`
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

const LocationMarkerLink = ( { history } ) => (
  <MapIconWrapper onClick={ () => history.push ( '/map' ) }>
    <LocationMarkerIcon />
  </MapIconWrapper>
);

export default withRouter ( LocationMarkerLink );

LocationMarkerLink.propTypes ={
  history: PropTypes.object
};
