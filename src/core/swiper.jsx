import React, { memo } from 'react';
import ReactIdswiper from 'react-id-swiper';
// import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export default memo ( ( { children, params } ) => (
  <ReactIdswiper { ...params }>{ children }</ReactIdswiper>
) );

