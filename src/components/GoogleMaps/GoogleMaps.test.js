import React from 'react';
import { shallow } from 'enzyme';
import GoogleMaps from './GoogleMaps';


describe ( 'GoogleMaps', () => {
  it ( 'GoogleMaps Snapshot', () => {
    expect ( shallow ( <GoogleMaps /> ) ).toMatchSnapshot ();
  } );
} );
