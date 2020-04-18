import React from 'react';
import { shallow } from 'enzyme';
import Articles from './Articles';


describe ( 'Articles', () => {
  const mockMatch = {
    path: 'string'
  };
  it ( 'Articles Snapshot', () => {
    expect ( shallow ( <Articles match={ mockMatch } /> ) ).toMatchSnapshot ();
  } );
} );
