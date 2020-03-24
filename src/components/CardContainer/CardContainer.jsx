import React from 'react';
import styled from 'styled-components';
import { LinkCardHover } from '@components';
import { chantal, cristiano } from '@assets/sliderMain';
import { tablet, mobile } from '@media';


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

const CardWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2vw 3vw;
  position:relative;
  ${ tablet }{
    flex-direction: column;
    .js-linkCardHover:nth-child(2){
      margin-top: 1rem;
    }
  }
  ${ mobile }{
    flex-direction: column;
    .js-linkCardHover:nth-child(2){
      margin-top: 1rem;
    }
  }
`;

const CardContainer = () => (
  <CardWrapper>
    { data.map ( ( { id, ...rest } ) =>
      <LinkCardHover key={ id } { ...rest } />
    ) }
  </CardWrapper>
);

export default CardContainer;
