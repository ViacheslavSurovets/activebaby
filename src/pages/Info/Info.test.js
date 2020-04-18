import React from 'react';
import { shallow } from 'enzyme';
import Info from './Info';


describe ( 'Info', () => {
  const mockMatch = {
    path: 'string'
  };
  it ( 'Info Snapshot', () => {
    expect ( shallow ( <Info match={ mockMatch } /> ) ).toMatchSnapshot ();
  } );
} );
