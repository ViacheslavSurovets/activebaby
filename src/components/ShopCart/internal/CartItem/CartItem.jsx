import React from 'react';
import {
  CartItemContainer,
  CartItemDetails,
  CartItemImage,
  CartItemPrice,
  CartItemText
} from './styles';
import PropTypes from 'prop-types';

const CartItem = ( { item: { images, price, title, quantity } } ) => (
  <CartItemContainer>
    <CartItemImage src={ images[ 0 ] } alt={ title } />
    <CartItemDetails>
      <CartItemText>{ title }</CartItemText>
      <CartItemPrice>
        { quantity } x { price }BYN
      </CartItemPrice>
    </CartItemDetails>
  </CartItemContainer>
);

export default CartItem;

CartItem.propTypes = {
  item: PropTypes.any
};
