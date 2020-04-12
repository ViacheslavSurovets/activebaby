import React from 'react';
import { shallow } from 'enzyme';
import Root from './Root';


it ( 'should ', () => {
  expect ( shallow ( <Root /> ) ).toMatchSnapshot();
} );


