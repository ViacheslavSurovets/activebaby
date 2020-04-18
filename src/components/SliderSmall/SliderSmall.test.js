import React from 'react';
import { shallow } from 'enzyme';
import SliderSmall from './SliderSmall';
import * as img from '@assets/sliderSmallFirst';


describe ( 'SliderSmall', () => {
  const mockItems = [
    {
      imageUrl: img.cristiano,
      title: 'Cristiano',
      path: '#',
      label: 'string'
    }
  ];

  it ( 'SearchMobile Snapshot', () => {
    expect ( shallow ( <SliderSmall items={ mockItems } /> ) ).toMatchSnapshot ();
  } );
} );
