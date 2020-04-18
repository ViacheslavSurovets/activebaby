import React from 'react';
import { shallow } from 'enzyme';
import Portal from './Portal';


describe ( 'Portal', () => {
    const MockComponent = () => (
      <h1>Mock Component</h1>
    );

  it ( 'Portal Snapshot', () => {
    expect ( shallow ( <Portal component={ MockComponent } /> ) ).toMatchSnapshot ();
  } );
} );
