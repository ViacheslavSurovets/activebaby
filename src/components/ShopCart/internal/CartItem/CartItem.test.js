import React from 'react';
import { shallow } from 'enzyme';
import CartItem from './CartItem';


describe ( 'CartItem', () => {

  const mockItem = {
    images: [],
    price: 'string',
    title: 'string',
    quantity: 'string'
  };

  it ( 'SearchMobile Snapshot', () => {
    expect ( shallow ( <CartItem item={ mockItem } /> ) ).toMatchSnapshot ();
  } );
} );
