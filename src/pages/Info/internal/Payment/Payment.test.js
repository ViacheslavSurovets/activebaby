import React from 'react';
import { shallow } from 'enzyme';
import Payment from './Payment';


describe ( 'Payment', () => {

  it ( 'Payment Snapshot', () => {
    expect ( shallow ( <Payment  /> ) ).toMatchSnapshot ();
  } );
} );
