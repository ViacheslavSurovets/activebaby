import React from 'react';
import { shallow } from 'enzyme';
import SuspenseComponent from './SuspenseComponent';


describe ( 'SuspenseComponent', () => {

  it ( 'SuspenseComponent Snapshot', () => {
    expect ( shallow ( <SuspenseComponent /> ) ).toMatchSnapshot ();
  } );
} );
