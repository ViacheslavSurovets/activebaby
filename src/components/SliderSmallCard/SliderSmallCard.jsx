import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { flexCommon } from '@commonStyles';

const Slide = styled ( Link )`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 20vw;
  text-decoration: none;
`;

const SliderSmallImage = styled.img`
  width: 100%;
  height: 80%;
`;

const SliderSmallCardText = styled.span`
  ${ flexCommon };
  height: 20%;
  font-size: 1.6rem;
  color: ${ ( { theme } ) => theme.main.sliderSmallCard.sliderSmallCardText }
`;

const SliderSmallCard = ( { url, title } ) => (
  <Slide to='#' className="swiper-slide" url={ url }>
    <SliderSmallImage src={ url } alr={ title } />
    <SliderSmallCardText>{ title }</SliderSmallCardText>
  </Slide>
);

export default SliderSmallCard;

SliderSmallCard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};


