import React from 'react';
import PropTypes from 'prop-types';

const FailIcon = ( { width = '36', height = '36', color = 'white' } ) => (
  <svg width={ width } height={ height } viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 14L12 12M12 12L14 10M12 12L10 10M12 12L14 14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke={ color } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>

);

export default FailIcon;

FailIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string
};
