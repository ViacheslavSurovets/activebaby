import React from 'react';
import { shallow } from 'enzyme';
import SocialLinksComponent from './SocialLinksComponent';


describe ( 'SocialLinksComponent', () => {
  it ( 'SocialLinksComponent Snapshot', () => {
    expect ( shallow ( <SocialLinksComponent /> ) ).toMatchSnapshot ();
  } );
} );
