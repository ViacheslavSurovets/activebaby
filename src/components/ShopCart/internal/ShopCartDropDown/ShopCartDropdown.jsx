import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import {
  ShopCartDropdown,
  CustomButtonWrapper,
  ShopCartDropDownText,
  ShopCartDropdownItemsWrapper
} from '@components/ShopCart/styles';
import { CustomButton } from '@components';
import { CartItem } from '../CartItem';
import { selectCartItems } from '@redux/cart/cart.selectors';
import PropTypes from 'prop-types';

const ShopCartDropdownComponent = ( { cartItems, history, ...rest } ) => {
  const { t } = useTranslation ();
  return (
    <ShopCartDropdown { ...rest } className='js-shopCartDropdown'>
      <ShopCartDropdownItemsWrapper>
        {
          cartItems.length ?
            cartItems.map ( cartItem =>
              <CartItem key={ cartItem.id } item={ cartItem } /> )
            :
            (<ShopCartDropDownText>{ t ( 'header.headerCart.cartIsEmpty' ) }</ShopCartDropDownText>)
        }
      </ShopCartDropdownItemsWrapper>
      {
        cartItems.length ? (<CustomButtonWrapper>
          <CustomButton onClick={()=> history.push('/checkout')} orangeSoft width={ '100%' }>{ t ( 'shopCartDropdown.goToCheckout' ) }</CustomButton>
        </CustomButtonWrapper>) : null
      }
    </ShopCartDropdown>

  );
};

const mapStateToProps = createStructuredSelector ( {
  cartItems: selectCartItems
} );

export default withRouter(connect ( mapStateToProps ) ( ShopCartDropdownComponent ));

ShopCartDropdownComponent.propTypes = {
  cartItems: PropTypes.any,
  history: PropTypes.object
};

