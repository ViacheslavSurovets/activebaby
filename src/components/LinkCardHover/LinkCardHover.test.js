import React from 'react';
import { shallow } from 'enzyme';
import LinkCardHover from './LinkCardHover';
import { chantal } from '@assets/cardsHover';


describe ( 'LinkCardHover', () => {
  const mockCardData = {
    id: 1,
    title: 'adamex',
    imageUrl: chantal,
    path: '#'
  };

  it ( 'LinkCardHover Snapshot', () => {
    expect ( shallow ( <LinkCardHover data={ mockCardData } /> ) ).toMatchSnapshot ();
  } );
} );
