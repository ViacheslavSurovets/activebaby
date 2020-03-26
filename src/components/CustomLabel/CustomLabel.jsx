import React from 'react';
import { Label } from './styles';
import PropTypes from 'prop-types';

const CustomLabel = ( { children , ...rest } ) => (
  <Label { ...rest }>
    { children }
  </Label>
);

export default CustomLabel;

CustomLabel.propTypes = {
  children: PropTypes.string
};
