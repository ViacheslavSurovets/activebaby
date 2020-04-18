import React from 'react';
import { shallow } from 'enzyme';
import CategoryItem from './CategoryItem';


describe ( 'CategoryItem', () => {

  it ( 'CategoryItem Snapshot', () => {
    expect ( shallow ( <CategoryItem  /> ) ).toMatchSnapshot ();
  } );
} );
