import React from 'react';
import { shallow } from 'enzyme';
import CustomButton from './CustomButton';


describe ( 'CustomButton', () => {
  it ( 'CustomButton Snapshot', () => {
    expect ( shallow ( <CustomButton /> ) ).toMatchSnapshot ();
  } );
} );
