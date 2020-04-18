import React from 'react';
import { shallow } from 'enzyme';
import VisitUsContainer from './VisitUsContainer';


describe ( 'VisitUsContainer', () => {

  it ( 'VisitUsContainer Snapshot', () => {
    expect ( shallow ( <VisitUsContainer /> ) ).toMatchSnapshot ();
  } );
} );
