import React from 'react';
import { shallow } from 'enzyme';
import SliderSmallCard from './SliderSmallCard';


describe ( 'SliderSmallCard', () => {

   const [imageUrl, title, label, path] = 'string';

  it ( 'SliderSmallCard Snapshot', () => {
    expect ( shallow (
      <SliderSmallCard
        imageUrl={imageUrl}
        title={title}
        label={label}
        path={path}
      /> ) ).toMatchSnapshot ();
  } );
} );
