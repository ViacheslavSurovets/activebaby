import React from 'react';
import { shallow } from 'enzyme';
import Map from './Map';


describe ( 'Map', () => {

  it ( 'Auth Snapshot', () => {
    expect ( shallow ( <Map  /> ) ).toMatchSnapshot ();
  } );
} );
