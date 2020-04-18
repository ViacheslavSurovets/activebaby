import React from 'react';
import { shallow } from 'enzyme';
import CustomLabel from './CustomLabel';


describe ( 'CustomLabel', () => {
  it ( 'CustomLabel Snapshot', () => {
    expect ( shallow ( <CustomLabel /> ) ).toMatchSnapshot ();
  } );
} );
