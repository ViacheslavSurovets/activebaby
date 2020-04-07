import React from 'react';
import PropTypes from 'prop-types';

const CloseIcon = ( { width = '24', height = '24', color = 'white' } ) => (

  <svg width={ width } height={ height } viewBox="0 0 24 24" fill='none' xmlns="http://www.w3.org/2000/svg">
    <path d="M6 18L18 6M6 6L18 18" stroke={ color } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default CloseIcon;


CloseIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string
};
