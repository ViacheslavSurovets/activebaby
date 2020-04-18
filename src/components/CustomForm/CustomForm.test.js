import React from 'react';
import { shallow } from 'enzyme';
import CustomForm from './CustomForm';


describe ( 'CustomForm', () => {
  it ( 'CustomForm Snapshot', () => {
    expect ( shallow ( <CustomForm /> ) ).toMatchSnapshot ();
  } );
} );
