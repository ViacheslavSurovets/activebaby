import React from 'react';
import { shallow } from 'enzyme';
import SearchMobile from './SearchMobile';


describe ( 'SearchMobile', () => {

  it ( 'SearchMobile Snapshot', () => {
    expect ( shallow ( <SearchMobile  /> ) ).toMatchSnapshot ();
  } );
} );
