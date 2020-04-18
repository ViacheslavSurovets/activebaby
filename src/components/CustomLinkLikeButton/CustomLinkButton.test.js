import React from 'react';
import { shallow } from 'enzyme';
import CustomLinkLikeButton from './CustomLinkLikeButton';


describe ( 'CustomLinkLikeButton', () => {
  it ( 'CustomLinkLikeButton Snapshot', () => {
    expect ( shallow ( <CustomLinkLikeButton /> ) ).toMatchSnapshot ();
  } );
} );
