import React from 'react';
import PropTypes from 'prop-types';
import {
  Slide,
  SliderSmallCardText,
  SliderSmallImage,
  SliderSmallLabel,
  SliderSmallLabelText
} from './styles';


const SliderSmallCard = ( { url, title, label } ) => (
  <Slide to='#' className="swiper-slide" url={ url }>
    <SliderSmallImage src={ url } alr={ title } />
    <SliderSmallCardText>{ title }</SliderSmallCardText>
    <SliderSmallLabel>
      <SliderSmallLabelText>{ label }</SliderSmallLabelText>
    </SliderSmallLabel>
  </Slide>
);

export default SliderSmallCard;

SliderSmallCard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};


