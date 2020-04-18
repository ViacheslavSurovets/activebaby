import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';


describe ( 'Header', () => {
  it ( 'Header Snapshot', () => {
    expect ( shallow ( <Header /> ) ).toMatchSnapshot ();
  } );
} );
