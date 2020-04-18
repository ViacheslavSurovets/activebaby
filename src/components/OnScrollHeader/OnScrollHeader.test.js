import React from 'react';
import { shallow } from 'enzyme';
import OnScrollHeader from './OnScrollHeader';


describe ( 'OnScrollHeader', () => {

  it ( 'OnScrollHeader Snapshot', () => {
    expect ( shallow ( <OnScrollHeader visible /> ) ).toMatchSnapshot ();
  } );
} );
