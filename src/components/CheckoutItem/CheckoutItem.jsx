import React from 'react';
import { connect } from 'react-redux';
import {
  CheckoutItemContainer,
  ImageContainer,
  QuantityContainer,
  RemoveButtonContainer,
  TextContainer
} from './styles';
import { clearItemFromCart, addItem, removeItem } from '@redux/cart/cart.actions';
import PropTypes from 'prop-types';

const CheckoutItem = ( { cartItem, clearItem, addItem, removeItem } ) => {
  const { title, images, price, quantity } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={ images[ 0 ] } alt='item' />
      </ImageContainer>
      <TextContainer>{ title }</TextContainer>
      <QuantityContainer>
        <div onClick={ () => removeItem ( cartItem ) }>&#10094;</div>
        <span>{ quantity }</span>
        <div onClick={ () => addItem ( cartItem ) }>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{ price }</TextContainer>
      <RemoveButtonContainer onClick={ () => clearItem ( cartItem ) }>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch ( clearItemFromCart ( item ) ),
  addItem: item => dispatch ( addItem ( item ) ),
  removeItem: item => dispatch ( removeItem ( item ) )
});

export default connect ( null, mapDispatchToProps ) ( CheckoutItem );


CheckoutItem.propTypes = {
  cartItem: PropTypes.object,
  clearItem: PropTypes.func,
  addItem: PropTypes.func,
  removeItem: PropTypes.func
};

