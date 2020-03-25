import React from 'react';
import { LinkButton } from './styles';
import PropTypes from 'prop-types';

const CustomLinkLikeButton = ({ children }, url,  { ...rest } ) => (
  <LinkButton to={ url } { ...rest }>
    { children }
  </LinkButton>
);

export default CustomLinkLikeButton;

CustomLinkLikeButton.propTypes = {
  children: PropTypes.string
};
