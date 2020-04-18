import React from 'react';
import { shallow } from 'enzyme';
import * as icon from '@icons';


describe ( 'icons', () => {
  it ( 'icons Snapshot', () => {
    expect ( shallow ( <icon.FailIcon /> ) ).toMatchSnapshot ();
    expect ( shallow ( <icon.CheckedIcon /> ) ).toMatchSnapshot ();
    expect ( shallow ( <icon.CloseIcon /> ) ).toMatchSnapshot ();
    expect ( shallow ( <icon.InstagramIcon /> ) ).toMatchSnapshot ();
    expect ( shallow ( <icon.LocationMarkerIcon /> ) ).toMatchSnapshot ();
    expect ( shallow ( <icon.LoginIcon /> ) ).toMatchSnapshot ();
    expect ( shallow ( <icon.SearchIcon /> ) ).toMatchSnapshot ();
    expect ( shallow ( <icon.ShopCartIcon /> ) ).toMatchSnapshot ();
    expect ( shallow ( <icon.VkIcon /> ) ).toMatchSnapshot ();
  } );
} );
