import React from 'react';
import { HeaderNavContainer } from '@components/HeaderNavContainer';
import { OnScrollHeaderWrapper } from './styles';

const OnScrollHeader = ( { visible } ) => (
  <OnScrollHeaderWrapper visible={visible}>
    <HeaderNavContainer />
  </OnScrollHeaderWrapper>
);

export default OnScrollHeader;


