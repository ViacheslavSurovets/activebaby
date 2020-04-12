import React from 'react';
import { LinkCardHover } from '@components';
import { chantal, cristiano } from '@assets/sliderMain';
import { CardWrapper } from './styles';


const data = [
  {
    id: 1,
    title: 'adamex',
    background: chantal,
    url: '#'
  },
  {
    id: 2,
    title: 'cristiano',
    background: cristiano,
    url: '#'
  }
];


const CardContainer = () => (
  <CardWrapper>
    { data.map ( ( { id, ...rest } ) =>
      <LinkCardHover key={ id } { ...rest } />
    ) }
  </CardWrapper>
);

export default CardContainer;
