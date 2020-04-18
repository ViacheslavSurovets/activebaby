import React from 'react';
import { shallow } from 'enzyme';
import StripeButton from './StripeButton';


describe ( 'StripeButton', () => {

  it ( 'StripeButton Snapshot', () => {
    expect ( shallow ( <StripeButton /> ) ).toMatchSnapshot ();
  } );
} );
