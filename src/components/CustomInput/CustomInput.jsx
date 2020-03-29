import React from 'react';
import { Input } from './styles';
import { CustomLabel } from '@components/CustomLabel';
import { InputWrapper } from '@commonStyles';

const CustomInput = ( { label, children,  ...rest } ) => (
  <InputWrapper>
    {children}
    <Input { ...rest } />
    <CustomLabel>{label}</CustomLabel>
  </InputWrapper>
);

export default CustomInput;
