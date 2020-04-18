import React from 'react';
import { HeaderNavContainer } from '@components/HeaderNavContainer';
import { OnScrollHeaderWrapper } from './styles';
import PropTypes from 'prop-types';

const OnScrollHeader = ( { visible } ) => (
  <OnScrollHeaderWrapper visible={visible}>
    <HeaderNavContainer />
  </OnScrollHeaderWrapper>
);

export default OnScrollHeader;

OnScrollHeader.propTypes = {
  visible: PropTypes.bool.isRequired
};
