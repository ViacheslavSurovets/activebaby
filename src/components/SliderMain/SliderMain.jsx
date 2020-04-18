import React, { useCallback } from 'react';
import Swiper from '../../core/swiper';
import { PopUpButton, Slide, PopUpTitle, PopUpText, PopUp, Img } from './styles';
import { SliderWrapper } from '@commonStyles';
import PropTypes from 'prop-types';

const SliderMain = ( { items } ) => {

  const params = {
    ContainerEl: 'section',
    slideActiveClass: 'js-slider-main',
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 5000
    }
  };

  const renderItem = useCallback (
    ( { idx, imageUrl, title, popUpData, path } ) => (
      <Slide to={path} key={ idx } background={ imageUrl }>
        <Img src={ imageUrl } alt={ title } />
        <PopUp>
          <PopUpText>{ popUpData.info }</PopUpText>
          <PopUpTitle>{ popUpData.title }</PopUpTitle>
          <PopUpText>{ popUpData.text } </PopUpText>
          <PopUpButton>button</PopUpButton>
        </PopUp>
      </Slide>
    ),
    []
  );

  return (
    <SliderWrapper>
      <Swiper params={ params }>
        { items.map ( renderItem ) }
      </Swiper>
    </SliderWrapper>
  );
};

export default SliderMain;

SliderMain.propTypes = {
  items: PropTypes.array.isRequired
};
