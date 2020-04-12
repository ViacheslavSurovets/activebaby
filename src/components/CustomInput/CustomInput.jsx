import React from 'react';
import { Input } from './styles';
import { CustomLabel } from '@components/CustomLabel';
import { InputWrapper } from '@commonStyles';
import PropTypes from 'prop-types';

const CustomInput = ( { label, children,  ...rest } ) => (
  <InputWrapper>
    {children}
    <Input { ...rest } />
    <CustomLabel>{label}</CustomLabel>
  </InputWrapper>
);

export default CustomInput;

CustomInput.propTypes = {
  label: PropTypes.any,
  children: PropTypes.any
};
