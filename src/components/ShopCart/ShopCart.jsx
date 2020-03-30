import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { ShopCartIcon } from '@components';
import {CartWrapper, Counter, ShopCartInfo} from './styles';



const ShopCart = ( { count = 0 } ) => {
  const { t, i18n } = useTranslation ();
  return (
    <CartWrapper>
      <ShopCartIcon />
      <Counter>{ count }</Counter>
      <ShopCartInfo>
        <span>{ t ( 'header.headerCart.cartIsEmpty' ) }</span>
      </ShopCartInfo>
    </CartWrapper>
  );
};

export default ShopCart;

ShopCart.propTypes = {
  count: PropTypes.number
};
