import React from 'react';
import { shallow } from 'enzyme';
import LocationMarkerLink from './LocationMarkerLink';


describe ( 'LocationMarkerLink', () => {
  it ( 'LocationMarkerLink Snapshot', () => {
    expect ( shallow ( <LocationMarkerLink /> ) ).toMatchSnapshot ();
  } );
} );
