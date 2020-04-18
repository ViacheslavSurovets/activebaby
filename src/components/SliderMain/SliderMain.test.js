import React from 'react';
import { shallow } from 'enzyme';
import SliderMain from './SliderMain';
import { sliderHugeSecond_1 } from '@assets/sliderHugeSecond';


describe ( 'SliderMain', () => {
  const mockItems = [
    {
      idx: 1,
      title: 'Adamex',
      imageUrl: sliderHugeSecond_1,
      path: '#',
      popUpData: {
        info: 'info',
        title: 'Title',
        text: 'text',
        button: 'button'
      }
    }
  ];
  it ( 'SliderMain Snapshot', () => {
    expect ( shallow ( <SliderMain items={ mockItems } /> ) ).toMatchSnapshot ();
  } );
} );
