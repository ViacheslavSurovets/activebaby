import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShopCartDropdown } from '@components/ShopCart/styles';
import { CustomButton } from '@components';

const ShopCartDropdownComponent = ( { ...rest } ) => {
  const { t, i18n } = useTranslation ();
  return (
    <ShopCartDropdown { ...rest } className='js-shopCartDropdown'>
      <span>{ t ( 'header.headerCart.cartIsEmpty' ) }</span>
      <CustomButton orangeSoft width={ '75%' }>Go To Checkout</CustomButton>
    </ShopCartDropdown>
  );
};

export default ShopCartDropdownComponent;
