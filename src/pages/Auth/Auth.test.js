import React from 'react';
import { shallow } from 'enzyme';
import Auth from './Auth';


describe ( 'Auth', () => {

  it ( 'Auth Snapshot', () => {
    expect ( shallow ( <Auth  /> ) ).toMatchSnapshot ();
  } );
} );
