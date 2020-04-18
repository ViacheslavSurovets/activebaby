import React from 'react';
import { shallow } from 'enzyme';
import CustomInput from './CustomInput';


describe ( 'CustomInput', () => {
  it ( 'CustomInput Snapshot', () => {
    expect ( shallow ( <CustomInput /> ) ).toMatchSnapshot ();
  } );
} );
