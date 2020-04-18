import React from 'react';
import {
  CartItemContainer,
  CartItemDetails,
  CartItemImage,
  CartItemPrice,
  CartItemText
} from './styles';
import PropTypes from 'prop-types';

const CartItem = ( { item } ) => {
    const { images, price, title, quantity } = item;
  return (
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
};

export default CartItem;

CartItem.propTypes = {
  item: PropTypes.object
};
