import React from 'react';
import { LocationMarkerIcon } from '@components';
import { withRouter } from 'react-router-dom';
import { MapIconWrapper } from './styles';
import PropTypes from 'prop-types';


const LocationMarkerLink = ( { history } ) => (
  <MapIconWrapper onClick={ () => history.push ( '/map' ) }>
    <LocationMarkerIcon />
  </MapIconWrapper>
);

export default withRouter ( LocationMarkerLink );

LocationMarkerLink.propTypes = {
  history: PropTypes.object
};
