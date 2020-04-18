import React from 'react';
import { shallow } from 'enzyme';
import HeaderNavContainer from './HeaderNavContainer';


describe ( 'HeaderNavContainer', () => {
  it ( 'HeaderNavContainer Snapshot', () => {
    expect ( shallow ( <HeaderNavContainer /> ) ).toMatchSnapshot ();
  } );
} );
