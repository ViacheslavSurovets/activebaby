import React from 'react';
import { shallow } from 'enzyme';
import Root from './Root';


it ( 'should ', () => {
  const mockStore = {

  };
  expect ( shallow ( <Root store={mockStore} /> ) ).toMatchSnapshot();
} );


