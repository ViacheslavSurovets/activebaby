import React from 'react';
import { Button } from './styles';
import PropTypes from 'prop-types';

const CustomButton = ( { children , ...rest } ) => (
  <Button { ...rest }>
    { children }
  </Button>
);

export default CustomButton;

CustomButton.propTypes = {
  children: PropTypes.any
};

